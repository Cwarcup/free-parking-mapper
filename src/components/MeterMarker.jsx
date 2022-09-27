import Map, { Marker } from "react-map-gl";
import ParkingMeters from "../helpers/parking-meters.json";
import { useContext } from "react";
import { ViewContext, SearchContext } from "../helpers/context";
import getParkingMeters from "../helpers/vanDataFetcher";
import { useEffect, useState } from "react";

const MeterMarker = () => {
	const { viewState } = useContext(ViewContext);
	console.log(viewState);
	const { searchResults } = useContext(SearchContext);

	const [data, setData] = useState([]);
	const [marker, setMarker] = useState([]);

	// data.fields.geom.coordinates[0] = longitude
	// data.fields.geom.coordinates[1] = latitude

	// useEffect to get data from api
	useEffect(() => {
		getParkingMeters(viewState.latitude, viewState.longitude, 1000, ).then(
			(res) => {
				setData(res);
				setMarker(
					data.map((meter, index) => {
						return (
							<Marker
								key={index}
								latitude={meter.fields.geom.coordinates[1]}
								longitude={meter.fields.geom.coordinates[0]}
							></Marker>
						);
					})
				);
			}
		);
	}, [searchResults]);

	console.log("data", data);

	// only want to render markers if data is available
	// if (data.length > 0) {
	// 	setMarker(
	// 		data.map((meter, index) => {
	// 			return (
	// 				<Marker
	// 					key={index}
	// 					latitude={meter.fields.geom.coordinates[1]}
	// 					longitude={meter.fields.geom.coordinates[0]}
	// 				></Marker>
	// 			);
	// 		})
	// 	);
	// }

	return <>{marker}</>;
};

export default MeterMarker;
