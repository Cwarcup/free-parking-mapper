import avatar from "../images/avatar.jpg";
import SearchInput from "./SearchInput";
import { BiSearch } from "react-icons/bi";
import SearchList from "./SearchList";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

const SideBar = () => {
	return (
		<>
			<aside className="fixed z-50 md:relative">
				<input type="checkbox" className="peer hidden" id="sidebar-open" />
				<label
					className="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:bg-gray-600 peer-checked:text-white absolute top-8 z-20 mx-2 cursor-pointer md:hidden"
					htmlFor="sidebar-open"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</label>
				<nav
					aria-label="Sidebar Navigation"
					className="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-gray-700 text-white transition-all md:h-screen md:w-64 lg:w-72"
				>
					<div className="bg-slate-800 mt-5 py-4 pl-6 md:pl-12 md:mt-10 flex">
						<BsFillGrid3X3GapFill className="inline-block h-6 w-6 text-lime-500 mr-2" />
						<span>
							<span className="text-xl">Pay</span>
							<span className="text-xl text-lime-500">By</span>
							<span className="text-xl">Fonie</span>
						</span>
					</div>
					<div className="relative mx-4 flex items-center justify-between rounded-md mt-5 text-black hide-on-mobile">
						<BiSearch className="absolute left-2 block h-5 w-5 text-gray-400" />
						<SearchInput />
					</div>
					<div className="mt-5">
						<SearchList />
					</div>

					<div className="my-6 mt-auto ml-10 flex cursor-pointer">
						<div>
							<img
								className="h-12 w-12 rounded-full"
								src={avatar}
								alt="avatar"
							/>
						</div>
						<div className="ml-3">
							<p className="font-medium">Curtis Warcup</p>
							<p className="text-sm text-gray-300">Vancouver, Canada</p>
						</div>
					</div>
				</nav>
			</aside>
		</>
	);
};

export default SideBar;
