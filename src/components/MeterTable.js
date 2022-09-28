import { useContext } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from "@mui/material";
import { PopupInfoContext } from "../helpers/context";

const MeterTable = () => {
	const { popupInfo } = useContext(PopupInfoContext);

	const {
		fields: {
			creditcard,
			geo_local_area,
			pay_phone,
			r_mf_6p_10,
			r_mf_9a_6p,
			r_sa_6p_10,
			r_sa_9a_6p,
			r_su_6p_10,
			r_su_9a_6p,
			t_mf_6p_10,
			t_mf_9a_6p,
			t_sa_6p_10,
			t_sa_9a_6p,
			t_su_6p_10,
			t_su_9a_6p,
			timeineffe,
		},
	} = popupInfo;

	console.log(creditcard, geo_local_area, pay_phone);

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }}>
				<TableHead>
					<TableRow>
						<TableCell>Area</TableCell>
						<TableCell align="right">Pay by Phone #</TableCell>
						<TableCell align="right">Rate</TableCell>
						<TableCell align="right">Maximum Duration</TableCell>
						<TableCell align="right">Credit Card Accepted</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
						<TableCell align="right">{geo_local_area}</TableCell>
						<TableCell align="right">{pay_phone}</TableCell>
						<TableCell align="right">{r_mf_9a_6p}</TableCell>
						<TableCell align="right">{t_mf_9a_6p}</TableCell>
						<TableCell align="right">{creditcard}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default MeterTable;
