import {TimelineMax, Power1} from 'gsap';

export function enterAnimation(opt) {

    return new Promise(resolve => new TimelineMax({
        onComplete: () => setTimeout(() => {
            resolve(opt);
        }, 50)
    })
        .fromTo(opt, 0.7, {
            yPercent: -100
        }, {
			yPercent: 0,
			ease: Power1.easeInOut,
			clearProps: 'xPercent'
		})
    );
}

