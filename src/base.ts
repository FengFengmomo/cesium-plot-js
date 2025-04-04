// @ts-ignore
import {
  State,
  GeometryStyle,
  PolygonStyle,
  LineStyle,
  EventType,
  EventListener,
  VisibleAnimationOpts,
  GrowthAnimationOpts,
} from './interface';
import EventDispatcher from './events';
import cloneDeep from 'lodash.clonedeep';
// import merge from 'lodash.merge';
import * as Utils from './utils';
import { BufferGeometry, Color, DoubleSide, Line, LineBasicMaterial, Material, Mesh, MeshBasicMaterial, Shape, ShapeGeometry, 
  SphereGeometry, ExtrudeGeometry, Vector2, Vector3, AlwaysStencilFunc, FrontSide, KeepStencilOp, IncrementWrapStencilOp,BackSide,
  DecrementWrapStencilOp,NotEqualStencilFunc,ReplaceStencilOp, Group} from 'three';
import UnitUtils from './UnitUtils';
import Listener from './lsitener';
import group from './Group';
let ref = 2;

export default class Base {
  viewer: any; // 这里的viewer是wegeo对象
  eventHandler: Listener;
  polygonEntity: Mesh| undefined;
  geometryPoints: Vector3[] = [];
  state: State = 'drawing';
  controlPoints: Mesh[] = []; // 控制点
  controlPointsEventHandler: Listener;
  lineEntity: Mesh|undefined;
  type!: 'polygon' | 'line';
  freehand!: boolean;
  style: GeometryStyle | undefined;
  outlineEntity: Line|undefined;
  eventDispatcher: EventDispatcher;
  dragEventHandler: Listener;
  entityId: number | undefined;
  points: Vector3[] = [];
  styleCache: GeometryStyle | undefined;
  minPointsForShape: number = 0;
  tempLineEntity: Line|undefined;
  color: number = 0xff8766;
  ref: number;

  extrudeSettings = { depth: 10000*2, bevelEnabled: false, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };
  minHeight = -65536;
  maxHeight = 65536;

  constructor(viewer: any, style?: GeometryStyle) {
    this.viewer = viewer;
    this.type = this.getType();
    this.ref = (ref++) * 3;

    this.mergeStyle(style);
    this.cartesianToLnglat = this.cartesianToLnglat.bind(this);
    this.pixelToCartesian = this.pixelToCartesian.bind(this);
    this.eventDispatcher = new EventDispatcher();
    // Disable default behavior for double-clicking on entities.
    viewer.trackedEntity = undefined;

    this.onClick();
  }

  mergeStyle(style: GeometryStyle | undefined) {
    this.ref = (ref++) * 3;
    var front = new MeshBasicMaterial();
    front.depthWrite = false;
    front.depthTest = true;
    front.colorWrite = false;
    front.stencilWrite = true;
    front.stencilFunc = AlwaysStencilFunc;
    front.side = FrontSide;
    front.stencilFail = KeepStencilOp; // 该处一直是不会执行，因为stencilFunc的比较函数是AlwaysStencilFunc，一直为true
    front.stencilZFail = KeepStencilOp; // 深度测试失败的为保持不变。 深度测试函数为LessEqualDepth，该函数为别的物体在该物体后面时返回true。所以即为在该物体前面的ref扔保持不变。
    front.stencilZPass = IncrementWrapStencilOp;
    front.stencilRef = this.ref;
    // 该处含义就是：深度测试通过的部分增加ref，未通过的部分保持不变。
    // baseMat.stencilFunc = THREE.AlwaysStencilFunc;
    
    var back = new MeshBasicMaterial();
    back.depthWrite = false;
    back.depthTest = true;
    back.colorWrite = false;
    back.stencilWrite = true;
    back.stencilFunc = AlwaysStencilFunc;
    back.side = BackSide ;
    back.stencilFail = KeepStencilOp;
    back.stencilZFail = KeepStencilOp;
    back.stencilZPass = DecrementWrapStencilOp;
    back.stencilRef = this.ref;
    // 该处含义就是：深度测试通过的部分减少ref，未通过的部分保持不变。
    
    
    var intersect = new MeshBasicMaterial();
    intersect.depthWrite = false;
    intersect.depthTest = false; // 这里已经不需要进行深度测试
    intersect.colorWrite = true;
    intersect.stencilWrite = true;
    // intersect.transparent= true;
    intersect.color.set(this.color);
    intersect.stencilFunc = NotEqualStencilFunc; // 关键点 不等于ref的返回true
    intersect.stencilFail = ReplaceStencilOp; // 关键点 等于0的部分
    intersect.stencilZFail = IncrementWrapStencilOp; // 下面两个填任何数都不影响，1、不再进行深度测试
    intersect.stencilZPass = DecrementWrapStencilOp;
    intersect.stencilRef = this.ref;

      this.style = Object.assign(
        {
          PolygonStyle: new MeshBasicMaterial({
            color: 0x0000ff,
            side: DoubleSide,
            transparent: true,
            opacity: 0.8,
          }),
          LineStyle: new LineBasicMaterial({
            color: 0xffffff,
            linewidth: 2,
          }),
          materials : [ front,back, intersect]
          
        },
        style,
      );
    //Cache the initial settings to avoid modification of properties due to reference type assignment.
    this.styleCache = cloneDeep(this.style);
  }

