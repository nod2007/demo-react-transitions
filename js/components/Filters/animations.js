import {TweenMax, TimelineMax} from 'gsap';



export const enterAnimation = (opt) => {
	const items = opt;

	return new Promise(resolve => new TimelineMax({
			onComplete: () => setTimeout(() => {
				resolve(opt);
			}, 50)
		})
		.add([
			TweenMax.fromTo(items.firstRow, 0.35, {
				y: 30,
				opacity: 0
			},{
				y: 0,
				opacity: 1,
				delay: 0,
				clearProps: 'all'
			}),
			TweenMax.fromTo(items.secondRow, 0.35, {
				y: 30,
				opacity: 0
			},{
				y: 0,
				opacity: 1,
				delay: 0.1,
				clearProps: 'all'
			}),
			TweenMax.fromTo(items.secondRow2, 0.35, {
				y: 30,
				opacity: 0
			},{
				y: 0,
				opacity: 1,
				delay: 0.2,
				clearProps: 'all'
			}),
			TweenMax.fromTo(items.thirdRow, 0.35, {
				y: 30,
				opacity: 0
			},{
				y: 0,
				opacity: 1,
				delay: 0.3,
				clearProps: 'all'
			}),
			TweenMax.fromTo(items.button, 0.35, {
				y: 30,
				opacity: 0
			},{
				y: 0,
				opacity: 1,
				delay: 0.5,
				clearProps: 'all'
			})
		])
	)
}

export const leaveAnimation = (opt) => {
	const items = opt;

	return new Promise(resolve => new TimelineMax({
		onComplete: () => setTimeout(() => {
			resolve(opt);
		}, 50)
	})
	.add([
		
		TweenMax.staggerFromTo(items,  0.5 , {
			x: 0,
			opacity: 1
		},{
			x: -100,
			opacity: 0,
			clearProps: 'all'
		}, 0.15)
	])
)
}