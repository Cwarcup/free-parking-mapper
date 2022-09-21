import * as React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function App() {
	const Map = ReactMapboxGl({
		accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
	});

	return (
		<>
			<Map
				center={{ lon: -87.621, lat: 41.874 }}
				style="mapbox://styles/curtiswarcup/cl8c2ly0s000u15mjwaive8g8"
				containerStyle={{
					height: "50vh",
					width: "50vw",
				}}
			>
				<Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
					<Feature coordinates={[41.874, -87.621]} />
				</Layer>
			</Map>
			;
		</>
	);
}

export default App;
