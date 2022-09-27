import axios from "axios";

// distance is in meters, is the radius of the circle from the center of the viewport
// rows is the number of parking meters to return

const getParkingMeters = (lat, long, distance = "500", rows = "50") => {
	// set the url for the api call
	const url = `https://opendata.vancouver.ca/api/records/1.0/search/?dataset=parking-meters&q=&geofilter.distance=${lat}%2C${long}%2C${distance}&rows=${rows}`;

	// set the config for the api call
	const config = {
		method: "get",
		url: url,
		headers: {},
	};

	return axios(config);
};

export default getParkingMeters;
