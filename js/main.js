$(function(){

	'use strict';

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#connect-loader').length > 0) {
				$('#connect-loader').removeClass('show');
			}
		}, 1);
	};
	loader();


	var controller = new ScrollMagic.Controller(),
		tl = new TimelineLite(),
		tl2 = new TimelineLite();

	tl2 
		.from('.connect-device-vertical-1', 1, {  x: -100, autoAlpha: 0, ease: Power4.easeOut } )
		.staggerFrom('.connect-cover .connect-stagger', 1, { autoAlpha: 0, x: -100, scale: 0.95, delay: 0.2, ease: Power4.easeOut}, 0.2 , '-=.8')
		

	var scene = new ScrollMagic.Scene({
		triggerElement: '.connect-scene-0',
		reverse: false
		// offset: 500
	})
	.setTween(tl2)
	// .addIndicators({name: "scene 1", colorEnd: "#F6A623"})
	.addTo(controller);


	tl
		.from('.connect-device-center', .5, { autoAlpha: 0, y: 100, ease: Power4.easeIn }, )
		.from('.connect-device-left', .5, { autoAlpha: 0, x: 200, delay: .2, ease: Power4.easeIn }, '-=.5' )
		.from('.connect-device-right', .5, { autoAlpha: 0, x: -200,  delay: .2, ease: Power4.easeIn }, '-=.7')

	var scene = new ScrollMagic.Scene({
		triggerElement: '.connect-scene-1',
		reverse: false
		// offset: 500
	})
	.setTween(tl)
	// .addIndicators({name: "scene 1", colorEnd: "#F6A623"})
	.addTo(controller);




});