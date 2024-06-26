import gsap from "gsap";


const tl = gsap.timeline({defaults: {ease: "power1.out"}});

export const preLoaderAnim = () => {
    tl.to("body", {
        duration: 0.1,
        css: {overflowY: "hidden"},
        ease: "power3.inOut",
    })
        .to(".landing", {
            duration: 0.05,
            css: {overflowY: "hidden", height: "90vh"},
        })
        .to(".texts-container", {
            duration: 0,
            opacity: 1,
            ease: "Power3.easeOut",
        })
        .from(".texts-container span", {
            duration: 1.5,
            delay: 1,
            y: 70,
            skewY: 10,
            stagger: 0.4,
            ease: "Power3.easeOut",
        })
        .to(".texts-container span", {
            duration: 1,
            y: 90,
            skewY: -20,
            stagger: 0.2,
            ease: "Power3.easeOut",
        })

        .to(".landing", {
            duration: 0.05,
            css: {overflowY: "hidden", height: "unset"},
        })
        .to("body", {
            duration: 0.1,
            css: {overflowY: "scroll"},
            ease: "power3.inOut",
        })
        .from(".landing__top .sub", {
            duration: 1,
            opacity: 0,
            y: 80,
            ease: "expo.easeOut",
        })
        .to(
            ".preloader",
            {
                duration: 1.5,
                height: "0vh",
                ease: "Power3.easeOut",
                onComplete: mobileLanding(),
            },
            "-=2"
        )
        .to(".preloader", {
            duration: 0,
            css: {display: "none"},
        });
};



export const mobileLanding = () => {
    window.innerWidth < 763 &&
    tl.from(".landing__main2", {
        duration: 1,
        delay: 0,
        opacity: 0,
        y: 80,
        ease: "expo.easeOut",
    });
};


export const fadeIn = (el) => {
    gsap.to(el, {
        duration: 2,
        opacity: 1,
        y: -60,
        ease: "power4.out",
    });
};

export const fadeOut = (el) => {
    gsap.to(el, {
        duration: 1,
        opacity: 0,
        y: -20,
        ease: "power4.out",
    });
};
