function loco() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        lerp: 0.08, // Added lerp property to control the inertia (value between 0 and 1)
        smoothMobile: true, // Added smoothMobile property to enable smooth scrolling on mobile devices
        // Added multiplier property to adjust the scrolling speed (default is 1)
         multiplier: 1.05 // Added multiplier property to adjust the scrolling speed (default is 1)
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

loco();

// PAGE 1
var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: `#page1`,
        start: `top top`,
        scrub: 1,
        scroller: `#main`,
        end: `+=2400`,
        pin: true
    }
});

tl1.to("#page1>#appearing-div", {
    top: `-110%`,
});

gsap.to("#page1>.black-div", {
    scrollTrigger: {
        trigger: `#page1>#appearing-div`,
        start: `top 73%`,
        end: `bottom top`,
        scrub: 1,
        scroller: `#main`,
        onEnter: () => gsap.to("#page1>.black-div", { backgroundColor: '#0000008f', duration: 1, ease: 'power1.inOut' }),
        onLeave: () => gsap.to("#page1>.black-div", { backgroundColor: 'initial', duration: 1, ease: 'power1.inOut' }),
        onEnterBack: () => gsap.to("#page1>.black-div", { backgroundColor: '#0000008f', duration: 1, ease: 'power1.inOut' }),
        onLeaveBack: () => gsap.to("#page1>.black-div", { backgroundColor: 'initial', duration: 1, ease: 'power1.inOut' })
    }
});

// PAGE 3
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: `#page3`,
        start: `top top`,
        scrub: 1.5,
        scroller: `#main`,
        pin: true
    }
});

tl3.to("#page3>#appearing-div", {
    top: `-35%`,
});

gsap.to("#page3>.black-div", {
    scrollTrigger: {
        trigger: `#page3>#appearing-div`,
        start: `top 73%`,
        end: `bottom top`,
        scrub: 1,
        scroller: `#main`,
        onEnter: () => gsap.to("#page3>.black-div", { backgroundColor: '#0000008f', duration: 1, ease: 'power1.inOut' }),
        onLeave: () => gsap.to("#page3>.black-div", { backgroundColor: 'initial', duration: 1, ease: 'power1.inOut' }),
        onEnterBack: () => gsap.to("#page3>.black-div", { backgroundColor: '#0000008f', duration: 1, ease: 'power1.inOut' }),
        onLeaveBack: () => gsap.to("#page3>.black-div", { backgroundColor: 'initial', duration: 1, ease: 'power1.inOut' })
    }
});

gsap.to("#page3>video", {
    scrollTrigger: {
        trigger: `#page3>video`,
        start: `bottom 8%`,
        scrub: 2,
        scroller: `#main`,
    },
    scale: 0.95
});

// PAGE 5
var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: `#page5`,
        start: `top top`,
        scrub: 1.5,
        scroller: `#main`,
        pin: true
    }
});

tl5.to("#page5>#appearing-div", {
    top: `-35%`,
});

gsap.to("#page5>.black-div", {
    scrollTrigger: {
        trigger: `#page5>#appearing-div`,
        start: `top 73%`,
        end: `bottom top`,
        scrub: 1,
        scroller: `#main`,
        onEnter: () => gsap.to("#page5>.black-div", { backgroundColor: '#0000008f', duration: 1, ease: 'power1.inOut' }),
        onLeave: () => gsap.to("#page5>.black-div", { backgroundColor: 'initial', duration: 1, ease: 'power1.inOut' }),
        onEnterBack: () => gsap.to("#page5>.black-div", { backgroundColor: '#0000008f', duration: 1, ease: 'power1.inOut' }),
        onLeaveBack: () => gsap.to("#page5>.black-div", { backgroundColor: 'initial', duration: 1, ease: 'power1.inOut' })
    }
});

gsap.to("#page5>video", {
    scrollTrigger: {
        trigger: `#page5>video`,
        start: `bottom 8%`,
        scrub: 2,
        scroller: `#main`,
    },
    scale: 0.95
});

// PAGE 7
var tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: `#page7`,
        start: `top top`,
        scrub: 1.5,
        scroller: `#main`,
        pin: true
    }
});

tl7.to("#page7>#appearing-div", {
    top: `-35%`,
});

gsap.to("#page7>.black-div", {
    scrollTrigger: {
        trigger: `#page7>#appearing-div`,
        start: `top 73%`,
        end: `bottom top`,
        scrub: 1,
        scroller: `#main`,
        onEnter: () => gsap.to("#page7>.black-div", { backgroundColor: '#0000008f', duration: 1, ease: 'power1.inOut' }),
        onLeave: () => gsap.to("#page7>.black-div", { backgroundColor: 'initial', duration: 1, ease: 'power1.inOut' }),
        onEnterBack: () => gsap.to("#page7>.black-div", { backgroundColor: '#0000008f', duration: 1, ease: 'power1.inOut' }),
        onLeaveBack: () => gsap.to("#page7>.black-div", { backgroundColor: 'initial', duration: 1, ease: 'power1.inOut' })
    }
});

