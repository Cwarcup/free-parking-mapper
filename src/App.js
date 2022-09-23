import { useState } from "react";
import { UserContext, ViewContext, SearchContext } from "./helpers/context";
import MapMain from "./components/MapMain";
import SearchInput from "./components/SearchInput";

function App() {
	const [user, setUser] = useState(null);
	const [viewState, setViewState] = useState({
		latitude: 49.16,
		longitude: -123.13,
		zoom: 10,
	});

	const [searchResults, setSearchResults] = useState(false);

	return (
		<>
			<UserContext.Provider value={{ user, setUser }}>
				<ViewContext.Provider value={{ viewState, setViewState }}>
					<SearchContext.Provider value={{ searchResults, setSearchResults }}>
						<MapMain />
						<SearchInput />
					</SearchContext.Provider>
				</ViewContext.Provider>
			</UserContext.Provider>
		</>
	);
}

export default App;
