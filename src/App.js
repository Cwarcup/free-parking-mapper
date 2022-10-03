/* eslint-disable import/no-webpack-loader-syntax */
import { useState } from "react";
import {
	UserContext,
	ViewContext,
	SearchContext,
	PopupInfoContext,
	MarkerDataContext,
	FilterContext,
} from "./helpers/context";
import MapMain from "./components/MapMain";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import RowsSlider from "./components/RowsSlider";
import SingleCompWrapper from "./components/SingleCompWrapper";
import MeterTable from "./components/MeterTable";
import MeterNotSelected from "./components/MeterNotSelected";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import FilterMetersByPrice from "./components/FilterMetersByPrice";

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =
	require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

function App() {
	const [user, setUser] = useState(null);
	const [viewState, setViewState] = useState({
		latitude: 49.2862711482359,
		longitude: -123.12383482184555,
		zoom: 12.343529451662485,
	});

	const [searchResults, setSearchResults] = useState(false);

	const [popupInfo, setPopupInfo] = useState(null);

	const [markerData, setMarkerData] = useState({
		distance: "1000",
		rows: "50",
	});

	const [filter, setFilter] = useState({
		maxPrice: "$$$$$$$",
	});

	return (
		<>
			<UserContext.Provider value={{ user, setUser }}>
				<ViewContext.Provider value={{ viewState, setViewState }}>
					<SearchContext.Provider value={{ searchResults, setSearchResults }}>
						<PopupInfoContext.Provider value={{ popupInfo, setPopupInfo }}>
							<MarkerDataContext.Provider value={{ markerData, setMarkerData }}>
								<FilterContext.Provider value={{ filter, setFilter }}>
									<SideBar />
									<div className="flex h-full w-full flex-col">
										<Navbar />
										<div className="h-full overflow-auto pl-0 md:pl-10">
											<main
												id="dashboard-main"
												className="h-100vh overflow-auto px-4 pt-4 md:pt-10 pb-[100px]"
											>
												<div className="flex flex-col items-center gap-x-4 gap-y-4">
													<SingleCompWrapper size={"w-full"}>
														<MapMain />
													</SingleCompWrapper>
													<div className="flex flex-row flex-wrap gap-3 justify-center md:justify-start">
														<SingleCompWrapper size={"w-fit h-fit"}>
															<RowsSlider />
														</SingleCompWrapper>
														<SingleCompWrapper
															size={"w-fit h-[117px] sm:h-[181px] z-30"}
														>
															<FilterMetersByPrice />
														</SingleCompWrapper>
														<div className="col-span-2">
															<SingleCompWrapper
																size={
																	"h-fit w-96 lg:w-fit sm:w-[450px] md:w-[550px]"
																}
															>
																{popupInfo ? (
																	<MeterTable />
																) : (
																	<MeterNotSelected />
																)}
															</SingleCompWrapper>
														</div>
													</div>
												</div>
											</main>
										</div>
									</div>
								</FilterContext.Provider>
							</MarkerDataContext.Provider>
						</PopupInfoContext.Provider>
					</SearchContext.Provider>
				</ViewContext.Provider>
			</UserContext.Provider>
		</>
	);
}

export default App;
