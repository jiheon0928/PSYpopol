gsap.registerPlugin(ScrollTrigger, TextPlugin);

const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: `.sopsyety`,
    markers: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pin: true,
    // pinSpacing: true,
  },
});
