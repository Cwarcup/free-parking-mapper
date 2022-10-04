import { MarkerDataContext } from "../helpers/context";
import { useContext, useState } from "react";

const RowsSlider = () => {
	const { markerData, setMarkerData } = useContext(MarkerDataContext);

	const [rows, setRows] = useState(markerData.rows);
	const [checked, setChecked] = useState(false);
	const [disabled, setDisabled] = useState(false);

	// function to update the rows state and set markerData rows
	const handleRowsChange = (e) => {
		setRows(e.target.value);
		setMarkerData({ ...markerData, rows: e.target.value });
	};

	// function to update rows to checkbox value (max) and set markerData rows
	const handleRowsMax = (e) => {
		setRows(e.target.value);
		setMarkerData({ ...markerData, rows: e.target.value });
		// set the checkbox to checked
		setChecked(!checked);
		// disable the slider
		setDisabled(!disabled);

		// if the checkbox is unchecked, set the rows to 100 and enable the slider
		if (checked) {
			setRows(100);
			setMarkerData({ ...markerData, rows: 100 });
			setDisabled(!disabled);
		}
	};

	return (
		<>
			<div className="flex items-center max-w-xs gap-4 ">
				<input
					type="range"
					min="1"
					max="101"
					step="10"
					value={rows}
					onChange={(e) => handleRowsChange(e)}
					disabled={disabled}
					className="w-[100px]"
				/>
				<div className="flex justify-center ">
					<label
						htmlFor="select-all"
						className="mr-1 sm:mr-2 my-2 text-sm font-normal text-gray-500"
					>
						Display All
					</label>
					<input
						type="checkbox"
						id="select-all"
						name="select-all"
						value="10000"
						checked={checked}
						onChange={(e) => handleRowsMax(e)}
					/>
				</div>
			</div>
		</>
	);
};

export default RowsSlider;
