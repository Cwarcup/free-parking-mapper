import { Marker, Popup } from "react-map-gl";
import { FaMapMarker } from "react-icons/fa";
import { useState } from "react";

const SearchMarker = ({ data }) => {
	const [marker, setMarker] = useState(false);

	const setPopupInfo = (e) => {
		setMarker(e);
	};

	console.log("data", data);

	// create array of markers for each feature in data
	const markers = data.features.map((feature, index) => {
		return (
			<>
				<Marker
					key={index}
					latitude={feature.center[1]}
					longitude={feature.center[0]}
					onClick={(e) => {
						e.originalEvent.stopPropagation();
						setPopupInfo(feature);
					}}
				>
					<FaMapMarker className="text-3xl text-blue-500" />
				</Marker>
				{marker && (
					<Popup
						latitude={marker.center[1]}
						longitude={marker.center[0]}
						onClose={() => setMarker(false)}
						anchor="bottom"
						className="flex flex-col items-center rounded-3xl text-center p-3"
					>
						<div className="m-2">
							<p className="mb-2 text-base font-medium text-gray-100">
								{marker.text}
							</p>
							<p className="text-gray-100">{marker.properties.address}</p>
							<p className="text-gray-100">{marker.properties.category}</p>
						</div>
					</Popup>
				)}
			</>
		);
	});

	return <>{markers}</>;
};

export default SearchMarker;
