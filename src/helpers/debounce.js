const debounce = (fn, delay) => {
	let timerId;
	return (...args) => {
		clearTimeout(timerId);
		timerId = setTimeout(() => fn(...args), delay);
	};
};

export default debounce;
