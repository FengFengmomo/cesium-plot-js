    let EARTH_RADIUS_A = 6378137.0;
    function datumsToVector(latitude, longitude) 
	{
		const degToRad = Math.PI / 180;
		
		const rotX = longitude * degToRad;
		const rotY = latitude * degToRad;

		var cos = Math.cos(rotY);
		
		return [-Math.cos(rotX + Math.PI) * cos, Math.sin(rotY), Math.sin(rotX + Math.PI) * cos];
	}

    function fromDegrees(latitude, longitude){
		let drector = datumsToVector(latitude, longitude);
		drector[0] = drector[0] * EARTH_RADIUS_A;
		drector[1] = drector[1] * EARTH_RADIUS_A;
		drector[2] = drector[2] * EARTH_RADIUS_A;
		return drector;
	}

    function vectorToDatums(x,y,z) 
	{
		const radToDeg = 180 / Math.PI;

		const latitude = Math.atan2(y, Math.sqrt(Math.pow(x, 2) + Math.pow(-z, 2))) * radToDeg;
		const longitude = Math.atan2(-z, x) * radToDeg;

		return {latitude:latitude, longitude:longitude};
	}

    let lat = 39.9087;
    let lng = 116.3975;
    let vector = fromDegrees(lat, lng);
    console.log(vector);
    vector = {
        "x": 165607.20409371998,
        "y": 4416959.047164819,
        "z": -4598225.706358254
    }
    console.log(vectorToDatums(vector.x, vector.y, vector.z));
    let latlng = vectorToDatums(vector[0], vector[1], vector[2]);
    // console.log(latlng);