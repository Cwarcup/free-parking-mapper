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
			<div className="flex flex-col items-center max-w-xs">
				<label
					htmlFor="minmax-range"
					className="block mb-4 text-sm font-medium text-slate-800 "
				>
					Number of Meters
				</label>
				<input
					type="range"
					min="0"
					max="100"
					step="10"
					value={rows}
					onChange={(e) => handleRowsChange(e)}
					className="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-slate-800"
				/>
			</div>
		</>
	);
};

export default RowsSlider;
