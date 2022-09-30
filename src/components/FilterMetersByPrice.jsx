import { useContext } from "react";
import { FilterContext } from "../helpers/context";

const FilterMetersByPrice = () => {
	const { filter, setFilter } = useContext(FilterContext);

	const handlePriceChange = (e) => {
		let price = "";
		for (let i = 0; i < e.target.value; i++) {
			price += "$";
		}

		setFilter({
			...filter,
			maxPrice: price,
		});
	};

	return (
		<>
			<div className="flex flex-col items-center max-w-xs">
				<label
					htmlFor="minmax-range"
					className="my-2 text-sm font-normal text-gray-500"
				>
					Max Hourly Price
				</label>
				<input
					type="range"
					min="1"
					max="6"
					step="1"
					value={filter.maxPrice.length}
					onChange={(e) => handlePriceChange(e)}
				/>
			</div>
		</>
	);
};

export default FilterMetersByPrice;
