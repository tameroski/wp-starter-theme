(function( root, $, undefined ) {
	"use strict";

	$(function () {
		$("#scene").animsition({
		    inClass: "fade-in-down",
		    outClass: "fade-out-up",
		    inDuration: 1500,
		    outDuration: 800,
		    linkElement: "a:not([target=\"_blank\"]):not([href^=\"#\"])",
		    loading: false,
		    timeout: false,
		    overlay : true,
		    overlayClass : "animsition-overlay-slide",
		    overlayParentElement : "body",
		});
	});

} ( this, jQuery ));