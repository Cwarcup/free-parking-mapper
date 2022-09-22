import { useState } from "react";
import { UserContext, ViewContext } from "./helpers/context";
import MapMain from "./components/MapMain";

function App() {
	const [user, setUser] = useState(null);
	const [viewState, setViewState] = useState({
		latitude: 49.16,
		longitude: -123.13,
		zoom: 10,
	});

	return (
		<>
			<UserContext.Provider value={{ user, setUser }}>
				<ViewContext.Provider value={{ viewState, setViewState }}>
					<MapMain />
				</ViewContext.Provider>
			</UserContext.Provider>
		</>
	);
}

export default App;
