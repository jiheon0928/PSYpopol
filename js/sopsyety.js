gsap.registerPlugin(ScrollTrigger, TextPlugin);

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".tigger",
    start: "top top",
    end: "bottom top",

    scrub: true,
    pin: true,
  },
});

const timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".blur",
    start: "top top",
    end: "bottom top",

    scrub: true,
    pin: true,
  },
});

timeline2.fromTo(".blur", { opacity: 0 }, { opacity: 0.9, duration: 4 });