  /**
   * The base class provides a method to change the state, and different logic is implemented based on the state.
   *  The state is controlled by individual sub-components according to the actual situation.
   * @param state
   */
  setState(state: State) {
    this.state = state;
  }

  getState(): State {
    return this.state;
  }

  defined(obj: any): boolean {
    return obj !== undefined && obj !== null;
  }

  /**
   * Bind a global click event that responds differently based on the state. When in the drawing state,
   * a click will add points for geometric shapes. During editing, selecting a drawn shape puts it in an
   *  editable state. Clicking on empty space sets it to a static state.
   */
  onClick() {
    this.eventHandler = new Listener(this.viewer.baseMap.canvas);
    this.eventHandler.on("mouse-click", (mx:number, my: number) => {
      let pos = new Vector2(mx, my);
      let pickedObject = this.viewer.getModel(mx, my)[0].object;
      const hitEntities = this.defined(pickedObject) && pickedObject instanceof Mesh && pickedObject.drawed;
      // this.drawPolygon(); // 先预先画一下空的几何体mesh，激活activeEntity，否则会导致其undefined
      this.activeEntity = this.polygonEntity;
      if (this.type === 'line') {
        this.activeEntity = this.lineEntity;
      }

      if (this.state === 'drawing') {
        // In the drawing state, the points clicked are key nodes of the shape, and they are saved in this.points.
        const cartesian = this.pixelToCartesian(pos);
        const points = this.getPoints();
        // If the click is outside the sphere, position information cannot be obtained.
        if (!cartesian) {
          return;
        }

        // "For non-freehand drawn shapes, validate that the distance between two consecutive clicks is greater than 10 meters
        if (!this.freehand && points.length > 0 && !this.checkDistance(cartesian, points[points.length - 1])) {
          return;
        }
        this.addPoint(cartesian);

        // Trigger 'drawStart' when the first point is being drawn.
        if (this.getPoints().length === 1) {
          this.eventDispatcher.dispatchEvent('drawStart');
        }
        this.eventDispatcher.dispatchEvent('drawUpdate', cartesian);
      } else if (this.state === 'edit') {
        //In edit mode, exit the editing state and delete control points when clicking outside the currently edited shape.
        if (!hitEntities || this.activeEntity.id !== pickedObject.id) {
          this.setState('static');
          this.removeControlPoints();
          this.disableDrag();
          // Trigger 'drawEnd' and return the geometry shape points when exiting the edit mode.
          this.eventDispatcher.dispatchEvent('editEnd', this.getPoints());
          return;
        }
      } else if (this.state === 'static') {
        //When drawing multiple shapes, the click events for all shapes are triggered. Only when hitting a completed shape should it enter editing mode.
        if (hitEntities && this.activeEntity.id === pickedObject.id) {
          // TODO 这里留待存疑，说明：这里可能只有是线型的几何体点击的时候才会有polyline和polygon，具体可以debug源代码看
          // const pickedGraphics = this.type === 'line' ? pickedObject.id : pickedObject.id;
          
          // Hit Geometry Shape.
          this.entityId = this.activeEntity.id;
          this.setState('edit');
          this.addControlPoints();
          this.draggable();
          this.eventDispatcher.dispatchEvent('editStart');
          
        }
      }
    });
  }

  onMouseMove() {
    this.eventHandler.on("mouse-move",(mx: number, my: number) => {
      let pos = new Vector2(mx, my);
      const points = this.getPoints();
      const cartesian = this.pixelToCartesian(pos);
      if (!cartesian) {
        return;
      }
      if (this.checkDistance(cartesian, points[points.length - 1])) {
        // Synchronize data to subclasses.If the distance is less than 10 meters, do not proceed
        this.updateMovingPoint(cartesian, points.length);
      }
    });
  }

  onDoubleClick() {
    this.eventHandler.on("mouse-double-click-left",(mx: number, my: number) => {
      if (this.state === 'drawing') {
        this.finishDrawing();
      }
    });
  }

