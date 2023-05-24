window.onload = function () {
	const options = {
		useEasing: false,
		useGrouping: true,
		separator: "",
		decimal: "",
		prefix: "",
		suffix: "",
	};

	// prettier-ignore
	const activePersons = new CountUp( "active-persons", 0, 170, 0, 3.5, options );
	const activeFund = new CountUp("active-fund", 0, 20, 0, 2.0, options);
	let start = true;

	document.addEventListener("scroll", (event) => {
		if (window.scrollY > 400 && start === true) {
			start = false;
			activePersons.start();
			activeFund.start();
			console.log(window.scrollY);
		}
	});
};
