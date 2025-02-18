import UnitUtils from '../UnitUtils';
import Base from '../base';
// @ts-ignore

import { PolygonStyle } from '../interface';
import { Vector3 } from 'three';

export default class Polygon extends Base {
  points: Vector3[] = [];
  height = 30;
  constructor(viewer: any, style?: PolygonStyle) {
    super(viewer, style);
    this.setState('drawing');
    this.onDoubleClick();
  }

  getType(): 'polygon' | 'line' {
    return 'polygon';
  }

  /**
   * Add points only on click events
   */
  addPoint(cartesian: Vector3) {
    UnitUtils.vectorScale(cartesian,30);
    this.points.push(cartesian);
    if (this.points.length === 1) {
      this.onMouseMove();
    }
  }

  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian: Vector3) {
    UnitUtils.vectorScale(cartesian,30); //与地面增加一定的距离，仅仅考虑到无高程地球，其它未考虑
    const tempPoints = [...this.points, cartesian];
    this.setGeometryPoints(tempPoints);
    if (tempPoints.length === 2) {
      this.addTempLine();
    } else {
      this.removeTempLine();
      this.drawPolygon();
    }
  }

  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian: Vector3, index: number) {
    this.points[index] = cartesian;
    this.setGeometryPoints(this.points);
    this.drawPolygon();
  }

  getPoints() {
    return this.points;
  }
}
