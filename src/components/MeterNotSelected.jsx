const MeterNotSelected = () => {
	return (
		<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
			<div className="w-full text-sm text-center text-gray-500">
				<div className="p-5 text-lg font-semibold text-left text-gray-900 bg-gray-50 ">
					Click on a Meter
					<p className="mt-1 text-sm font-normal text-gray-500">
						Parking meters are in effect from <u>9am to 10pm, 7 days a week</u>,
						including holidays.
						<a
							href="https://vancouver.ca/streets-transportation/parking.aspx"
							target="_blank"
							rel="noreferrer"
							className="text-blue-500 hover:text-blue-600"
						>
							{" "}
							More info
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default MeterNotSelected;