  /**
   * Check if the distance between two points is greater than 10 meters.
   */
  checkDistance(cartesian1:Vector3, cartesian2: Vector3) {
    const distance = cartesian1.distanceTo(cartesian2);
    return distance > 10;
  }

  finishDrawing() {
    // Some polygons draw a separate line between the first two points before drawing the complete shape;
    // this line should be removed after drawing is complete.
    this.type === 'polygon' && this.lineEntity && this.viewer.baseMap.remove(this.lineEntity);

    this.removeMoveListener();
    // Editable upon initial drawing completion.
    this.setState('edit');
    this.addControlPoints();
    this.draggable();
    const entity = this.polygonEntity || this.lineEntity;
    this.entityId = entity.id;
    /**
     * "I've noticed that CallbackProperty can lead to significant performance issues.
     *  After drawing multiple shapes, the map becomes noticeably laggy. Using methods
     * like requestAnimationFrame or setInterval doesn't provide a smooth way to display
     *  shapes during the drawing process. As a temporary solution, I've set the hierarchy
     *  or positions to static after drawing is complete. This addresses the performance
     *  problem, but introduces a new issue: after setting the data to static, the shapes
     *  redraw, resulting in a flicker. However, this seems to be a relatively reasonable
     *  approach given the current circumstances."
     */
    // TODO...
    // if (this.type === 'polygon') {
    //   this.polygonEntity.polygon.hierarchy = new this.cesium.PolygonHierarchy(this.geometryPoints);
    //   this.outlineEntity.polyline.positions = [...this.geometryPoints, this.geometryPoints[0]];
    // } else if (this.type === 'line') {
    //   this.lineEntity.polyline.positions = this.geometryPoints;
    // }

    this.eventDispatcher.dispatchEvent('drawEnd', this.getPoints());
  }

  removeClickListener() {
    this.eventHandler.off("mouse-click");
  }

  removeMoveListener() {
    this.eventHandler.off("mouse-move");
  }

  removeDoubleClickListener() {
    this.eventHandler.off("mouse-double-click-left");
  }

  setGeometryPoints(geometryPoints: Vector3[]) {
    this.geometryPoints = geometryPoints;
  }

  getGeometryPoints(): Vector3[] {
    return this.geometryPoints;
  }

  drawPolygon() {
    const callback = () => {
      let list=[];
      for (let i = 0; i < this.geometryPoints.length; i++) {
        list.push(new Vector2(this.geometryPoints[i].x,this.geometryPoints[i].y));
      }
      let geometry = new ShapeGeometry( new Shape( list ));
      // let geometry = new ExtrudeGeometry( new Shape( list ), this.extrudeSettings )
      for (let i = 0; i < this.geometryPoints.length; i++) {
        geometry.attributes.position.array[i * 3 + 0]=this.geometryPoints[i].x;
        geometry.attributes.position.array[i * 3 + 1]=this.geometryPoints[i].y;
        geometry.attributes.position.array[i * 3 + 2]=this.geometryPoints[i].z;
      }
      return geometry;
    };
    const callback_extrude = () => {
      let list=[];
      for (let i = 0; i < this.geometryPoints.length; i++) {
        let lnglat = this.cartesianToLnglat(this.geometryPoints[i]);
        list.push(new Vector2(lnglat[1],lnglat[0]));
      }
      // 先将当前的三维坐标点转换为经纬度信息， 然后再转换为三维坐标点
      let geometry = new ExtrudeGeometry( new Shape( list ), this.extrudeSettings )
      // 遍历geometry.attributes.position.array，将经纬度信息转换为三维坐标点
      let arr = geometry.attributes.position.array;
      for (let i = 0; i < arr.length; i+=3) {
        // let dir;
        // if (arr[i+2]+1000 > this.extrudeSettings.depth)
        //   dir = UnitUtils.fromDegrees(arr[i], arr[i+1], -10000)
        // else
        //   dir = UnitUtils.fromDegrees(arr[i], arr[i+1], 10000)
        let dir = UnitUtils.fromDegrees(arr[i], arr[i+1], arr[i+2]-1000);
        arr[i] = dir.x;
        arr[i+1] = dir.y;
        arr[i+2] = dir.z;
      }
      return geometry;
    }

    let callGeometry = callback_extrude;
    // let callGeometry = callback;
    if (!this.polygonEntity) {
      const style = this.style.PolygonStyle;
      // this.polygonEntity = new Mesh(callGeometry(),style);
      this.polygonEntity  = this.createMultiMaterialObject( callGeometry(), this.style.materials );
      // this.polygonEntity.lookAt(0, 0, 0);
      // this.polygonEntity.rotateY(Math.PI);
      this.polygonEntity.drawed = true;
      // this.viewer.baseMap.add(this.polygonEntity);
      group.add(this.polygonEntity);
      let lineStyle = this.style.LineStyle;
      // Due to limitations in PolygonGraphics outlining, a separate line style is drawn.
      this.outlineEntity = new Line(
        new BufferGeometry().setFromPoints(this.geometryPoints),
        lineStyle,
      );
      // this.viewer.baseMap.add(this.outlineEntity);
      group.add(this.outlineEntity);
      this.activeEntity = this.polygonEntity;
      if (this.type === 'line') {
        this.activeEntity = this.lineEntity;
      }
    } else {
      if (this.polygonEntity instanceof Group) {
        this.polygonEntity.children.forEach((child) => {
          child.geometry = callGeometry();
        });
      }
      if (this.polygonEntity instanceof Mesh) {
        this.polygonEntity.geometry = callGeometry();
      }
      if (this.outlineEntity) {
        this.outlineEntity.geometry = new BufferGeometry().setFromPoints(this.geometryPoints);
      }
    }
  }

