import Base from '../base';
// @ts-ignore
import { Cartesian3 } from 'cesium';

import { PolygonStyle } from '../interface';
import { Vector3 } from 'three';
import UnitUtils from '../UnitUtils';

export default class Triangle extends Base {
  points: Vector3[] = [];

  constructor(viewer: any, style?: PolygonStyle) {
    super(viewer, style);
    this.setState('drawing');
  }

  getType(): 'polygon' | 'line' {
    return 'polygon';
  }

  /**
   * Add points only on click events
   */
  addPoint(cartesian: Vector3) {
    this.points.push(cartesian);
    if (this.points.length === 1) {
      this.onMouseMove();
    } else if (this.points.length === 3) {
      this.finishDrawing();
    }
  }

  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian: Vector3) {
    UnitUtils.vectorScale(cartesian,30);
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
