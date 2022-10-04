import React from "react";
import SearchInput from "./SearchInput";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
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
