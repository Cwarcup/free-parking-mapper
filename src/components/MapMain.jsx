import { useContext } from "react";
import Map, { Popup } from "react-map-gl";
import {
	ViewContext,
	SearchContext,
	PopupInfoContext,
} from "../helpers/context";
import ParkingLayer from "./ParkingLayer";
import UserLayer from "./UserLayer";

import freeParkingData from "../helpers/free-parking-data.json";
import noParkingData from "../helpers/no-parking.json";

import SearchLayer from "./SearchLayer";

import MeterMarker from "./MeterMarker";

const MapMain = () => {
	const { viewState, setViewState } = useContext(ViewContext);
	const { searchResults } = useContext(SearchContext);
	const { popupInfo, setPopupInfo } = useContext(PopupInfoContext);

	console.log("popupInfo", popupInfo);

	return (
		<>
			<Map
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
				{...viewState}
				onMove={(evt) => setViewState(evt.viewState)}
				style={{ width: "500px", height: "500px" }}
				mapStyle="mapbox://styles/mapbox/streets-v11"
			>
				<UserLayer />
				<ParkingLayer
					data={freeParkingData}
					paintStyle={{
						"fill-color": "#A1C298",
						"fill-opacity": 0.8,
					}}
					id={"free-parking"}
				/>
				<ParkingLayer
					data={noParkingData}
					paintStyle={{
						"fill-color": "#FF1E00",
						"fill-opacity": 0.8,
					}}
					id={"no-parking"}
				/>
				{searchResults && searchResults.features.length > 0 && (
					<SearchLayer data={searchResults} />
				)}
				<MeterMarker distance={"500"} rows={"50"} />
				{popupInfo && (
					<Popup
						anchor="top"
						latitude={Number(popupInfo.fields.geom.coordinates[1])}
						longitude={Number(popupInfo.fields.geom.coordinates[0])}
						onClose={() => setPopupInfo(null)}
					>
						<div>
							Area:{popupInfo.fields.geo_local_area}
							<br />
							Pay by Phone #: {popupInfo.fields.pay_phone}
							<br />
							Rates:
							<table>
								<tr>
									<th>Time</th>
									<th>Rate</th>
									<th>Max Duration</th>
								</tr>
								<tr>
									<td>Mon-Fri 9am-6pm</td>
									<td>{popupInfo.fields.r_mf_9a_6p}</td>
									<td>{popupInfo.fields.t_mf_9a_6p}</td>
								</tr>
								<tr>
									<td>Mon-Fri 6pm-10pm</td>
									<td>{popupInfo.fields.r_mf_6p_10}</td>
									<td>{popupInfo.fields.t_mf_6p_10}</td>
								</tr>
							</table>
						</div>
					</Popup>
				)}
			</Map>
		</>
	);
};

export default MapMain;
