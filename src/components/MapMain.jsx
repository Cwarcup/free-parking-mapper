import { useContext, useEffect, useRef } from "react";
import Map, {
	GeolocateControl,
	FullscreenControl,
	NavigationControl,
	ScaleControl,
} from "react-map-gl";
import {
	ViewContext,
	SearchContext,
	PopupInfoContext,
	MarkerDataContext,
} from "../helpers/context";
import MeterMarker from "./MeterMarker";
import SearchMarker from "./SearchMarker";
import MapPopup from "./MapPopup";

const MapMain = () => {
	const { viewState, setViewState } = useContext(ViewContext);
	const { searchResults } = useContext(SearchContext);
	const { popupInfo, setPopupInfo } = useContext(PopupInfoContext);
	const { markerData } = useContext(MarkerDataContext);

	const mapRef = useRef();

	useEffect(() => {
		if (popupInfo) {
			const lat = popupInfo.fields.geom.coordinates[0];
			const lng = popupInfo.fields.geom.coordinates[1];

			const bbox = [
				[lat - 0.0004, lng - 0.0004],
				[lat + 0.0004, lng + 0.0004],
			];

			mapRef.current.fitBounds(bbox, { padding: 40, duration: 2000 });
		}
	}, [popupInfo]);

	return (
		<>
			<Map
				ref={mapRef}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
				{...viewState}
				onMove={(evt) => setViewState(evt.viewState)}
				style={{ width: "fit", height: "500px" }}
				mapStyle="mapbox://styles/mapbox/streets-v11"
			>
				<GeolocateControl position="top-left" />
				<FullscreenControl position="top-left" />
				<NavigationControl position="top-left" />
				<ScaleControl />

				{searchResults && searchResults.features.length > 0 && (
					<>
						<SearchMarker data={searchResults} />
					</>
				)}
				<MeterMarker distance={markerData.distance} rows={markerData.rows} />
				{popupInfo && (
					<MapPopup
						latitude={popupInfo.fields.geom.coordinates[1]}
						longitude={popupInfo.fields.geom.coordinates[0]}
						onClose={() => setPopupInfo(false)}
						popupData={{
							geoLocalArea: popupInfo.fields.geo_local_area,
							payPhone: popupInfo.fields.pay_phone,
							price: popupInfo.fields,
						}}
					/>
				)}
			</Map>
		</>
	);
};

export default MapMain;
