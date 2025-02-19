gsap.registerPlugin(ScrollTrigger);

const timeline3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".birthday_text",
    start: "top top",
    end: "+=50 top",

    scrub: true,
    pin: true,
    duration: 4,
  },
});
