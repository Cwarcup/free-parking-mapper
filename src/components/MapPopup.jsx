import { Popup } from "react-map-gl";
import price from "../helpers/price";
import { Popup as SecondPopup } from "reactjs-popup";

const MapPopup = ({ latitude, longitude, onClose, popupData }) => {
	const payByPhoneClipboard = (e) => {
		e.preventDefault();
		navigator.clipboard.writeText(popupData.payPhone);

		console.log(
			`Copied ${popupData.payPhone} to clipboard. Visit https://www.paybyphone.com/ to pay your meter.`
		);
	};

	const contentStyle = {
		background: "#FFFF",
		width: "300px",
		padding: "10px",
		borderRadius: "10px",
		"box-shadow": "shadow-md",
		"font-family": "Roboto",
		display: "flex",
		"flex-direction": "column",
		"justify-content": "space-between",
		"align-items": "center",
	};
	const arrowStyle = { color: "#FFFFFF" }; // style for an svg element

	return (
		<Popup
			latitude={latitude}
			longitude={longitude}
			onClose={onClose}
			anchor="bottom"
			className="flex flex-col items-center rounded-3xl text-center p-3"
		>
			<div className="m-2">
				<p className="mb-2 text-xl font-medium text-gray-100">
					{popupData.geoLocalArea}
				</p>

				<SecondPopup
					offsetX={15}
					contentStyle={contentStyle}
					arrowStyle={arrowStyle}
					trigger={
						<p
							className="text-gray-100 button"
							onClick={(e) => payByPhoneClipboard(e)}
						>
							PayByPhone: {popupData.payPhone}
						</p>
					}
					position="right center"
					closeOnDocumentClick={true}
					onOpen={(e) => payByPhoneClipboard(e)}
				>
					<p>Copied {popupData.payPhone} to clipboard!</p>
					<p>
						Visit
						<a
							className="text-blue-800 outline-none"
							href="https://www.paybyphone.com/"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							paybyphone
						</a>{" "}
						to pay your meter.
					</p>
				</SecondPopup>
				<p className="text-gray-100">{price(popupData.price)}</p>
			</div>
		</Popup>
	);
};

export default MapPopup;
