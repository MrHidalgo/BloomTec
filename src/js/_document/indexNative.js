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
		// ==========================================

		// callback
		footerLinkToggle();
		inputFocusAnimate();
		// ==========================================
	};
	initNative();
})();
