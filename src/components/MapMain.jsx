import React from "react";
import Map, { Source, Layer } from "react-map-gl";

const MapMain = () => {
	// for initial map state
	const long = -123.137414;
	const lat = 49.163168;
	const geojson = {
		type: "FeatureCollection",
		features: [
			{
				type: "Feature",
				geometry: { type: "Point", coordinates: [long, lat] },
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

	return (
		<>
			<Map
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
				initialViewState={{
					longitude: long,
					latitude: lat,
					zoom: 12,
				}}
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
