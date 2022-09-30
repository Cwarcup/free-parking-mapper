import { useContext, useState } from "react";
import { FilterContext } from "../helpers/context";
import chevron from "../images/chevron.svg";

const FilterMetersByPrice = () => {
	const { filter, setFilter } = useContext(FilterContext);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const handlePriceChange = (val) => {
		let price = "";
		for (let i = 0; i < val; i++) {
			price += "$";
		}

		setFilter({
			...filter,
			maxPrice: price,
		});

		setDropdownOpen(false);
	};

	// when user clicks a list item, set the max price to the value of the list item

	return (
		<>
			<div className="p-2">
				<div className="relative w-32">
					<input
						className="peer hidden"
						type="checkbox"
						name="select-1"
						id="select-1"
						checked={dropdownOpen}
						onChange={() => setDropdownOpen(!dropdownOpen)}
					/>
					<label
						htmlFor="select-1"
						className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-400 peer-checked:ring"
					>
						{filter.maxPrice.length > 0 ? (
							<span className="flex-1">{filter.maxPrice}</span>
						) : (
							<span className="flex-1 text-gray-400">Max Price</span>
						)}
					</label>
					<img
						src={chevron}
						alt="chevron"
						className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-gray-600 transition peer-checked:rotate-180"
					/>
					<ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-xl transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
						<li
							className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
							onClick={() => handlePriceChange(1)}
						>
							$
						</li>
						<li
							className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
							onClick={() => handlePriceChange(2)}
						>
							$$
						</li>
						<li
							className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
							onClick={() => handlePriceChange(3)}
						>
							$$$
						</li>
						<li
							className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
							onClick={() => handlePriceChange(4)}
						>
							$$$$
						</li>
						<li
							className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
							onClick={() => handlePriceChange(6)}
						>
							$$$$$+
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default FilterMetersByPrice;
