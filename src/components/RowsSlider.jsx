import React from "react";

const RowsSlider = () => {
	return (
		<>
			<label
				htmlFor="minmax-range"
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
			>
				Rows
			</label>
			<input
				type="range"
				min="0"
				max="10"
				value="5"
				onChange={}
				className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
			/>
		</>
	);
};

export default RowsSlider;
