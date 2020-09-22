console.clear();

const { gsap } = window;

const imageTl = gsap.timeline({
  defaults: {
    duration: 0.6,
    ease: "expo.out",
  },
  paused: true,
});

const lineTl = gsap.timeline({
  defaults: {
    delay: .2,
    duration: 1,
    stagger: 0.1,
    ease: "expo.out",
  },
  onStart: () => {
    gsap.set("body", {
      autoAlpha: 1,
    });
  },
  onComplete: () => {
    imageTl.play();
  },
});

imageTl
  .from(".image--item .image--item__slide", {
    scaleX: 0,
    transformOrigin: "left",
  })
  .set(".image--item .image", { opacity: 1 })
  .to(".image--item .image--item__slide", {
    delay: 0.2,
    scaleX: 0,
    transformOrigin: "right",
  });

lineTl
  .from(".line .line--text", {
    yPercent: 150,
    skewY: 6,
  })
  .to(".line .line--text", {
    yPercent: -150,
    skewY: -5,
  });
