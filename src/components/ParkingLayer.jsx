import { Source, Layer } from "react-map-gl";

const ParkingLayer = ({ data, paintStyle, id }) => {
	const layerStyling = {
		id: id,
		type: "fill",
		paint: paintStyle,
		source: {
			type: "geojson",
			data: data,
		},
	};

	return (
		<Source type="geojson" data={data}>
			<Layer {...layerStyling} />
		</Source>
	);
};

export default ParkingLayer;
