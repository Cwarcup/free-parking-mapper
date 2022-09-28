import React from "react";
import SearchInput from "./SearchInput";
import { useContext } from "react";
import { ViewContext, UserContext } from "../helpers/context";
import { BiCurrentLocation, BiUserCircle, BiSearch } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

const Navbar = () => {
	const { viewState, setViewState } = useContext(ViewContext);
	const { user } = useContext(UserContext);

	const handleNewViewState = () => {
		if (user) {
			setViewState({
				...viewState,
				latitude: user.latitude,
				longitude: user.longitude,
			});
		}
	};

	return (
		<header className="relative flex flex-col items-center bg-white px-4 py-4 shadow sm:flex-row md:h-20">
			<div className="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">
				<div className="relative ml-10 flex items-center justify-between rounded-md sm:ml-auto">
					<BiSearch className="absolute left-2 block h-5 w-5 text-gray-400" />
					<SearchInput />
				</div>

				<ul className="mx-auto mt-4 flex space-x-6 sm:mx-5 sm:mt-0">
					<li className="">
						<button
							className="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow"
							onClick={() => {
								handleNewViewState();
							}}
							alt="Current Location"
						>
							<BiCurrentLocation />
						</button>
					</li>
					<li className="">
						<button className="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
							<BiUserCircle />
						</button>
					</li>
					<li className="">
						<button className="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
							<FiSettings />
						</button>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Navbar;
