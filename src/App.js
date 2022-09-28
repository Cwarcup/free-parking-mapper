import { useState } from "react";
import {
	UserContext,
	ViewContext,
	SearchContext,
	PopupInfoContext,
} from "./helpers/context";
import MapMain from "./components/MapMain";
import SearchInput from "./components/SearchInput";
import SideBar from "./components/SideBar";

function App() {
	const [user, setUser] = useState(null);
	const [viewState, setViewState] = useState({
		latitude: 49.16,
		longitude: -123.13,
		zoom: 10,
	});

	const [searchResults, setSearchResults] = useState(false);

	const [popupInfo, setPopupInfo] = useState(null);

	return (
		<>
			<UserContext.Provider value={{ user, setUser }}>
				<ViewContext.Provider value={{ viewState, setViewState }}>
					<SearchContext.Provider value={{ searchResults, setSearchResults }}>
						<PopupInfoContext.Provider value={{ popupInfo, setPopupInfo }}>
							<div className="w-full md:w-4/5 bg-gray-100">
								<div className="container bg-gray-100 pt-16 px-6">
									<MapMain />
									<SearchInput />
								</div>
							</div>
							<SideBar />
						</PopupInfoContext.Provider>
					</SearchContext.Provider>
				</ViewContext.Provider>
			</UserContext.Provider>
		</>
	);
}

export default App;