  createMultiMaterialObject( geometry: BufferGeometry, materials: Material[]) {
  
    const group = new Group();
  
    for ( let i = 0, l = materials.length; i < l; i ++ ) {
  
      group.add( new Mesh( geometry, materials[ i ] ) );
  
    }
  
    return group;
  
  }

  drawLine() {
    if (!this.lineEntity) {
      const style = this.style.LineStyle;
      this.lineEntity = this.addLineEntity(style);
    } else{
      this.lineEntity.geometry = new BufferGeometry().setFromPoints(this.geometryPoints);
    }
  }

  addTempLine() {
    // 如果还没有临时线实体，则创建一个新的线实体
    // 如果已经存在临时线实体，则更新其几何形状
    if (!this.tempLineEntity) {
      // The line style between the first two points matches the outline style.
      const style = this.style.LineStyle;
      this.tempLineEntity = this.addLineEntity(style);
    } else{
      this.tempLineEntity.geometry = new BufferGeometry().setFromPoints(this.geometryPoints);
    }
  }

  removeTempLine() {
    if (this.tempLineEntity) {
      this.viewer.baseMap.remove(this.tempLineEntity);
      this.tempLineEntity = undefined;
    }
  }

  addLineEntity(style: LineBasicMaterial) {
    const entity = new Line(
      new BufferGeometry().setFromPoints(this.geometryPoints),
      style
    );
    this.viewer.baseMap.add(entity);
    return entity;
  }

  cartesianToLnglat(position: Vector3): [number, number] {
    const lnglat = UnitUtils.vectorToDatums(position);
    const lat = lnglat.latitude;
    const lng = lnglat.longitude;
    return [lng, lat];
  }

  lnglatToCartesian(lnglat: [number, number]): Vector3 {
    const position = UnitUtils.datumsToVector(lnglat[1], lnglat[0]);
    return position;
  }

  // 将像素坐标转换为笛卡尔坐标
  pixelToCartesian(position: Vector2): Vector3 | undefined {
    // 获取像素坐标对应的笛卡尔坐标
    const cartesian = this.viewer.getXYZ(position.x, position.y);
    // 返回笛卡尔坐标
    return cartesian;
  }

