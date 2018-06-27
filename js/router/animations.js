
import {TweenLite, TweenMax} from 'gsap';

const completeCall = target => {
	TweenLite.set(target, { clearProps: "position, width" });
};


export const enterAnimation = (targets) => {

	// first kill all tweens of the target
	TweenMax.killTweensOf(targets);
	
	const parent = targets.parentNode;
	const targetWidth = parent.clientWidth - parseFloat(getComputedStyle(targets.parentNode).paddingLeft) * 2;

	// set the position and properties of the entering element
	TweenLite.set(targets, {
		position: "fixed",
		x: 100,
		autoAlpha: 0,
		width: targetWidth
	});
	// animate in the element
	TweenLite.to(targets, 0.5, {
		autoAlpha: 1,
		x: 0,
		onComplete: completeCall,
		onCompleteParams: [targets]
	});

}


export const leaveAnimation = (targets) => {
	// first kill all tweens of the target
	TweenMax.killTweensOf(targets);
	const parent = targets.parentNode;
	const targetWidth = parent.clientWidth - parseFloat(getComputedStyle(targets.parentNode).paddingLeft) * 2;

	// set the position of the element
	TweenLite.set(targets, {
		position: "fixed",
		width: targetWidth
	});
	// animate out the element
	TweenLite.to(targets, 0.5, {
		position: "fixed",
		opacity: 0,
		x: -100
	});
	
}