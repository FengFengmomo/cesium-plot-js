import Base from '../base';
// @ts-ignore
import { Cartesian3 } from 'cesium';
import { PolygonStyle } from '../interface';
import { Vector3 } from 'three';

export default class FreehandLine extends Base {
  points: Vector3[] = [];
  freehand: boolean;

  constructor(viewer: any, style?: PolygonStyle) {
    super( viewer, style);
    this.freehand = true;
    this.setState('drawing');
  }

  getType(): 'polygon' | 'line' {
    return 'line';
  }

  /**
   * Add points only on click events
   */
  addPoint(cartesian: Vector3) {
    this.points.push(cartesian);
    if (this.points.length < 2) {
      this.onMouseMove();
    } else {
      this.finishDrawing();
    }
  }

  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian: Vector3) {
    this.points.push(cartesian);
    this.setGeometryPoints(this.points);
    this.drawLine();
    this.eventDispatcher.dispatchEvent('drawUpdate', cartesian);
  }

  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian: Vector3, index: number) {
    this.points[index] = cartesian;
    this.setGeometryPoints(this.points);
    this.drawLine();
  }

  getPoints() {
    return this.points;
  }
}
