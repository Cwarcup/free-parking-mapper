import axios from "axios";

// distance is in meters, is the radius of the circle from the center of the viewport
// rows is the number of parking meters to return

const getParkingMeters = (lat, long, distance, rows) => {
	console.log("getParkingMeters", lat, long, distance, rows);
	// set the url for the api call
	// const url = `https://opendata.vancouver.ca/api/records/1.0/search/?dataset=parking-meters&q=&geofilter.distance=${lat}%2C${long}%2C$+{distance}&rows=${rows}`;
	const url = `https://opendata.vancouver.ca/api/records/1.0/search/?dataset=parking-meters&q=&rows=${rows}&facet=r_mf_9a_6p&facet=r_mf_6p_10&facet=r_sa_9a_6p&facet=r_sa_6p_10&facet=r_su_9a_6p&facet=r_su_6p_10&facet=timeineffe&facet=t_mf_9a_6p&facet=t_mf_6p_10&facet=t_sa_9a_6p&facet=t_sa_6p_10&facet=t_su_9a_6p&facet=t_su_6p_10&facet=creditcard&facet=geo_local_area&geofilter.distance=${lat}%2C${long}%2C+${distance}`;
	console.log("url", url);

	// set the config for the api call
	const config = {
		method: "get",
		url: url,
		headers: {},
	};

	return axios(config);
};

export default getParkingMeters;
