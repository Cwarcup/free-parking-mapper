import { useState, useContext } from "react";
import { ViewContext, SearchContext } from "../helpers/context";
import axios from "axios";
import { Input, Button, Container } from "@mui/material";

const SearchInput = () => {
	const { viewState } = useContext(ViewContext);
	const { searchResults, setSearchResults } = useContext(SearchContext);

	// used for get request
	const [search, setSearch] = useState("");

	// setSearch is called when the user types in the search bar
	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	// make axios request when button is clicked
	const handleSearchSubmit = async () => {
		console.log("search has been made");

		let request = {
			method: "get",
			url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}&proximity=${viewState.longitude},${viewState.latitude}`,
			headers: {},
		};

		axios(request)
			.then(function (response) {
				setSearchResults(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<>
			<Container maxWidth="xl">
				<Input
					type="text"
					placeholder="Search a location"
					value={search}
					onChange={handleSearch}
				/>
				<Button variant="contained" onClick={handleSearchSubmit}>
					Search
				</Button>

				{searchResults &&
					searchResults.features.map((result) => {
						return (
							<div key={result.id}>
								<p>{result.place_name}</p>
								<p>{result.center}</p>
								<p>{result.geometry.coordinates}</p>
							</div>
						);
					})}
			</Container>
		</>
	);
};

export default SearchInput;
