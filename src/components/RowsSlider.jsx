import { MarkerDataContext } from "../helpers/context";
import { useContext, useState } from "react";

const RowsSlider = () => {
	const { markerData, setMarkerData } = useContext(MarkerDataContext);

	const [rows, setRows] = useState(markerData.rows);
	const [distance, setDistance] = useState(markerData.distance);

	// function to update the rows state and set markerData rows
	const handleRowsChange = (e) => {
		console.log("row value", e.target.value);

		setRows(e.target.value);
		setMarkerData({ ...markerData, rows: e.target.value });
	};

	// function to update the distance radius state and set markerData distance
	const handleDistanceChange = (e) => {
		console.log("distance value", e.target.value);
		setDistance(e.target.value);
		setMarkerData({ ...markerData, distance: e.target.value });
	};

	return (
		<>
			<div className="flex flex-col items-center max-w-xl">
				<label
					htmlFor="minmax-range"
					className="block mb-2 text-sm font-medium text-gray-900 "
				>
					Rows
				</label>
				<input
					type="range"
					min="0"
					max="100"
					value={rows}
					onChange={(e) => handleRowsChange(e)}
					className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
				/>
				<label
					htmlFor="minmax-range"
					className="block mb-2 text-sm font-medium text-gray-900 "
				>
					parking Radius
				</label>
				<input
					type="range"
					min="500"
					max="10000"
					value={distance}
					onChange={(e) => handleDistanceChange(e)}
					className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
				/>
			</div>
		</>
	);
};

export default RowsSlider;
