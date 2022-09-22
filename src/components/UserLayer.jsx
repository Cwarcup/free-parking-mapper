import { Source, Layer } from "react-map-gl";
import { useContext, useEffect, useState } from "react";
import { UserContext, ViewContext } from "../helpers/context";

const UserLayer = () => {
	const { user, setUser } = useContext(UserContext);

	// for initial map state, if no user location
	const { viewState, setViewState } = useContext(ViewContext);

	const [userLocationFetched, setUserLocationFetched] = useState(false);

	// used for user location
	const [geojson, setGeojson] = useState(null);

	// on first load, if user location is not set, set it to the center of the map
	useEffect(() => {
		// pop up to ask for user location
		navigator.geolocation.getCurrentPosition((position) => {
			// set user location
			setUser({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			});
			// set map center to user location
			setViewState({
				...viewState,
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			});

			setGeojson({
				type: "FeatureCollection",
				features: [
					{
						type: "Feature",
						geometry: {
							type: "Point",
							coordinates: [
								position.coords.longitude,
								position.coords.latitude,
							],
						},
					},
				],
			});
			setUserLocationFetched(true);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userLocationFetched]);

	// for map layer - represents where the user is
	const userCircleStyle = {
		id: "point",
		type: "circle",
		paint: {
			"circle-radius": 10,
			"circle-color": "#007cbf",
		},
	};

	console.log("user", user);
	console.log("viewState", viewState);
	console.log("geojson", geojson);
	console.log("userLocationFetched", userLocationFetched);
	return (
		<>
			<Source type="geojson" data={geojson}>
				<Layer {...userCircleStyle} />
			</Source>
		</>
	);
};

export default UserLayer;
