// uses axios to make a request to the vancouver parking api

// accepts the latitude and longitude of the viewport as parameters

// returns an array of parking meters within the viewport

import axios from "axios";

const getParkingMeters = (lat, long, distance = "500") => {
	return axios
		.get(
			`https://opendata.vancouver.ca/api/records/1.0/search/?dataset=parking-meters&q=&rows=10&facet=r_mf_9a_6p&facet=r_mf_6p_10&facet=r_sa_9a_6p&facet=r_sa_6p_10&facet=r_su_9a_6p&facet=r_su_6p_10&facet=timeineffe&facet=t_mf_9a_6p&facet=t_mf_6p_10&facet=t_sa_9a_6p&facet=t_sa_6p_10&facet=t_su_9a_6p&facet=t_su_6p_10&facet=creditcard&facet=geo_local_area&geofilter.distance=${lat}%2C${long}%2C+${distance}`
		)
		.then((res) => {
			return res.data.records;
		})
		.catch((err) => {
			console.log(err);
		});
};

export default getParkingMeters;