  /**
   * Display key points when creating a shape, allowing dragging of these points to edit and generate new shapes.
   */
  addControlPoints() {
    const points = this.getPoints();
    let ctl_point_size = 100;
    this.controlPoints = points.map((position) => {
      let ctl = new Mesh(new SphereGeometry(ctl_point_size, 32, 32), new MeshBasicMaterial({ color: 0xff0000 }));
      ctl.position.copy(position);
      ctl.controlPoint = true;
      this.viewer.baseMap.add(ctl);
      return ctl;
    });

    let isDragging = false;
    let draggedIcon: Mesh | undefined;
    let dragStartPosition: Vector3 | undefined;

    this.controlPointsEventHandler = new Listener(this.viewer.baseMap.canvas);

    // Listen for left mouse button press events
    this.controlPointsEventHandler.on("mouse-down-left",(mx: number, my: number) => {
      let pos = new Vector2(mx, my);
      const pickedObject = this.viewer.getModel(mx,my)[0].object;

      if (this.defined(pickedObject) && pickedObject.controlPoint) {
        for (let i = 0; i < this.controlPoints.length; i++) {
          if (pickedObject.id === this.controlPoints[i].id) {
            isDragging = true;
            draggedIcon = this.controlPoints[i];
            dragStartPosition = draggedIcon.position;
            //Save the index of dragged points for dynamic updates during movement
            draggedIcon.index = i;
            break;
          }
        }
        // Disable default camera interaction.
        this.viewer.baseMap.controls.enableRotate = false;
      }
    });

    // Listen for mouse movement events
    this.controlPointsEventHandler.on("mouse-move", (mx: number, my: number) => {
      if (isDragging && draggedIcon) {
        // const cartesian = this.viewer.camera.pickEllipsoid(moveEvent.endPosition, this.viewer.scene.globe.ellipsoid);
        let pos = new Vector2(mx, my);
        const cartesian = this.viewer.getXYZ(pos.x, pos.y);
        if (cartesian) {
          draggedIcon.position.copy(cartesian);
          this.updateDraggingPoint(cartesian, draggedIcon.index);
        }
      }
    });

    // Listen for left mouse button release events
    this.controlPointsEventHandler.on("mouse-up",(mx: number, my: number) => {
      // Trigger 'drawUpdate' when there is a change in coordinates before and after dragging.
      if (draggedIcon && !dragStartPosition.equals(draggedIcon.position)) {
        this.eventDispatcher.dispatchEvent('drawUpdate', draggedIcon.position);
      }
      isDragging = false;
      draggedIcon = null;
      this.viewer.baseMap.controls.enableRotate = true;
    });
  }

  removeControlPoints() {
    if (this.controlPoints.length > 0) {
      this.controlPoints.forEach((entity: Mesh) => {
        this.viewer.baseMap.remove(entity);
      });
      this.controlPointsEventHandler.off("mouse-down-left");
      this.controlPointsEventHandler.off("mouse-move");
      this.controlPointsEventHandler.off("mouse-up");
    }
  }

  /**
   * Allow the entire shape to be dragged while in edit mode.
   */
  draggable() {
    let dragging = false;
    let startPosition: Vector3 | undefined;
    this.dragEventHandler = new Listener(this.viewer.baseMap.canvas);
    this.dragEventHandler.on("mouse-down-left",(mx: number, my: number) => {
      
        const cartesian = this.viewer.getXYZ(mx, my);
        const pickedObject = this.viewer.getModel(mx, my)[0].object;
        if (this.defined(pickedObject) && pickedObject instanceof Mesh && pickedObject.drawed) {
          const clickedEntityID = pickedObject.id;
          if (this.isCurrentEntity(clickedEntityID)) {
            //Clicking on the current instance's entity initiates drag logic.
            dragging = true;
            startPosition = cartesian;
            this.viewer.baseMap.controls.enableRotate = false;
          }
        }
    });

    this.dragEventHandler.on("mouse-move",(mx: number, my: number) => {
      if (dragging && startPosition) {
        // let pos = new Vector2(mx, my);
        // Retrieve the world coordinates of the current mouse position.
        const newPosition = this.viewer.getXYZ(mx, my);
        if (newPosition) {
          // Calculate the displacement vector.
          const translation = newPosition.clone().sub(startPosition);
          const newPoints = this.geometryPoints.map((p) => {
            return p.add(translation);
          });

          //Move all key points according to a vector.
          this.points = this.points.map((p) => {
            return p.add(translation);
          });

          // Move control points in the same manner.
          this.controlPoints.map((p: Mesh) => {
            const position = p.position.clone();
            const newPosition = position.add(translation);
            p.position.copy(newPosition);
          });

          this.setGeometryPoints(newPoints);
          if (this.minPointsForShape === 4) {
            // 双箭头在整体被拖拽时，需要同步更新生长动画的插值点
            this.curveControlPointLeft = this.curveControlPointLeft.add(translation);
            this.curveControlPointRight = this.curveControlPointRight.add(translation);
          }
          startPosition = newPosition;
          this.drawPolygon();
        }
      } else {
        
          const pickedObject = this.viewer.getModel(mx, my)[0].object;
          if (this.defined(pickedObject) && pickedObject instanceof Mesh && pickedObject.drawed) {
            const clickedEntity = pickedObject.id;
            // TODO 绘制的图形，需要特殊id标识，可在创建entity时指定id
            if (this.isCurrentEntity(clickedEntity)) {
              this.viewer.baseMap.canvas.style.cursor = 'move';
            } else {
              this.viewer.baseMap.canvas.style.cursor = 'default';
            }
          } else {
            this.viewer.baseMap.canvas.style.cursor = 'default';
          }
        
      }
    });

    // Listen for the mouse release event to end dragging.
    this.dragEventHandler.on("mouse-up", () => {
      dragging = false;
      startPosition = undefined;
      this.viewer.baseMap.controls.enableRotate = true;
    });
  }