gsap.to("#page7>video", {
    scrollTrigger: {
        trigger: `#page7>video`,
        start: `bottom 8%`,
        scrub: 2,
        scroller: `#main`,
    },
    scale: 0.95
});

// PAGE 9
var tl9 = gsap.timeline({
    scrollTrigger: {
        trigger: `#page9`,
        start: `top top`,
        scrub: 1.5,
        scroller: `#main`,
        pin: true
    }
});

tl9.to("#page9>#appearing-div", {
    top: `-35%`,
});

gsap.to("#page9>.black-div", {
    scrollTrigger: {
        trigger: `#page9>#appearing-div`,
        start: `top 73%`,
        end: `bottom top`,
        scrub: 1,
        scroller: `#main`,
        onEnter: () => gsap.to("#page9>.black-div", { backgroundColor: '#0000008f', duration: 1, ease: 'power1.inOut' }),
        onLeave: () => gsap.to("#page9>.black-div", { backgroundColor: 'initial', duration: 1, ease: 'power1.inOut' }),
        onEnterBack: () => gsap.to("#page9>.black-div", { backgroundColor: '#0000008f', duration: 1, ease: 'power1.inOut' }),
        onLeaveBack: () => gsap.to("#page9>.black-div", { backgroundColor: 'initial', duration: 1, ease: 'power1.inOut' })
    }
});

gsap.to("#page9>video", {
    scrollTrigger: {
        trigger: `#page9>video`,
        start: `bottom 8%`,
        scrub: 2,
        scroller: `#main`,
    },
    scale: 0.95
});

// PAGE 11
var tl11 = gsap.timeline({
    scrollTrigger: {
        trigger: `#page11`,
        start: `top top`,
        scrub: 1.5,
        scroller: `#main`,
        pin: true
    }
});

tl11.to("#page11>#appearing-div", {
    top: `-35%`,
});

gsap.to("#page11>.black-div", {
    scrollTrigger: {
        trigger: `#page11>#appearing-div`,
        start: `top 73%`,
        end: `bottom top`,
        scrub: 1,
        scroller: `#main`,
        onEnter: () => gsap.to("#page11>.black-div", { backgroundColor: '#0000008f', duration: 1, ease: 'power1.inOut' }),
        onLeave: () => gsap.to("#page11>.black-div", { backgroundColor: 'initial', duration: 1, ease: 'power1.inOut' }),
        onEnterBack: () => gsap.to("#page11>.black-div", { backgroundColor: '#0000008f', duration: 1, ease: 'power1.inOut' }),
        onLeaveBack: () => gsap.to("#page11>.black-div", { backgroundColor: 'initial', duration: 1, ease: 'power1.inOut' })
    }
});

gsap.to("#page11>video", {
    scrollTrigger: {
        trigger: `#page11>video`,
        start: `bottom 8%`,
        scrub: 2,
        scroller: `#main`,
    },
    scale: 0.95
});

// PAGE 13
var tl13 = gsap.timeline({
    scrollTrigger: {
        trigger: `#page13`,
        start: `top top`,
        scrub: 1.5,
        scroller: `#main`,
        pin: true
    }
});

tl13.to("#page13>#appearing-div", {
    top: `-35%`,
});

gsap.to("#page13>.black-div", {
    scrollTrigger: {
        trigger: `#page13>#appearing-div`,
        start: `top 73%`,
        end: `bottom top`,
        scrub: 1,
        scroller: `#main`,
        onEnter: () => gsap.to("#page13>.black-div", { backgroundColor: '#0000008f', duration: 1, ease: 'power1.inOut' }),
        onLeave: () => gsap.to("#page13>.black-div", { backgroundColor: 'initial', duration: 1, ease: 'power1.inOut' }),
        onEnterBack: () => gsap.to("#page13>.black-div", { backgroundColor: '#0000008f', duration: 1, ease: 'power1.inOut' }),
        onLeaveBack: () => gsap.to("#page13>.black-div", { backgroundColor: 'initial', duration: 1, ease: 'power1.inOut' })
    }
});

gsap.to("#page13>video", {
    scrollTrigger: {
        trigger: `#page13>video`,
        start: `bottom 8%`,
        scrub: 2,
        scroller: `#main`,
    },
    scale: 0.95
});

