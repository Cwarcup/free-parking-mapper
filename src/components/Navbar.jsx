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
			</div>
		</header>
	);
};

export default Navbar;
