import { useState, useContext } from "react";
import { UserContext } from "../helpers/context";
import axios from "axios";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState([]);

	const { user } = useContext(UserContext);

	// setSearch is called when the user types in the search bar
	const handleSearch = (e) => {
		// use debounce to prevent too many requests
		setSearch(e.target.value);
		console.log("search", search);
	};

	// make axios request when button is clicked
	const handleSearchSubmit = async () => {
		console.log("search has been made");

		let request = {
			method: "get",
			url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}&proximity=${user.longitude},${user.latitude}`,
			headers: {},
		};

		axios(request)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				setResults(response.data.features);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<>
			<input type="text" value={search} onChange={handleSearch} />
			<button onClick={() => handleSearchSubmit()}>Search</button>
			{results.map((result) => {
				return (
					<div key={result.id}>
						<p>{result.place_name}</p>
						<p>{result.center}</p>
						<p>{result.geometry.coordinates}</p>
					</div>
				);
			})}
		</>
	);
};

export default SearchInput;
