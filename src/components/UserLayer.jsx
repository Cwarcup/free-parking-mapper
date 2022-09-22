import { Source, Layer } from "react-map-gl";
import { useContext, useEffect, useState } from "react";
import { UserContext, ViewContext } from "../helpers/context";

const UserLayer = () => {
	const { user, setUser } = useContext(UserContext);

	// for initial map state, if no user location
	const { viewState, setViewState } = useContext(ViewContext);

	// used for user location
	const [geojson, setGeojson] = useState(null);

	// on first load, if user location is not set, set it to the center of the map
	useEffect(() => {
		// pop up to ask for user location
		navigator.geolocation.getCurrentPosition((position) => {
			// set user location
			setUser({
				longitude: position.coords.longitude,
				latitude: position.coords.latitude,
			});
			// set map center to user location
			setViewState({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			});
		});

		// set the geojson for the user location, used for the circle layer
		setGeojson({
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
		});
	}, []);

	// for map layer - represents where the user is
	const userCircleStyle = {
		id: "point",
		type: "circle",
		paint: {
			"circle-radius": 10,
			"circle-color": "#007cbf",
		},
	};

	return (
		<Source type="geojson" data={geojson}>
			<Layer {...userCircleStyle} />
		</Source>
	);
};

export default UserLayer;
