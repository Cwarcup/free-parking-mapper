import { useContext } from "react";
import Map, { Popup } from "react-map-gl";
import {
	ViewContext,
	SearchContext,
	PopupInfoContext,
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
	console.log(popupInfo);

	return (
		<>
			<Container maxWidth="xl">
				<Map
					mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
					{...viewState}
					onMove={(evt) => setViewState(evt.viewState)}
					style={{ width: "500px", height: "500px" }}
					mapStyle="mapbox://styles/mapbox/streets-v11"
				>
					<UserLayer />

					{searchResults && searchResults.features.length > 0 && (
						<SearchLayer data={searchResults} />
					)}
					<MeterMarker distance={"500"} rows={"50"} />
				</Map>
				{/* {popupInfo && (
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
				)} */}
				{popupInfo && <MeterTable />}
			</Container>
		</>
	);
};

export default MapMain;
