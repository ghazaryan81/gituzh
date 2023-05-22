window.onload = function () {
	const intro = document.querySelector(".js-typo-intro");
	const intro2 = document.querySelector(".js-typo-intro-2");

	intro.innerHTML = intro?.textContent?.replace(
		/\S/g,
		"<span class='letter'>$&</span>"
	);
	intro2.innerHTML = intro2?.textContent?.replace(
		/\S/g,
		"<span class='letter'>$&</span>"
	);

	anime?.timeline({ loop: false }).add({
		targets: ".js-typo-intro .letter",
		scale: [3, 1],
		opacity: [0, 1],
		translateZ: 0,
		easing: "easeOutExpo",
		duration: 950,
		delay: (el, i) => 70 * i,
	});

	anime?.timeline({ loop: false }).add({
		targets: ".js-typo-intro-2 .letter",
		scale: [3, 1],
		opacity: [0, 1],
		translateZ: 0,
		easing: "easeOutExpo",
		duration: 950,
		delay: (el, i) => 70 * i,
	});

	const scrollbar = Scrollbar.init(document.body, { speed: 0.75 });

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

	scrollbar.addListener((e) => {
		if (e.offset.y > 600) {
			activePersons.start();
			activeFund.start();
		}
	});
};
