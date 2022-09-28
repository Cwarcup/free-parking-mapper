import { useState } from "react";
import {
	UserContext,
	ViewContext,
	SearchContext,
	PopupInfoContext,
} from "./helpers/context";
import MapMain from "./components/MapMain";
import SearchInput from "./components/SearchInput";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
	const [user, setUser] = useState(null);
	const [viewState, setViewState] = useState({
		latitude: 49.2862711482359,
		longitude: -123.12383482184555,
		zoom: 12.343529451662485,
	});

	const [searchResults, setSearchResults] = useState(false);

	const [popupInfo, setPopupInfo] = useState(null);

	return (
		<>
			<UserContext.Provider value={{ user, setUser }}>
				<ViewContext.Provider value={{ viewState, setViewState }}>
					<SearchContext.Provider value={{ searchResults, setSearchResults }}>
						<PopupInfoContext.Provider value={{ popupInfo, setPopupInfo }}>
							<SideBar />
							<div className="flex h-full w-full flex-col">
								<Navbar />
								<div className="h-full overflow-hidden pl-10">
									<main
										id="dashboard-main"
										className="h-[calc(100vh-10rem)] overflow-auto px-4 py-10"
									>
										<MapMain />
									</main>
								</div>
							</div>
						</PopupInfoContext.Provider>
					</SearchContext.Provider>
				</ViewContext.Provider>
			</UserContext.Provider>
		</>
	);
}

export default App;
