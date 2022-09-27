import { Marker } from "react-map-gl";
import { useContext } from "react";
import { ViewContext } from "../helpers/context";
import getParkingMeters from "../helpers/getParkingMeters";
import { useEffect, useState } from "react";

const MeterMarker = ({ distance, rows }) => {
	// data.fields.geom.coordinates[0] = longitude
	// data.fields.geom.coordinates[1] = latitude

	const { viewState } = useContext(ViewContext);
	const [marker, setMarker] = useState([]);

	useEffect(() => {
		getParkingMeters(
			viewState.latitude,
			viewState.longitude,
			distance,
			rows
		).then((res) => {
			setMarker(
				res.data.records.map((meter, index) => {
					return (
						<Marker
							key={index}
							latitude={meter.fields.geom.coordinates[1]}
							longitude={meter.fields.geom.coordinates[0]}
						></Marker>
					);
				})
			);
		});
		// updates when viewState changes
	}, [viewState]);

	return <>{marker}</>;
};

export default MeterMarker;
