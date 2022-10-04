import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../helpers/context";

const SearchList = () => {
	const { searchResults } = useContext(SearchContext);

	const [resultLength, setResultLength] = useState(3);

	const [list, setList] = useState([]);

	// state for clicked item
	const [clickedItem, setClickedItem] = useState(null);

	useEffect(() => {
		if (searchResults) {
			const listItems = searchResults.features.map((result, index) => {
				return (
					<li key={`search-result-${index}`}>
						<button
							className="flex flex-col items-center focus:bg-slate-600 hover:bg-slate-600 w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none"
							onClick={() => {
								setClickedItem(result);
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
	}, [searchResults]);

	// used to show more results, disabled if there are no more results
	const loadMoreBtn = (
		<button
			className="flex flex-col items-center focus:bg-slate-600 hover:bg-slate-600 w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none"
			onClick={() => setResultLength(resultLength + 3)}
		>
			<p className="text-gray-100">Load More</p>
		</button>
	);

	// used to show less results, disabled if there are no less results
	const loadLessBtn = (
		<button
			className="flex flex-col items-center focus:bg-slate-600 hover:bg-slate-600 w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none"
			onClick={() => setResultLength(resultLength - 3)}
		>
			<p className="text-gray-100">Load Less</p>
		</button>
	);

	// function to update the clicked item state
	const updateClickedItem = (item) => {
		setClickedItem(item);
	};

	console.log("clickedItem", clickedItem);

	return (
		<ul>
			{list.slice(0, resultLength)}
			{searchResults.length > 0 &&
				resultLength < searchResults.features.length &&
				loadMoreBtn}
			{resultLength > 3 && loadLessBtn}
		</ul>
	);
};

export default SearchList;
