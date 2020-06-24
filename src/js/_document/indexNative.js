/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const footerLinkToggle = () => {
		$('[footer-link-js]').on('click', (ev) => {
			$(ev.currentTarget).toggleClass('is-active');
			$(ev.currentTarget).siblings('[footer-wrapper-js]').slideToggle(350).css({display: 'flex'});
		});
	};


	const inputFocusAnimate = () => {
		const inputElem = $("[input-js]");

		inputElem.on("focus", (e) => {
			let curElem = $(e.target);

			curElem.closest(".footer__form-field").addClass("is-focus");
		});

		inputElem.on("blur", (e) => {
			let curElem = $(e.target),
				curElemVal = curElem.val().trim();

			if(curElemVal === "") {
				curElem.closest(".footer__form-field").removeClass("is-focus");
			}
		});
	};


	const menuToggle = () => {
		$('[menu-toggle-js]').on('click', (ev) => {
			$('#menu').slideToggle();
			$('html, body').toggleClass('is-hideScroll');
		});
	};


	const scrollToTop = () => {
		$('[scroll-top-js]').on('click', (ev) => {
			$('body, html').animate({
				scrollTop: 0
			}, 1000);
		});
	};


	const lazyLoadMedia = () => {
		document.addEventListener("DOMContentLoaded", function() {
			let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
			let active = false;

			const lazyLoad = function() {
				if (active === false) {
					active = true;

					setTimeout(function() {
						lazyImages.forEach(function(lazyImage) {
							if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
								lazyImage.src = lazyImage.dataset.src;
								lazyImage.srcset = lazyImage.dataset.srcset;
								lazyImage.classList.remove("lazy");

								lazyImages = lazyImages.filter(function(image) {
									return image !== lazyImage;
								});

								if (lazyImages.length === 0) {
									document.removeEventListener("scroll", lazyLoad);
									window.removeEventListener("resize", lazyLoad);
									window.removeEventListener("orientationchange", lazyLoad);
								}
							}
						});

						active = false;
					}, 200);
				}
			};

			document.addEventListener("scroll", lazyLoad);
			window.addEventListener("resize", lazyLoad);
			window.addEventListener("orientationchange", lazyLoad);
		});

		document.addEventListener("DOMContentLoaded", function() {
			var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

			if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
				let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
					entries.forEach(function(entry) {
						if (entry.isIntersecting) {
							entry.target.classList.add("visible");
							lazyBackgroundObserver.unobserve(entry.target);
						}
					});
				});

				lazyBackgrounds.forEach(function(lazyBackground) {
					lazyBackgroundObserver.observe(lazyBackground);
				});
			}
		});
	};


	const viewPortAnimation = () => {
		AOS.init({
			offset: 120, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 700, // values from 0 to 3000, with step 50ms
			easing: 'ease-in-out', // default easing for AOS animations
			once: false, // whether animation should happen only once - while scrolling down
			mirror: false, // whether elements should animate out while scrolling past them
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
	const initNative = () => {
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
		lazyLoadMedia();
		viewPortAnimation();
		// ==========================================
	};

	$(window).on('load', (ev) => {
		initNative();
	});
})();
