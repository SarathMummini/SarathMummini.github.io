(function($) {
	"use strict";

	$(document).ready(function() {
		// ====================================================================
		// Navbar position
		if( $('#slider-container').size() ) {
			$(window).scroll(function(){
				if ($(this).scrollTop() > $(window).height()) {
					$('.navbar').addClass('fixed');
					$('body').css('padding-top', '50px');
				} else {
					$('.navbar').removeClass('fixed');
					$('body').css('padding-top', '0');
				}
			});
		}

		$(".dropdown-menu a, .navbar-nav > li > a").not(".navbar-nav > li.dropdown > a").click(function() {
			if( $(window).width() < 769 ) {
		    	$('.navbar-toggle').click();
			}
		});
		// ====================================================================
		// Fun Facts
		function funFactsHeight() {
			$('.fact-item').each(function(){
				var height = $(this).width();
				$(this).height(height);
			});
		}

		funFactsHeight();

		$(window).resize(function(){
			funFactsHeight();
		});

		// ====================================================================
		// Fun Facts Counter

		var flag = 0;

	    $(window).scroll(function() {
	        if (flag == 1){
	           return false;
	        }
	        else{
	           var bh = $(window).height();
	           var st = $(window).scrollTop();
	           var el = $('.timer');
	           var eh = el.height();
	           if ( st >= (100 + eh) - bh ) {
	               el.countTo({
	                   speed: 2000,
	                   refreshInterval: 20
	               });
	           }
	           flag = 1;
	        }
	    });

		// ====================================================================

		// Countdown

		var currentDate = new Date();
		var weddingDate = $('#slider-container').attr('data-date');
		weddingDate = new Date( weddingDate );
		if( currentDate < weddingDate ) {
			$(".countdown").countdown({
				until: weddingDate,
				format: 'ODHMS'
			});
		} else {
			$(".countdown").countdown({
				since: weddingDate,
				format: 'ODHMS'
			});
		}

		// ====================================================================

		// Fancybox

		$('.gallery').each(function(){
			var uid = Math.floor(Math.random() * 100);
			$('a', this).attr('rel', 'gallery-' + uid);
		});

		$('.gallery a').fancybox({
			openEffect: 'none'
		});

		// ====================================================================

		// Superslides

		var pause = parseInt( $('#slides').attr('data-pause') );
		var speed = parseInt( $('#slides').attr('data-speed') );

		var height = parseInt( $('#slider-container').attr('data-height') );

		var admin_bar_height = parseInt( $('#wpadminbar').height() );

		if( !height ) {
			height = 100;
		}

		sliderHeight();
		$(window).resize(function(){
			sliderHeight();
		});
        
        easy_background(".tint", {
            slide: ["images/home/19.JPG", "images/home/20.JPG", "images/home/21.JPG"],
            delay: [5000, 5000, 5000]
        });

//		$('#slides').superslides({
//			play: pause,
//			animation_speed: speed,
//			animation: 'fade',
//			pagination: false,
//			inherit_height_from: $('#slider-container')
//		});

		function sliderHeight() {

			var win_height = $(window).height();
			var slider_height = win_height * height / 100;

			$('#slider-container').height(slider_height);
            $('#map').height(win_height - 50);

		}

		$('#slider-container').css( 'margin-top', -admin_bar_height );

		// ====================================================================

		// Menu Item Activation

		$('.navbar-collapse a').each(function(){

			var location = window.location.toString();
			var url = $(this).attr('href');
			var hash = url.substring( url.indexOf('#') );
			var clean_url = url.replace(hash, '');

			if( location === hash ) hash = '#top';

			if( location = clean_url ) $(this).attr('data-target', hash);

		});

		$('body').scrollspy({
			target: '.navbar-collapse',
			offset: 50
		})

		$('[data-spy="scroll"]').each(function () {
			var $spy = $(this).scrollspy('refresh');
		});


		// ====================================================================

		// Smooth Scroll on Menu Click

		var navbarHeight = $('.navbar').outerHeight();

		$('.navbar-nav li a').not('.navbar-nav a[href="#"]').on("click",function(){
			var t= $(this.hash);
			var t=t.length&&t||$('[name='+this.hash.slice(1)+']');
			if(t.length){
				var tOffset=t.offset().top - navbarHeight;
				$('html,body').animate({scrollTop:tOffset},'slow');
				return false;
			}
		});

		$(window).on("load", function(event) {
			$( window.location.hash ).scroll();
		});


		$('.form-submit input[type="submit"]').addClass('btn btn-primary btn-lg');
		$('.post-nav-links a').addClass('btn btn-primary');
        
        //=======================================================================
        window.sr = ScrollReveal();
        //origin -- 'bottom', 'left', 'top', 'right'
        //duration -- // Time in milliseconds.
        //rotate -- Starting angles in degrees, will transition from these values to 0 in all axes.
        //opacity -- Starting opacity value, before transitioning to the computed opacity.
        //scale -- Starting scale value, will transition from this value to 1
        //easing -- Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.
        //reset -- true:  reveals occur every time elements become visible
        //reset -- false: reveals occur once as elements become visible
        //useDelay: 'always', // 'always' — delay for all reveal animations
        // 'once'   — delay only the first time reveals occur
        // 'onload' - delay only for animations triggered by first load
        // viewFactor -- Change when an element is considered in the viewport. The default value
            // of 0.20 means 20% of an element must be visible for its reveal to occur.
        sr.reveal('.reveal-heading', {origin: 'bottom',distance: '30px',duration: 500, delay: 100, opacity: 0, scale: 1, mobile: true, reset: true, useDelay: 'always', viewFactor: 0.3});
        sr.reveal('.about-reveal-pooja', {origin: 'bottom',distance: '30px',duration: 300, delay: 100, opacity: 0, scale: 0.3, mobile: true, reset: true, useDelay: 'always', viewFactor: 0.3});
        sr.reveal('.about-reveal-sarath', {origin: 'bottom',distance: '30px',duration: 300, delay: 100, opacity: 0, scale: 0.3, mobile: true, reset: true, useDelay: 'always', viewFactor: 0.3});
        sr.reveal('.story-reveal-one', {origin: 'left',distance: '20px',duration: 500, delay: 500, opacity: 0, scale: 1, mobile: true, reset: false, useDelay: 'always', viewFactor: 0.5});
        sr.reveal('.story-reveal-two', {origin: 'bottom',distance: '20px',duration: 500, delay: 500, opacity: 0, scale: 1, mobile: true, reset: false, useDelay: 'always', viewFactor: 0.5});
        sr.reveal('.story-reveal-three', {origin: 'right',distance: '20px',duration: 500, delay: 500, opacity: 0, scale: 1, mobile: true, reset: false, useDelay: 'always', viewFactor: 0.5});
        sr.reveal('.people-reveal-right', {origin: 'right',distance: '30px',duration: 500, delay: 500, opacity: 0, scale: 1, mobile: true, reset: false, useDelay: 'always', viewFactor: 0.2});
        sr.reveal('.people-reveal-left', {origin: 'left',distance: '30px',duration: 500, delay: 500, opacity: 0, scale: 1, mobile: true, reset: false, useDelay: 'always', viewFactor: 0.2});
        sr.reveal('.home-reveal-maintext', {origin: 'top',distance: '30px',duration: 500, delay: 1200, opacity: 0, scale: 1, mobile: true, reset: true, useDelay: 'always', viewFactor: 0.2});
        sr.reveal('.home-reveal-bottomtext', {origin: 'bottom',distance: '30px',duration: 500, delay: 1500, opacity: 0, scale: 1, mobile: true, reset: true, useDelay: 'always', viewFactor: 0.2});
	});
})(jQuery);