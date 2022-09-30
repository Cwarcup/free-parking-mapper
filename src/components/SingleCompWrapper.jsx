import React from "react";

const SingleCompWrapper = (props) => {
	return (
		<div className={`rounded-xl bg-white sm:p-10 p-2 shadow-md ${props.size}`}>
			{props.children}
		</div>
	);
};

export default SingleCompWrapper;
