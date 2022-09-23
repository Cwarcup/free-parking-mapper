import { Source, Layer } from "react-map-gl";

const SearchLayer = ({ data }) => {
	const layerStyling = {
		id: "search-layer",
		type: "circle",
		paint: {
			"circle-radius": 7,
			"circle-color": "#007cbf",
		},
	};

	return (
		<Source type="geojson" data={data}>
			<Layer {...layerStyling} />
		</Source>
	);
};

export default SearchLayer;
