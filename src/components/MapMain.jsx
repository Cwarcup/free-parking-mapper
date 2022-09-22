import { useContext, useEffect, useState, useRef } from "react";
import Map, { Source, Layer, Marker } from "react-map-gl";
import { UserContext, ViewContext } from "../helpers/context";
import ParkingLayer from "./ParkingLayer";
import UserLayer from "./UserLayer";

import freeParkingData from "../helpers/free-parking-data.json";
import noParkingData from "../helpers/no-parking.json";

const MapMain = () => {
	const { user, setUser } = useContext(UserContext);
	const { viewState, setViewState } = useContext(ViewContext);

	return (
		<>
			<Map
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
				{...viewState}
				onMove={(evt) => setViewState(evt.viewState)}
				style={{ width: "100vh", height: "100vh" }}
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
			</Map>
		</>
	);
};

export default MapMain;
