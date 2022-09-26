import Map, { Marker } from "react-map-gl";
import ParkingMeters from "../helpers/parking-meters.json";

const MeterMarker = () => {
	const marker = ParkingMeters.map((item, index) => {
		let lat = item.fields.geom.coordinates[1];
		let long = item.fields.geom.coordinates[0];

		return <Marker key={index} latitude={lat} longitude={long}></Marker>;
	});

	return <>{marker.splice(0, 100)}</>;
};

export default MeterMarker;
