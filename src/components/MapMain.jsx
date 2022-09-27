import { useContext } from "react";
import Map from "react-map-gl";
import { ViewContext, SearchContext } from "../helpers/context";
import ParkingLayer from "./ParkingLayer";
import UserLayer from "./UserLayer";

import freeParkingData from "../helpers/free-parking-data.json";
import noParkingData from "../helpers/no-parking.json";

import SearchLayer from "./SearchLayer";

import MeterMarker from "./MeterMarker";

const MapMain = () => {
	const { viewState, setViewState } = useContext(ViewContext);
	const { searchResults } = useContext(SearchContext);

	console.log(searchResults);

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
			</Map>
		</>
	);
};

export default MapMain;