  // Finish editing, disable dragging."
  disableDrag() {
    this.dragEventHandler.off("mouse-down-left");
    this.dragEventHandler.off("mouse-move");
    this.dragEventHandler.off("mouse-up");
  }

  show(opts: VisibleAnimationOpts) {
    if (opts) {
      const { duration, delay, callback } = opts;
      this.showWithAnimation(duration, delay, callback);
      return;
    } else {
      this.showWithAnimation(0, 0);
    }
  }

  hide(opts: VisibleAnimationOpts) {
    if (opts) {
      const { duration, delay, callback } = opts;
      this.hideWithAnimation(duration, delay, callback);
      return;
    } else {
      this.hideWithAnimation(0, 0);
    }
  }

  showWithAnimation(duration: number = 2000, delay: number = 0, callback?: () => void) {
    if (this.state !== 'hidden') {
      //If not in a static state or already displayed, do not process.
      return;
    }
    this.setState('static');
    if (this.type === 'polygon') {
      let alpha = 0.3;
      const material = this.styleCache.PolygonStyle;
      // if (material.image) {
      //   // With Texture
      //   alpha = material.color.getValue().alpha;
      // } else {
      //   alpha = material.capcity;
      // }
      alpha = material.opacity;

      this.animateOpacity(this.polygonEntity, alpha, duration, delay, callback, this.state);
      const outlineAlpha = this.styleCache?.outlineMaterial?.alpha;
      this.animateOpacity(this.outlineEntity, outlineAlpha || 1.0, duration, delay, undefined, this.state);
    } else if (this.type === 'line') {
      const material = this.styleCache.LineStyle.material;
      let alpha = 1.0;
      // if (material.image) {
      //   // With Texture
      //   alpha = material.color.alpha;
      // } else if (material.dashLength) {
      //   // Dashed Line
      //   const color = material.color.getValue();
      //   alpha = color.alpha;
      // } else {
      //   // Solid Color
      //   alpha = this.styleCache?.material?.alpha;
      // }
      alpha = material.opacity;
      this.animateOpacity(this.lineEntity, alpha, duration, delay, callback, this.state);
    }
    if (duration != 0) {
      this.setState('animating');
    }
  }

  hideWithAnimation(duration: number = 2000, delay: number = 0, callback?: () => void) {
    if (this.state === 'hidden' || this.state != 'static') {
      return;
    }
    this.setState('hidden');
    if (this.type === 'polygon') {
      this.animateOpacity(this.polygonEntity, 0.0, duration, delay, callback, this.state);
      this.animateOpacity(this.outlineEntity, 0.0, duration, delay, undefined, this.state);
    } else if (this.type === 'line') {
      this.animateOpacity(this.lineEntity, 0.0, duration, delay, callback, this.state);
    }
    // if (this.state == 'edit') {
    // 	this.controlPoints.forEach(p => {
    // 		this.animateOpacity(p, 0.0, duration, delay, undefined, this.state);
    // 	});
    // }
    if (duration != 0) {
      this.setState('animating');
    }
  }

  animateOpacity(
    entity: Mesh| Line,
    targetAlpha: number,
    duration: number,
    delay: number,
    callback?: () => void,
    state?: State,
  ): void {
    setTimeout(() => {
      const graphics = entity;
      let startAlpha: number;
      let material = graphics.material;
      // if (material) {
      //   if (material.image && material.color.alpha !== undefined) {
      //     // Texture material, setting the alpha channel in the color of the custom ImageFlowMaterialProperty.
      //     startAlpha = material.color.alpha;
      //   } else {
      //     startAlpha = material.color.getValue().alpha;
      //   }
      // } else {
      //   // billbord
      //   const color = graphics.color.getValue();
      //   startAlpha = color.alpha;
      // }
      startAlpha = material.opacity;

      let startTime = 0;

      const animate = (currentTime: number) => {
        if (!startTime) {
          startTime = currentTime;
        }
        const elapsedTime = currentTime - startTime;

        if (elapsedTime < duration) {
          const deltalpha = (elapsedTime / duration) * (targetAlpha - startAlpha);
          const newAlpha = startAlpha + deltalpha;

          // if (material) {
          //   if (material.image && material.color.alpha !== undefined) {
          //     // Texture Material
          //     material.color.alpha = newAlpha;
          //   } else {
          //     // Solid Color
          //     const newColor = material.color.getValue().withAlpha(newAlpha);
          //     material.color.setValue(newColor);
          //   }
          // } else {
          //   // billbord
          //   const color = graphics.color.getValue();
          //   const newColor = color.withAlpha(newAlpha);
          //   graphics.color.setValue(newColor);
          // }
          material.opacity = newAlpha;

          requestAnimationFrame(animate);
        } else {
          // Animation Ended
          callback && callback();
          const restoredState = state ? state : 'static';

          // if (targetAlpha === 0) {
          //   this.setState('hidden');
          // }

          // if (duration == 0) {
          // this.setState('drawing');
          // if (material) {
          //   if (material.image && material.color.alpha !== undefined) {
          //     // Texture Material
          //     material.color.alpha = targetAlpha;
          //   } else {
          //     // Solid Color
          //     const newColor = material.color.getValue().withAlpha(targetAlpha);
          //     material.color.setValue(newColor);
          //   }
          // } else {
          //   // billbord
          //   const color = graphics.color.getValue();
          //   const newColor = color.withAlpha(targetAlpha);
          //   graphics.color.setValue(newColor);
          // }
          material.opacity = targetAlpha;
          requestAnimationFrame(() => {
            this.setState(restoredState);
          });
          // } else {
          // 	this.setState(restoredState);
          // }
        }
      };

      requestAnimationFrame(animate);
    }, delay);
  }

