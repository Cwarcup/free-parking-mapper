import avatar from "../images/avatar.jpg";
import SearchInput from "./SearchInput";
import { BiSearch } from "react-icons/bi";
import SearchList from "./SearchList";

const SideBar = () => {

	return (
		<>
			<aside className="fixed z-50 md:relative">
				<input type="checkbox" className="peer hidden" id="sidebar-open" />
				<label
					className="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:bg-gray-600 peer-checked:text-white absolute top-8 z-20 mx-4 cursor-pointer md:hidden"
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
					<div className="bg-slate-800 mt-5 py-4 pl-10 md:mt-10">
						<span className="">
							<span className="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 align-bottom text-2xl font-bold">
								P
							</span>
							<span className="text-xl">ark Buddy</span>
						</span>
					</div>
					{/* DONT DELETE ABOVE */}
					<div className="relative mx-4 flex items-center justify-between rounded-md mt-5 text-black ">
						<BiSearch className="absolute left-2 block h-5 w-5 text-gray-400" />
						<SearchInput />
					</div>
					<SearchList />
					<ul className="mt-8 space-y-3 md:mt-20">
						<li className="relative">
							<button className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
								<span>
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
											d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
										/>
									</svg>
								</span>
								<span className="">Overview</span>
							</button>
						</li>
						<li className="relative">
							<button className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 font-semibold focus:outline-none">
								<span>
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
											d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
										/>
									</svg>{" "}
								</span>
								<span className="">Meters</span>
							</button>
							<svg
								className="text-slate-200 absolute -right-1 -top-1/2 z-10 hidden h-32 w-8 md:block"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="399.349 57.696 100.163 402.081"
								width="1em"
								height="4em"
							>
								<path
									fill="currentColor"
									d="M 499.289 57.696 C 499.289 171.989 399.349 196.304 399.349 257.333 C 399.349 322.485 499.512 354.485 499.512 458.767 C 499.512 483.155 499.289 57.696 499.289 57.696 Z"
								/>
							</svg>
						</li>
						<li className="relative">
							<button className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
								<span>
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
											d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								</span>
								<span className="">Settings</span>
							</button>
						</li>
					</ul>

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
