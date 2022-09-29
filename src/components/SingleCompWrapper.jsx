import React from "react";

const SingleCompWrapper = (props) => {
	return (
		<div className={`rounded-xl bg-white p-10 shadow-md ${props.size}`}>
			{props.children}
		</div>
	);
};

export default SingleCompWrapper;