  startGrowthAnimation(opts: GrowthAnimationOpts) {
    const { duration = 2000, delay = 0, callback } = opts || {};
    if (this.state === 'hidden' || this.state != 'static') {
      return;
    }
    if (!this.minPointsForShape) {
      console.warn('Growth animation is not supported for this type of shape');
      return;
    }
    this.setState('animating');
    if (this.minPointsForShape === 4) {
      // For double arrows, special handling is required.
      this.doubleArrowGrowthAnimation(duration, delay, callback);
      return;
    }
    setTimeout(() => {
      this.hideWithAnimation(0, 0, undefined);
      // return;
      // const hideDuration = 0;
      // const hideDeay = 0;
      // if (this.type === 'polygon') {
      //   this.animateOpacity(this.polygonEntity, 0.0, hideDuration, hideDeay, callback, this.state);
      //   this.animateOpacity(this.outlineEntity, 0.0, hideDuration, hideDeay, undefined, this.state);
      // } else if (this.type === 'line') {
      //   this.animateOpacity(this.lineEntity, 0.0, hideDuration, hideDeay, callback, this.state);
      // }
      const points = this.getPoints();

      let segmentDuration = 0; // 每个点的动画时长，平均结果
      if (this.minPointsForShape === 2) {
        segmentDuration = duration / (points.length - 1);
      } else {
        segmentDuration = duration / (points.length - 2);
      }

      let startTime = Date.now();
      let movingPointIndex = 0;
      // this.viewer.clock.shouldAnimate = true;
      let fpsStartTime = startTime;
      const frameListener = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const fpsElapsedTime = currentTime - fpsStartTime;
        if (fpsElapsedTime >= 16.7) {
          // 60fps
          fpsStartTime = currentTime;
        } else {
          // 限定到一定帧率以内
          requestAnimationFrame(frameListener);
          return;
        }
        if (elapsedTime >= duration) {
          // Animation ends
          callback && callback();
          startTime = 0;
          this.setState('static');
          return;
        }

        const currentSegment = Math.floor(elapsedTime / segmentDuration);
        let startPoint;

        if (this.minPointsForShape === 2) {
          movingPointIndex = currentSegment + 1;
        } else {
          movingPointIndex = currentSegment + 2;
        }
        startPoint = points[movingPointIndex - 1];
        if (currentSegment == 0 && this.minPointsForShape === 3) {
          // The face-arrow determined by three points, with the animation starting from the midpoint of the line connecting the first two points.
          startPoint = new Vector3().lerpVectors(points[0], points[1], 0.5);
        }
        let endPoint = points[movingPointIndex];
        // To dynamically add points between the startPoint and endPoint, consistent with the initial drawing logic,
        // update the point at index movingPointIndex in the points array with the newPosition,
        // generate the arrow, and execute the animation.
        const t = (elapsedTime - currentSegment * segmentDuration) / segmentDuration;
        // const newPosition = startPoint.lerp(endPoint, t);
        const newPosition = new Vector3().lerpVectors(startPoint, endPoint, t);
        const tempPoints = points.slice(0, movingPointIndex + 1);
        tempPoints[tempPoints.length - 1] = newPosition;
        const geometryPoints = this.createGraphic(tempPoints);
        this.setGeometryPoints(geometryPoints);
        this.drawPolygon();
        this.showWithAnimation(0, 0, undefined);
        requestAnimationFrame(frameListener);
      };
      requestAnimationFrame(frameListener);
    }, delay);
  }

  private doubleArrowGrowthAnimation(duration: number = 2000, delay: number = 0, callback?: Function) {
    setTimeout(() => {
      this.hideWithAnimation(0, 0, undefined);
      const points = this.getPoints();
      let startTime = Date.now();
      let fpsStartTime = startTime;

      const frameListener = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const fpsElapsedTime = currentTime - fpsStartTime;
        if (fpsElapsedTime >= 16.7) {
          // 60fps
          fpsStartTime = currentTime;
        } else {
          // 限定到一定帧率以内
          requestAnimationFrame(frameListener);
          return;
        }
        if (elapsedTime >= duration) {
          // Animation ends
          callback && callback();
          startTime = 0;
          this.setState('static');
          return;
        }

        // Utils.isClockWise(pnt1, pnt2, pnt3)
        const midPoint = new Vector3().lerpVectors(points[0], points[1], 0.5);

        const startPointLeft = new Vector3().lerpVectors(points[0], midPoint, 0.5);

        const startPointRight = new Vector3().lerpVectors(midPoint, points[1], 0.5);
        let endPointLeft = points[3];
        let endPointRight = points[2];
        const t = elapsedTime / duration;
        const controlPoint = this.getBezierControlPointforGrowthAnimation();
        let curveControlPointsLeft = [startPointLeft, controlPoint.left, endPointLeft];
        let curveControlPointsRight = [startPointRight, controlPoint.right, endPointRight];
        const newPositionLeft = this.getNewPosition(curveControlPointsLeft, t);
        const newPositionRight = this.getNewPosition(curveControlPointsRight, t);

        const tempPoints = [...points];
        tempPoints[2] = newPositionRight;
        tempPoints[3] = newPositionLeft;
        const geometryPoints = this.createGraphic(tempPoints);
        this.setGeometryPoints(geometryPoints);
        this.drawPolygon();
        this.showWithAnimation(0, 0, undefined);
        requestAnimationFrame(frameListener);
      };
      requestAnimationFrame(frameListener);
    }, delay);
  }

  private getNewPosition(curveControlPoints, t) {
    curveControlPoints = curveControlPoints.map((item) => {
      return this.cartesianToLnglat(item);
    });
    let curvePoints = Utils.getCurvePoints(0.3, curveControlPoints);
    curvePoints = curvePoints.map((p) => {
      return UnitUtils.fromDegrees(p[0], p[1]);
    });

    let newPosition = this.interpolateAlongCurve(curvePoints, t);
    return newPosition;
  }

  private interpolateAlongCurve(curvePoints, t) {
    const numPoints = curvePoints.length - 1;
    const index = Math.floor(t * numPoints);
    const tSegment = t * numPoints - index;
    const startPoint = curvePoints[index];
    const endPoint = curvePoints[index + 1];
    const x = startPoint.x + (endPoint.x - startPoint.x) * tSegment;
    const y = startPoint.y + (endPoint.y - startPoint.y) * tSegment;
    const z = startPoint.z + (endPoint.z - startPoint.z) * tSegment;

    return new Vector3(x, y, z);
  }

  remove() {
    if (this.type === 'polygon') {
      this.viewer.baseMap.remove(this.polygonEntity);
      this.viewer.baseMap.remove(this.outlineEntity);
      this.polygonEntity = null;
      this.outlineEntity = null;
      this.lineEntity = null;
    } else if (this.type === 'line') {
      this.viewer.baseMap.remove(this.lineEntity);
    }
    this.removeClickListener();
    this.removeMoveListener();
    this.removeDoubleClickListener();
    this.removeControlPoints();
  }

  on(eventType: EventType, listener: EventListener) {
    this.eventDispatcher.on(eventType, listener);
  }

  off(eventType: EventType, listener: EventListener) {
    this.eventDispatcher.off(eventType, listener);
  }

  isCurrentEntity(id: number) {
    return this.entityId === id;
  }

  addPoint(cartesian: Vector3) {
    //Abstract method that must be implemented by subclasses.
  }

  getPoints(): Vector3[] {
    //Abstract method that must be implemented by subclasses.
    return [new Vector3()];
  }

  updateMovingPoint(cartesian: Vector3, index?: number) {
    //Abstract method that must be implemented by subclasses.
  }

  updateDraggingPoint(cartesian: Vector3, index: number) {
    //Abstract method that must be implemented by subclasses.
  }

  getType(): 'polygon' | 'line' {
    return 'polygon';
    //Abstract method that must be implemented by subclasses.
  }

  createGraphic(points: Vector3[]): Vector3[] {
    //Abstract method that must be implemented by subclasses.
    return points;
  }
}
