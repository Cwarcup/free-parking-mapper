import * as React from "react";
import Map, { Source, Layer } from "react-map-gl";

function App() {
	const long = -87.621;
	const lat = 41.874;

	const geojson = {
		type: "FeatureCollection",
		features: [
			{
				type: "Feature",
				geometry: { type: "Point", coordinates: [long, lat] },
			},
		],
	};

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
					longitude: -87.621,
					latitude: 41.874,
					zoom: 14,
				}}
				style={{ width: 600, height: 400 }}
				mapStyle="mapbox://styles/curtiswarcup/cl8c2ly0s000u15mjwaive8g8"
			>
				<Source type="geojson" data={geojson}>
					<Layer {...layerStyle} />
				</Source>
			</Map>
		</>
	);
}

export default App;
