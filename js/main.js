$(document).ready(function () {
  // "use strict";

  Scrollbar.init(document.querySelector(".js-smooth-scrollbar"), {
    // delegateTo: document,
    // continuousScrolling: false,
    // overscrollEffect: "bounce",
    // damping: 0.05,
    // plugins: {
    //   horizontalScroll: {
    //     events: [/wheel/]
    //   }
    // }
  });

  // console.log(Scrollbar);

  // document.on("scroll", function () {
  //   console.log("scroll"); //not working
  // });

  // Scrollbar.addListener((status) => {
  //   console.log("asdasdasd");
  // });

  // window.addEventListener("scroll", (event) => {
  //   console.log("Scrollbar");
  // });

  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
});

window.onload = function () {
  const options = {
    useEasing: false,
    useGrouping: true,
    separator: "",
    decimal: "",
    prefix: "",
    suffix: ""
  };

  // prettier-ignore

  /*   if (document.querySelector("#active-persons") && document.querySelector("#active-fund")) {





	const activePersons = new CountUp( "active-persons", 0, 170, 0, 3.5, options );
	const activeFund = new CountUp("active-fund", 0, 20, 0, 2.0, options);
 
	let start = true;
	document.addEventListener("scroll", (event) => {
		if (window.scrollY > 400 && start === true) {

   // count

			start = false;
			activePersons.start();
			activeFund.start();

		}
	});
} */

  const clearAltTitle = (className) => {
    const htaElem = document.querySelectorAll(className);
    const title = "title";
    const alt = "alt";
    for (let i = htaElem.length; i--; i === 0) {
      htaElem[i].addEventListener("mouseover", () => {
        if (htaElem[i].hasAttribute(title)) {
          htaElem[i].setAttribute(
            `data-${title}`,
            htaElem[i].getAttribute(title)
          );
          htaElem[i].removeAttribute(title);
        }
        if (htaElem[i].hasAttribute(alt)) {
          htaElem[i].setAttribute(`data-${alt}`, htaElem[i].getAttribute(alt));
          htaElem[i].removeAttribute(alt);
        }
      });
      htaElem[i].addEventListener("mouseout", () => {
        if (htaElem[i].hasAttribute(`data-${title}`)) {
          htaElem[i].setAttribute(
            title,
            htaElem[i].getAttribute(`data-${title}`)
          );
          htaElem[i].removeAttribute(`data-${title}`);
        }
        if (htaElem[i].hasAttribute(`data-${alt}`)) {
          htaElem[i].setAttribute(alt, htaElem[i].getAttribute(`data-${alt}`));
          htaElem[i].removeAttribute(`data-${alt}`);
        }
      });
    }
  };

  clearAltTitle(".js-hta");

  let wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
    callback: function (box) {},
    scrollContainer: null
  });
  wow.init();
};

// Scrollbar.addListener(({ offset }) => {
//   console.log(offset);
//   // console.log( document.querySelector('#my-element').getBoundingClientRect().top ); // my element distance from top
// });

// Scrollbar.addListener(({ offset }) => {
//   console.log("offset.y- ", offset.y);
//   console.log(
//     "-",
//     document.querySelector("#my-element").getBoundingClientRect().top
//   );
// });

// const Scrollbar = window.Scrollbar;

// Scrollbar.init(document.querySelector(".js-smooth-scrollbar"));

// const tl = gsap.timeline(),
//   mySplitText = new SplitText(".js-gsap-txt", { type: "lines" }),
//   lines = mySplitText.lines;

// gsap.set(".js-gsap-txt", { perspective: 400 });

// tl.from(
//   lines,
//   {
//     duration: 1.5,
//     opacity: 0,
//     y: 60,
//     rotationX: -90,
//     transformOrigin: "0% 50% -50",
//     ease: "power3.out",
//     stagger: 0.15
//   },
//   "+=0"
// );

// gsap.registerPlugin(SplitText);

// const mySplitText2 = new SplitText(".js-typo-intro-2", {
//   type: "words,chars"
// });

// const tl2 = gsap.timeline();

// tl2.set(".js-typo-intro-2", { perspective: 400 }).from(mySplitText2.chars, {
//   duration: 0.8,
//   opacity: 0,
//   scale: 0,
//   y: 80,
//   rotationX: 180,
//   transformOrigin: "0% 50% -50%",
//   ease: "back",
//   stagger: 0.01
// });

// const restart = () => {
//   tl.restart();
// };
