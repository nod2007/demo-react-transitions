import {TweenMax, TimelineMax} from 'gsap';

export const enterAnimation = (opt) => {
	const items = opt;

	return new Promise(resolve => new TimelineMax({
			onComplete: () => setTimeout(() => {
				resolve(opt);
			}, 50)
		})
		.add([
			TweenMax.staggerFromTo(items, 0.5, {
				xPercent: 100,
				opacity: 0
			},{
				xPercent: 0,
				opacity: 1
			}, 0.1)
		])
	)
}

export const leaveAnimation = (opt) => {
	const items = opt;
	console.log(opt);
	return new Promise(resolve => new TimelineMax({
		onComplete: () => setTimeout(() => {
			resolve(opt);
		}, 50)
	})
	.add([
		
		TweenMax.staggerFromTo(items,  0.5 , {
			xPercent: 0,
			opacity: 1
		},{
			xPercent: -100,
			opacity: 0
		}, 0.1)
	])
)
}