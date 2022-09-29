import { useContext } from "react";
import Map, { Popup } from "react-map-gl";
import {
	ViewContext,
	SearchContext,
	PopupInfoContext,
	MarkerDataContext,
} from "../helpers/context";
import UserLayer from "./UserLayer";
import SearchLayer from "./SearchLayer";
import MeterMarker from "./MeterMarker";
import { Container } from "@mui/material";
import MeterTable from "./MeterTable";

const MapMain = () => {
	const { viewState, setViewState } = useContext(ViewContext);
	const { searchResults } = useContext(SearchContext);
	const { popupInfo, setPopupInfo } = useContext(PopupInfoContext);
	const { markerData, setMarkerData } = useContext(MarkerDataContext);

	return (
		<>
			<Container maxWidth="xl">
				<Map
					mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
					{...viewState}
					onMove={(evt) => setViewState(evt.viewState)}
					style={{ width: "fit", height: "500px" }}
					mapStyle="mapbox://styles/mapbox/streets-v11"
				>
					<UserLayer />

					{searchResults && searchResults.features.length > 0 && (
						<SearchLayer data={searchResults} />
					)}
					<MeterMarker distance={markerData.distance} rows={markerData.rows} />
				</Map>

				{popupInfo && <MeterTable />}
			</Container>
		</>
	);
};

export default MapMain;
