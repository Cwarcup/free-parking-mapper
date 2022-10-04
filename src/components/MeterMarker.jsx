import { Marker } from "react-map-gl";
import { useContext } from "react";
import {
	ViewContext,
	PopupInfoContext,
	MarkerDataContext,
	FilterContext,
} from "../helpers/context";
import getParkingMeters from "../helpers/getParkingMeters";
import { useEffect, useState } from "react";
import price from "../helpers/price";

const MeterMarker = ({ distance, rows, popupFunction }) => {
	const { viewState } = useContext(ViewContext);
	const [marker, setMarker] = useState([]);
	const { setPopupInfo } = useContext(PopupInfoContext);
	const { markerData } = useContext(MarkerDataContext);
	const { filter } = useContext(FilterContext);

	useEffect(() => {
		const getData = setTimeout(() => {
			getParkingMeters(
				viewState.latitude,
				viewState.longitude,
				distance,
				rows
			).then((res) => {
				setMarker(
					res.data.records.map((meter, index) => {
						// check the filter object to see if the price is below the max price
						if (price(meter.fields) <= filter.maxPrice) {
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
						}
					})
				);
			});
		}, 500);

		return () => clearTimeout(getData);
		// updates when viewState changes
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [viewState, markerData, filter]);

	return <>{marker}</>;
};

export default MeterMarker;
