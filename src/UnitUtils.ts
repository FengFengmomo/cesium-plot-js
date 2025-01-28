import {Vector2, Vector3} from "three";

export default class UnitUtils {
    static EARTH_RADIUS_A = 6378137.0;
    static datumsToVector(latitude: number, longitude:number) 
	{
		const degToRad = Math.PI / 180;
		
		const rotX = longitude * degToRad;
		const rotY = latitude * degToRad;

		var cos = Math.cos(rotY);
		
		return new Vector3(-Math.cos(rotX + Math.PI) * cos, Math.sin(rotY), Math.sin(rotX + Math.PI) * cos);
	}

    static fromDegrees(latitude:number, longitude:number):Vector3{
		let drector = UnitUtils.datumsToVector(latitude, longitude);
		drector.multiplyScalar(UnitUtils.EARTH_RADIUS_A);
		return drector;
	}

    static fromDegreesArray(points: number[]) :Vector3[]{
        let cartesian_point = [];
        for(let i = 0; i < points.length; i+=2){
            let point = UnitUtils.fromDegrees(points[i], points[i+1]);
            cartesian_point.push(point);
        }
        return cartesian_point;
    }

    static vectorToDatums(dir:Vector3) 
	{
		const radToDeg = 180 / Math.PI;

		const latitude = Math.atan2(dir.y, Math.sqrt(Math.pow(dir.x, 2) + Math.pow(-dir.z, 2))) * radToDeg;
		const longitude = Math.atan2(-dir.z, dir.x) * radToDeg;

		return {latitude:latitude, longitude:longitude};
	}

    /**
     * 弧度转角度
     * @param {*} rad 
     * @returns 
     */
    static radToDeg(rad:number) {
        return rad * (180 / Math.PI);
    }
    /**
     * 角度转弧度
     * @param {*} deg 
     * @returns 
     */
    static degToRad(deg:number) {
        return deg * (Math.PI / 180);
    }
}