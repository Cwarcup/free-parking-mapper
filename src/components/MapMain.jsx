import { useContext } from "react";
import Map, {
	Popup,
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
import SearchLayer from "./SearchLayer";
import MeterMarker from "./MeterMarker";
import price from "../helpers/price";
import SearchMarker from "./SearchMarker";

const MapMain = () => {
	const { viewState, setViewState } = useContext(ViewContext);
	const { searchResults } = useContext(SearchContext);
	const { popupInfo, setPopupInfo } = useContext(PopupInfoContext);
	const { markerData } = useContext(MarkerDataContext);

	return (
		<>
			<Map
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
					<Popup
						latitude={popupInfo.fields.geom.coordinates[1]}
						longitude={popupInfo.fields.geom.coordinates[0]}
						onClose={() => setPopupInfo(false)}
						anchor="bottom"
						className="flex flex-col items-center rounded-3xl text-center p-3"
					>
						<div className="m-2">
							<p className="mb-2 text-xl font-medium text-gray-100">
								{popupInfo.fields.geo_local_area}
							</p>
							<p className="text-gray-100">
								PayByPhone: {popupInfo.fields.pay_phone}
							</p>
							<p className="text-gray-100">{price(popupInfo.fields)}</p>
						</div>
					</Popup>
				)}
			</Map>
		</>
	);
};

export default MapMain;
