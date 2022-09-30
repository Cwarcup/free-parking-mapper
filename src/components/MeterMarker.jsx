import { Marker } from "react-map-gl";
import { useContext } from "react";
import {
	ViewContext,
	PopupInfoContext,
	MarkerDataContext,
} from "../helpers/context";
import getParkingMeters from "../helpers/getParkingMeters";
import { useEffect, useState } from "react";

const MeterMarker = ({ distance, rows, popupFunction }) => {
	const { viewState } = useContext(ViewContext);
	const [marker, setMarker] = useState([]);
	const { setPopupInfo } = useContext(PopupInfoContext);
	const { markerData } = useContext(MarkerDataContext);

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
							key={`marker-${index}`}
							latitude={meter.fields.geom.coordinates[1]}
							longitude={meter.fields.geom.coordinates[0]}
							onClick={(e) => {
								// If we let the click event propagates to the map, it will immediately close the popup
								// with `closeOnClick: true`
								e.originalEvent.stopPropagation();
								setPopupInfo(meter);
							}}
						/>
					);
				})
			);
		});
		// updates when viewState changes
	}, [viewState, markerData]);

	return <>{marker}</>;
};

export default MeterMarker;
