import { Popup } from "react-map-gl";
import price from "../helpers/price";

const MapPopup = ({ latitude, longitude, onClose, popupData }) => {
	const payByPhoneClipboard = (e) => {
		e.preventDefault();
		navigator.clipboard.writeText(popupData.payPhone);
		alert(
			`Copied ${popupData.fields.payPhone} to clipboard. Visit https://www.paybyphone.com/ to pay your meter.`
		);
	};

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
				<p className="text-gray-100" onClick={(e) => payByPhoneClipboard(e)}>
					PayByPhone: {popupData.payPhone}
				</p>
				<p className="text-gray-100">{price(popupData.price)}</p>
			</div>
		</Popup>
	);
};

export default MapPopup;
