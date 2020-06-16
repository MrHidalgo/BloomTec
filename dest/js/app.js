"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

	var btn = document.querySelector("[hamburger-js]"),
	    closeBtn = document.querySelector('[mobile-close-js]'),
	    hideScrollContainer = document.querySelectorAll("html, body"),
	    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
  */
	if (btn) {
		btn.addEventListener("click", function (ev) {
			var elem = ev.currentTarget;

			elem.classList.add("is-active");
			mobileContainer.classList.add("is-open");

			hideScrollContainer.forEach(function (val, idx) {
				val.classList.add("is-hideScroll");
			});
		});
		closeBtn.addEventListener("click", function (ev) {
			btn.classList.remove("is-active");
			mobileContainer.classList.remove("is-open");

			hideScrollContainer.forEach(function (val, idx) {
				val.classList.remove("is-hideScroll");
			});
		});
	}
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {

	var portfolioSlider = new Swiper('.portfolioSlider', {
		freeMode: false,
		effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
		speed: 750,
		slidesPerView: 'auto',
		spaceBetween: 0,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	});
};

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * =============================================
 * CALLBACK :: start
 * ============================================= */
	var footerLinkToggle = function footerLinkToggle() {
		$('[footer-link-js]').on('click', function (ev) {
			$(ev.currentTarget).toggleClass('is-active');
			$(ev.currentTarget).siblings('[footer-wrapper-js]').slideToggle(350).css({ display: 'flex' });
		});
	};

	var inputFocusAnimate = function inputFocusAnimate() {
		var inputElem = $("[input-js]");

		inputElem.on("focus", function (e) {
			var curElem = $(e.target);

			curElem.closest(".footer__form-field").addClass("is-focus");
		});

		inputElem.on("blur", function (e) {
			var curElem = $(e.target),
			    curElemVal = curElem.val().trim();

			if (curElemVal === "") {
				curElem.closest(".footer__form-field").removeClass("is-focus");
			}
		});
	};

	var menuToggle = function menuToggle() {
		$('[menu-toggle-js]').on('click', function (ev) {
			$('#menu').slideToggle();
			$('html, body').toggleClass('is-hideScroll');
		});
	};

	var scrollToTop = function scrollToTop() {
		$('[scroll-top-js]').on('click', function (ev) {
			$('body, html').animate({
				scrollTop: 0
			}, 1000);
		});
	};
	/*
 * CALLBACK :: end
 * ============================================= */

	/**
  * @name initNative
  *
  * @description Init all method
  */
	var initNative = function initNative() {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initSwiper();
		initHamburger();
		// ==========================================

		// callback
		footerLinkToggle();
		inputFocusAnimate();
		menuToggle();
		scrollToTop();
		// ==========================================
	};
	initNative();
})();