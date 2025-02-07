import Base from '../base';
import * as Utils from '../utils';
// @ts-ignore

import { PolygonStyle } from '../interface';
import { Vector3 } from 'three';
import UnitUtils from '../UnitUtils';

export default class Ellipse extends Base {
  points: Vector3[] = [];
  freehand: boolean;

  constructor(viewer: any, style?: PolygonStyle) {
    super(viewer, style);
    this.freehand = true;
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
    } else if (this.points.length > 1) {
      this.finishDrawing();
    }
  }

  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian: Vector3) {
    const tempPoints = [...this.points, cartesian];
    const geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }

  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian: Vector3, index: number) {
    this.points[index] = cartesian;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }

  createGraphic(positions: Vector3[]) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    const pnt1 = lnglatPoints[0];
    const pnt2 = lnglatPoints[1];

    const center = Utils.Mid(pnt1, pnt2);
    const majorRadius = Math.abs((pnt1[0] - pnt2[0]) / 2);
    const minorRadius = Math.abs((pnt1[1] - pnt2[1]) / 2);
    const res = this.generatePoints(center, majorRadius, minorRadius);
    const temp = [].concat(...res);
    const cartesianPoints = UnitUtils.fromDegreesArray(temp);
    return cartesianPoints;
  }

  generatePoints(center, majorRadius, minorRadius) {
    let [x, y, angle, points] = [null, null, 0, []];
    for (let i = 0; i <= 100; i++) {
      angle = (Math.PI * 2 * i) / 100;
      x = center[0] + majorRadius * Math.cos(angle);
      y = center[1] + minorRadius * Math.sin(angle);
      points.push([x, y]);
    }
    return points;
  }

  getPoints() {
    return this.points;
  }
}
