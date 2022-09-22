import { useState } from "react";
import { UserContext } from "./helpers/context";
import MapMain from "./components/MapMain";

function App() {
	const [user, setUser] = useState(null);

	return (
		<>
			<UserContext.Provider value={{ user, setUser }}>
				<MapMain />
			</UserContext.Provider>
		</>
	);
}

export default App;
