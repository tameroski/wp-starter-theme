(function( root, $, undefined ) {
	"use strict";

	$(function () {

		// Page transition animation
 		var $body = $("html, body"),
			smoothstate = $("#page").smoothState({
			onStart: {
				duration: 250, // Duration of the page animation
				render: function ($container) {
					$container.addClass("is-exiting");
					smoothstate.restartCSSAnimations("is-exiting");

					$body.animate({
		            	scrollTop: 0
		            });
				}
			},
			onReady: {
				duration: 0,
				render: function ($container, $newContent) {
					$container.removeClass("is-exiting");
					$container.html($newContent);
				}
		    },
		    onAfter: function($container) {
		    	// Plugin can reload here
		    }
		}).data("smoothState");
			
	});

} ( this, jQuery ));