import axios from "axios";
import { polygonCoordinates } from "polygon-coordinates";

// distance is in meters, is the radius of the circle from the center of the viewport
// rows is the number of parking meters to return

const getParkingMeters = (lat, long, distance, rows) => {
	console.log("getParkingMeters", lat, long, distance, rows);
	// set the url for the api call

	const square = polygonCoordinates(lat, long, 4, 1);

	const squareObj = {
		point1: { lat: square[0][0].toString(), lng: square[0][1].toString() },
		point2: { lat: square[1][0].toString(), lng: square[1][1].toString() },
		point3: { lat: square[2][0].toString(), lng: square[2][1].toString() },
		point4: { lat: square[3][0].toString(), lng: square[3][1].toString() },
	};

	const url = `https://opendata.vancouver.ca/api/records/1.0/search/?dataset=parking-meters&q=&rows=${rows}&facet=r_mf_9a_6p&facet=r_mf_6p_10&facet=r_sa_9a_6p&facet=r_sa_6p_10&facet=r_su_9a_6p&facet=r_su_6p_10&facet=timeineffe&facet=t_mf_9a_6p&facet=t_mf_6p_10&facet=t_sa_9a_6p&facet=t_sa_6p_10&facet=t_su_9a_6p&facet=t_su_6p_10&facet=creditcard&facet=geo_local_area&geofilter.polygon=(${squareObj.point1.lat}%2C+${squareObj.point1.lng})%2C+(${squareObj.point2.lat}%2C+${squareObj.point2.lng})%2C+(${squareObj.point3.lat}%2C+${squareObj.point3.lng})%2C+(${squareObj.point4.lat}%2C+${squareObj.point4.lng})`;

	// set the config for the api call
	const config = {
		method: "get",
		url: url,
		headers: {},
	};

	return axios(config);
};

export default getParkingMeters;
