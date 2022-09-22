import { useContext, useEffect, useState, useRef } from "react";
import Map, { Source, Layer } from "react-map-gl";
import { UserContext } from "../helpers/context";

const MapMain = () => {
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

	// for map layer - represents middle of map
	const layerStyle = {
		id: "point",
		type: "circle",
		paint: {
			"circle-radius": 10,
			"circle-color": "#007cbf",
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
				style={{ width: 600, height: 400 }}
				mapStyle="mapbox://styles/curtiswarcup/cl8c8zo7h000314qno3pumnrz"
			>
				<Source type="geojson" data={geojson}>
					<Layer {...layerStyle} />
				</Source>
			</Map>
		</>
	);
};

export default MapMain;
