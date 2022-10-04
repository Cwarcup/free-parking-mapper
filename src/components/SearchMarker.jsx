import { Marker, Popup } from "react-map-gl";
import { FaMapMarker } from "react-icons/fa";
import { useContext } from "react";
import { SearchInfoContext, SelectedItemContext } from "../helpers/context";

const SearchMarker = ({ data }) => {
	const { setSearchInfo } = useContext(SearchInfoContext);
	const { selectedItem, setSelectedItem } = useContext(SelectedItemContext);

	const setPopupInfo = (e) => {
		setSelectedItem(e);
		setSearchInfo({
			latitude: e.geometry.coordinates[0],
			longitude: e.geometry.coordinates[1],
			address: e.properties.address,
			category: e.properties.category,
		});
	};

	// create array of markers for each feature in data
	const markers = data.features.map((feature, index) => {
		return (
			<div key={`marker-${index}`}>
				<Marker
					key={`search-marker-${index}`}
					latitude={feature.center[1]}
					longitude={feature.center[0]}
					onClick={(e) => {
						e.originalEvent.stopPropagation();
						setPopupInfo(feature);
					}}
				>
					<FaMapMarker className="text-3xl text-blue-500" />
				</Marker>
				{selectedItem && (
					<Popup
						key={`search-popup-marker-${index}`}
						latitude={selectedItem.center[1]}
						longitude={selectedItem.center[0]}
						onClose={() => setSelectedItem(false)}
						anchor="bottom"
						className="flex flex-col items-center rounded-3xl text-center p-3"
					>
						<div className="m-2">
							<p className="mb-2 text-base font-medium text-gray-100">
								{selectedItem.text}
							</p>
							<p className="text-gray-100">{selectedItem.properties.address}</p>
							<p className="text-gray-100">
								{selectedItem.properties.category}
							</p>
						</div>
					</Popup>
				)}
			</div>
		);
	});

	return <>{markers}</>;
};

export default SearchMarker;
