import {TimelineMax, Power2} from 'gsap';

export function fadeOut(opt) {

    return new Promise(resolve => new TimelineMax({
        onComplete: () => setTimeout(() => {
            resolve(opt);
        }, 50)
    })
        .fromTo(opt, 1.2, {
            scaleX: 0
        }, {
			scaleX: 1,
			transformOrigin: 'left',
			ease: Power2.easeInOut
		})
		.fromTo(opt, 0.9, {
            xPercent: 0
        }, {
			xPercent: 100,
			ease: Power2.easeInOut
		})
    );
}


