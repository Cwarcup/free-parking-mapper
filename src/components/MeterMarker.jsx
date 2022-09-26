import Map, { Marker } from "react-map-gl";
import ParkingMeters from "../helpers/parking-meters.json";
import { useContext } from "react";
import { ViewContext } from "../helpers/context";

const MeterMarker = () => {
	const { viewState } = useContext(ViewContext);

	const marker = ParkingMeters.map((item, index) => {
		// console.log(item.fields.geom);
		// only show markers that are within the current viewport
		if (
			item.fields.geom.coordinates[0] > viewState.longitude - 0.01 &&
			item.fields.geom.coordinates[0] < viewState.longitude + 0.01 &&
			item.fields.geom.coordinates[1] > viewState.latitude - 0.01 &&
			item.fields.geom.coordinates[1] < viewState.latitude + 0.01
		) {
			return (
				<Marker
					key={index}
					latitude={item.fields.geom.coordinates[1]}
					longitude={item.fields.geom.coordinates[0]}
				/>
			);
		}
	});

	return <>{marker}</>;
};

export default MeterMarker;
