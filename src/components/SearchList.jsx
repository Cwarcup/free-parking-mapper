import { useContext, useState, useEffect } from "react";
import {
	SearchContext,
	SelectedItemContext,
	SearchInfoContext,
} from "../helpers/context";

const SearchList = () => {
	const { searchResults } = useContext(SearchContext);
	const { setSelectedItem } = useContext(SelectedItemContext);
	const { setSearchInfo, searchInfo } = useContext(SearchInfoContext);

	const [resultLength, setResultLength] = useState(3);
	const [list, setList] = useState([]);
	const [selected, setSelected] = useState("hidden");

	// change the background color of the selected list item when clicked
	const handleSelect = (e) => {
		setSelected(e.target.id);
	};

	useEffect(() => {
		if (searchResults) {
			const listItems = searchResults.features.map((result, index) => {
				return (
					<li key={`search-result-${index}`}>
						<button
							className={`flex flex-col items-center focus:bg-slate-600 hover:bg-slate-600 w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none {${
								selected === `search-result-${index}` ? "bg-slate-600" : ""
							}}`}
							onClick={(e) => {
								setSelectedItem(result);
								setSearchInfo({
									...searchInfo,
									latitude: result.geometry.coordinates[0],
									longitude: result.geometry.coordinates[1],
									address: result.properties.address,
									category: result.properties.category,
								});

								handleSelect(e);
							}}
						>
							<p className="text-gray-100 ">{result.text}</p>
							<p className="text-gray-100">{result.properties.address}</p>
						</button>
					</li>
				);
			});

			setList(listItems);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchResults]);

	// used to show more results, disabled if there are no more results
	const loadMoreBtn = (
		<button
			className="flex flex-col items-center w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none"
			onClick={() => setResultLength(resultLength + 3)}
		>
			<p className="relative mt-4 rounded-lg border-2 border-lime-600 bg-lime-600 px-6 py-2 font-medium text-white transition hover:translate-y-1">
				Load More
			</p>
		</button>
	);

	// used to show less results, disabled if there are no less results
	const loadLessBtn = (
		<button
			className="flex flex-col items-center w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none"
			onClick={() => setResultLength(resultLength - 3)}
		>
			<p className="relative mt-4 rounded-lg border-2 border-lime-600 bg-lime-600 px-6 py-2 font-medium text-white transition hover:-translate-y-1">
				Load Less
			</p>
		</button>
	);

	return (
		<ul>
			{list.slice(0, resultLength)}
			{searchResults &&
				resultLength < searchResults.features.length &&
				loadMoreBtn}
			{resultLength > 3 && loadLessBtn}
		</ul>
	);
};

export default SearchList;
