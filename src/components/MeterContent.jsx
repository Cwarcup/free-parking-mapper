import RowsSlider from "./RowsSlider";
import FilterMetersByPrice from "./FilterMetersByPrice";
import MeterTable from "./MeterTable";
import { PopupInfoContext } from "../helpers/context";
import { useContext } from "react";
import MeterNotSelected from "./MeterNotSelected";

const MeterContent = () => {
	const { popupInfo } = useContext(PopupInfoContext);

	return (
		<div className="mx-auto mt-8 max-w-screen-lg px-2">
			<div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
				<div className="mt-4 sm:mt-0">
					<div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-end mb-2 ">
						<div className="flex items-center">
							<label
								for=""
								className="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"
							>
								{" "}
								Number of meters:{" "}
							</label>
							<RowsSlider />
						</div>

						<div className="flex items-center ml-4 z-30 h-10">
							<label
								for=""
								className="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"
							>
								{" "}
								Filter by price:{" "}
							</label>
							<div className="place-self-start w-fit h-[117px] sm:h-[181px] z-30">
								<FilterMetersByPrice />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>{popupInfo ? <MeterTable /> : <MeterNotSelected />}</div>
		</div>
	);
};

export default MeterContent;
