const price = (data) => {
	// clean up the data
	let averagePrice = [
		parseInt(data.r_mf_6p_10.replace(/\$/g, "")),
		parseInt(data.r_mf_9a_6p.replace(/\$/g, "")),
		parseInt(data.r_sa_6p_10.replace(/\$/g, "")),
		parseInt(data.r_sa_9a_6p.replace(/\$/g, "")),
		parseInt(data.r_su_6p_10.replace(/\$/g, "")),
		parseInt(data.r_su_9a_6p.replace(/\$/g, "")),
	];

	let sum = averagePrice.reduce((a, b) => a + b, 0);
	let avg = sum / averagePrice.length || 0;

	// for each number rounded up, add a dollar sign
	let price = "";
	for (let i = 0; i < Math.ceil(avg); i++) {
		price += "$";
	}

	return price;
	// returns a string of dollar signs based on the average price
};

export default price;
