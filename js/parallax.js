gsap.registerPlugin(ScrollTrigger);

const timeline4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".tigger_Parallax",
    start: "top top",
    end: "+=10000 top",

    scrub: true,
    pin: true,
    duration: 4,
  },
});

timeline4.fromTo(
  ".panation_1",
  { scale: 0, opacity: 1 },
  { scale: 10, opacity: 0, duration: 4 }
);
timeline4.fromTo(
  ".panation_2",
  { scale: 0, opacity: 1 },
  { scale: 10, opacity: 0, duration: 4 }
);
timeline4.fromTo(
  ".panation_3",
  { scale: 0, opacity: 1 },
  { scale: 10, opacity: 0, duration: 4 }
);
timeline4.fromTo(
  ".panation_4",
  { scale: 0, opacity: 1 },
  { scale: 10, opacity: 0, duration: 4 }
);
timeline4.fromTo(
  ".panation_5",
  { scale: 0, opacity: 1 },
  { scale: 10, opacity: 0, duration: 4 }
);
timeline4.fromTo(
  ".panation_6",
  { scale: 0, opacity: 1 },
  { scale: 10, opacity: 0, duration: 4 }
);
timeline4.fromTo(
  ".panation_7",
  { scale: 0, opacity: 1 },
  { scale: 10, opacity: 0, duration: 4 }
);
timeline4.fromTo(
  ".panation_8",
  { scale: 0, opacity: 1 },
  { scale: 10, opacity: 0, duration: 4 }
);
timeline4.fromTo(
  ".panation_9",
  { scale: 0, opacity: 1 },
  { scale: 10, opacity: 0, duration: 4 }
);