// PAGE 16
function canvas() {
    const canvas = document.querySelector("#page16>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0000.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0001.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0002.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0003.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0004.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0005.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0006.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0007.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0008.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0009.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0010.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0011.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0012.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0013.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0014.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0015.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0016.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0017.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0018.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0019.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0020.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0021.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0022.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0023.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0024.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0025.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0026.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0027.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0028.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0029.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0030.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0031.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0032.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0033.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0034.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0035.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0036.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0037.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0038.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0039.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0040.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0041.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0042.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0043.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0044.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0045.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0046.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0047.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0048.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0049.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0050.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0051.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0052.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0053.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0054.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0055.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0056.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0057.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0058.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0059.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0060.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0061.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0062.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0063.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0064.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0065.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0066.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0067.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0068.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0069.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0070.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0071.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0072.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0073.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0074.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0075.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0076.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0077.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0078.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0079.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0080.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0081.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0082.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0083.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0084.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0085.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0086.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0087.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0088.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0089.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0090.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0091.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0092.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0093.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0094.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0095.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0096.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0097.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0098.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0099.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0100.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0101.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0102.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0103.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0104.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0105.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0106.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0107.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0108.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0109.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0110.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0111.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0112.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0113.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0114.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0115.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0116.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0117.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0118.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0119.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0120.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0121.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0122.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0123.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0124.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0125.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0126.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0127.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0128.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0129.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0130.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0131.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0132.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0133.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0134.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0135.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0136.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0137.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0138.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0139.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0140.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0141.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0142.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0143.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0144.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0145.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0146.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0147.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0148.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0149.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0150.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0151.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0153.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0154.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0155.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0156.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0157.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0158.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0159.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0160.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0161.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0162.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0163.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0164.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0165.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0166.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0167.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0168.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0169.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0170.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0171.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0172.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0173.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0174.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0175.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0176.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0177.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0178.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0179.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0180.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0181.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0182.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0183.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0184.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0185.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0186.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0187.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0188.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0189.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0190.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0191.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0192.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0193.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0194.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0195.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0196.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0197.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0198.jpg
  https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0199.jpg
 `;
        return data.split("\n")[index];
    }

    const frameCount = 198;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: 0.15,
            trigger: `#page16>canvas`,
            //   set start end according to preference
            start: `top top`,
            end: `600% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.min(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({

        trigger: "#page16>canvas",
        pin: true,
        // markers:true,
        scroller: `#main`,
        //   set start end according to preference
        start: `top top`,
        end: `600% top`,
    });
}
canvas();

// PAGE 27
function canvas1() {
    const canvas = document.querySelector("#page27>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
  .//Apple vision canvas images/Vision00001.png
  .//Apple vision canvas images/Vision00002.png
  .//Apple vision canvas images/Vision00003.png
  .//Apple vision canvas images/Vision00004.png
  .//Apple vision canvas images/Vision00005.png
  .//Apple vision canvas images/Vision00006.png
  .//Apple vision canvas images/Vision00007.png
  .//Apple vision canvas images/Vision00008.png
  .//Apple vision canvas images/Vision00009.png
  .//Apple vision canvas images/Vision00010.png
  .//Apple vision canvas images/Vision00011.png
  .//Apple vision canvas images/Vision00012.png
  .//Apple vision canvas images/Vision00013.png
  .//Apple vision canvas images/Vision00014.png
  .//Apple vision canvas images/Vision00015.png
  .//Apple vision canvas images/Vision00016.png
  .//Apple vision canvas images/Vision00017.png
  .//Apple vision canvas images/Vision00018.png
  .//Apple vision canvas images/Vision00019.png
  .//Apple vision canvas images/Vision00020.png
  .//Apple vision canvas images/Vision00021.png
  .//Apple vision canvas images/Vision00022.png
  .//Apple vision canvas images/Vision00023.png
  .//Apple vision canvas images/Vision00024.png
  .//Apple vision canvas images/Vision00025.png
  `;
        return data.split("\n")[index];
    }

    const frameCount = 25;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: 0.15,
            trigger: `#page27`,
            //   set start end according to preference
            start: `top top`,
            end: `80% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({

        trigger: "#page27",
        pin: true,
        // markers:true,
        scroller: `#main`,
        //   set start end according to preference
        start: `top top`,
        end: `80% top`,
    });
}
canvas1();

// PAGE 30
var tl30 = gsap.timeline({
    scrollTrigger: {
        trigger: `#page30>#trk-off`,
        start: `top 45%`,
        end:`bottom 80%`,
        scrub: .3,
        scroller: `#main`,
        // pin: true,
        // markers: true
    }
});

tl30.to("#page30>#trk-off",{opacity: 0,});

// PAGE 31
var tl31 = gsap.timeline({
    scrollTrigger: {
        trigger: `#page31>#sr-off`,
        start: `top 45%`,
        end:`bottom 80%`,
        scrub: .3,
        scroller: `#main`,
        // pin: true,
        // markers: true
    }
});

tl31.to("#page31>#sr-off", {
    opacity: 0,
});

// PAGE 32
var tl32 = gsap.timeline({
    scrollTrigger: {
        trigger: `#page32>#chip`,
        start: `top 90%`,
        end:`bottom 60%`,
        scrub: 1.5,
        scroller: `#main`,
        // pin: true,
        // markers: true
    }
});

tl32.to("#page32>#chip", {
    opacity: 1,
    scale: 1.1
});
