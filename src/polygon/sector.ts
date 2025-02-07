import Base from '../base';
// @ts-ignore
import * as Utils from '../utils';
import { PolygonStyle } from '../interface';
import { Vector3 } from 'three';
import UnitUtils from '../UnitUtils';

export default class Sector extends Base {
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
    }else if (this.points.length === 3) {
      this.finishDrawing();
    }
  }

  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian: Vector3) {
    const tempPoints = [...this.points, cartesian];
    this.setGeometryPoints(tempPoints);
    if (tempPoints.length === 2) {
      this.addTempLine();
    } else {
      this.removeTempLine();
      const geometryPoints = this.createGraphic(tempPoints);
      this.setGeometryPoints(geometryPoints);
      this.drawPolygon();
    }
  }

  createGraphic(positions: Vector3[]) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    const [center, pnt2, pnt3] = [lnglatPoints[0], lnglatPoints[1], lnglatPoints[2]];
    const radius = Utils.MathDistance(pnt2, center);
    const startAngle = Utils.getAzimuth(pnt2, center);
    const endAngle = Utils.getAzimuth(pnt3, center);
    const res = Utils.getArcPoints(center, radius, startAngle, endAngle);
    res.push(center, res[0]);

    const temp = [].concat(...res);
    const cartesianPoints = UnitUtils.fromDegreesArray(temp);
    return cartesianPoints;
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

  getPoints() {
    return this.points;
  }
}
