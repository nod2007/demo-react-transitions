import {TweenMax, TimelineMax, Power2, Power3} from 'gsap';

export const openSelector = (targets) => {

	new TimelineMax()
	.add([
		TweenMax.to(targets.bg, 0.4, {
			autoAlpha: 1,
			display: 'block'
		}),

		TweenMax.fromTo(targets.ddlCont, 0.4, {
			autoAlpha: 0,
			scale: 0.9,
			y: 10
		},{
			autoAlpha: 1,
			scale: 1,
			y: 0,
			delay: 0.1,
			transformOrigin: 'center center 0px',
			display: 'block',
			ease: Power3.easeInOut
		}),

		TweenMax.staggerFromTo(targets.ddlItem, 0.5, {
			y: 10,
			opacity: 0
		},{
			y: 0,
			opacity: 1,
			delay: 0.1,
			ease: Power2.easeInOut,
			clearProps: 'all'
		}, 0.1)
	])
}


export const closeSelector = (targets) => {

	new TimelineMax()
	.add([
		TweenMax.to(targets.bg, 0.4, {
			autoAlpha: 0,
			display: 'none'
		}),
		TweenMax.to(targets.ddlCont, 0.4, {
			autoAlpha: 0,
			ease: Power3.easeInOut
		})
	])
}