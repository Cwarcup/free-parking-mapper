import { useContext, useEffect, useState, useRef } from "react";
import Map, { Source, Layer, Marker } from "react-map-gl";
import { UserContext } from "../helpers/context";
import mapDataPoints from "../helpers/data.json";
import noParkingData from "../helpers/no-parking.json";

const MapMain = () => {
	console.log("mapDataPoints", mapDataPoints.features);
	// for initial map state, if no user location
	const [viewState, setViewState] = useState({
		latitude: 49.16,
		longitude: -123.13,
		zoom: 10,
	});

	const { user, setUser } = useContext(UserContext);

	const geojson = {
		type: "FeatureCollection",
		features: [
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [viewState.longitude, viewState.latitude],
				},
			},
		],
	};

	// for map layer - represents where the user is
	const userCircle = {
		id: "point",
		type: "circle",
		paint: {
			"circle-radius": 10,
			"circle-color": "#007cbf",
		},
	};

	// represents parking locations
	const demoLayer = {
		id: "demo",
		type: "fill",
		paint: {
			"fill-color": "#088",
			"fill-opacity": 0.8,
		},
		source: {
			type: "geojson",
			data: mapDataPoints,
		},
	};

	const noParkingLayer = {
		id: "no-parking",
		type: "fill",
		paint: {
			"fill-color": "#f00",
			"fill-opacity": 0.8,
		},
		source: {
			type: "geojson",
			data: noParkingData,
		},
	};

	// on first load, request to get user geolocation
	// and set user state to that location
	if (!user) {
		navigator.geolocation.getCurrentPosition((position) => {
			setUser({
				longitude: position.coords.longitude,
				latitude: position.coords.latitude,
			});
			setViewState({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			});
		});
	}

	// if user state is set, update geojson to user location
	if (user) {
		// update the geojson to user location
		// changes the map layer to user location
		geojson.features[0].geometry.coordinates = [user.longitude, user.latitude];
	}

	return (
		<>
			<Map
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
				{...viewState}
				onMove={(evt) => setViewState(evt.viewState)}
				style={{ width: "100vh", height: "100vh" }}
				mapStyle="mapbox://styles/mapbox/streets-v11"
			>
				<Source type="geojson" data={geojson}>
					<Layer {...userCircle} />
				</Source>
				<Source type="geojson" data={mapDataPoints}>
					<Layer {...demoLayer} />
				</Source>
				<Source type="geojson" data={noParkingData}>
					<Layer {...noParkingLayer} />
				</Source>
			</Map>
		</>
	);
};

export default MapMain;
