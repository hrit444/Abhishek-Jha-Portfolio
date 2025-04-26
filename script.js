function revealSpanCreator() {
  let reveal = document.querySelectorAll(".reveal");
  reveal.forEach((elem) => {
    let parent = document.createElement("span");
    let child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}

function valueSetters() {
  gsap.set("nav a", { y: "-100%", opacity: 0 });
  gsap.set(".home .parent .child", { y: "100%" });
  gsap.set(".home .row img", { opacity: 0, scale: 0.5 });

  document.querySelectorAll("#Visual>g").forEach(function (elem) {
    let char = elem.childNodes[1].childNodes[1];
    char.style.strokeDasharray = char.getTotalLength() + "px";
    char.style.strokeDashoffset = char.getTotalLength() + "px";
  });
}

function loaderAnimation() {
  var tl = gsap.timeline();
  tl.from(".loader .child span", {
    x: 100,
    duration: 1,
    stagger: 0.2,
    ease: Power3.easeInOut,
  })
    .to(".loader .parent .child", {
      y: "-100%",
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to(".loader", {
      height: 0,
      duration: 0.8,
      ease: Circ.easeInOut,
    })
    .to(".green-sec", {
      // display: "block",
      height: "100%",
      top: 0,
      // bottom: "100%",
      duration: .8,
      delay: -.8,
      ease: Circ.easeInOut,
    })
    .to(".green-sec", {
      height: 0,
      duration: .4,
      delay: -.3,
      ease: Circ.easeInOut,
      beComplete: function () {
        homePageAnimation();
      },
    });
}

function animateSvg() {
  gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
    strokeDashoffset: 0,
    duration: .75,
    stagger: 0.35,
    delay: .5,
    ease: Expo.easeInOut,
  });
}

function homePageAnimation() {
  let tl = gsap.timeline();
  tl.to("nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    delay: .6,
    ease: Expo.easeInOut,
  })
  .to(".home .parent .child", {
    y: 0,
    duration: 1.4,
    stagger: 0.04,
    ease: Expo.easeInOut,
  })
  .to(".home .row img", {
    opacity: 1,
    scale: 1.1,
    duration: .8,
    delay: -.3,
    ease: Expo.easeInOut,
    beComplete: function () {
      animateSvg();
    },
  })
}

let locoInstance;

function locomotive() {
  locoInstance = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
  });
}

function vwToPx(vw) {
  return (vw / 100) * window.innerWidth;
}

function projectHoverEffect() {
  document.querySelectorAll(".cont").forEach(function (elem) {
    let image;

    elem.addEventListener("mousemove", function (dets) {
      image = dets.target;
      const cursorImg =
        document.querySelector(".cursor").children[image.dataset.index];
      const clientX = dets.clientX;
      const clientY =
        dets.clientY +
        (locoInstance ? locoInstance.scroll.instance.scroll.y : window.scrollY);

      document.querySelector(".cursor").style.opacity = 1;

      document.querySelectorAll(".cursor .s").forEach((img, i) => {
        img.style.opacity = i == image.dataset.index ? 1 : 0;
      });

      let offsetX = -vwToPx(5.5);
      let offsetY = -vwToPx(162);

      cursorImg.style.transform = `translate(${clientX + offsetX}px, ${
        clientY + offsetY
      }px)`;

      elem.style.filter = "grayscale(1)";
      document.querySelector(".work").style.backgroundColor =
        image.dataset.color;
    });

    elem.addEventListener("mouseleave", function () {
      elem.style.filter = "grayscale(0)";
      document.querySelector(".cursor").style.opacity = 0;
      document.querySelector(".work").style.backgroundColor = "#F2F2F2";

      document.querySelectorAll(".cursor .s").forEach(function (img) {
        img.style.opacity = 0;
      });
    });
  });
}

// function imgRotateAnimation(){
//   gsap.to(".img1", {
//     rotate: "-10deg",
//     duration: 1,
//     scrollTrigger: {
//       trigger: ".img1",
//       scroller: "body",
//       start: "top 60%",
//       end: "top 45%",
//       markers: true,
//       scrub: 2
//     }
//   })
//   gsap.to(".img2", {
//     rotate: "-5deg",
//     duration: 1,
//     scrollTrigger: {
//       trigger: ".img1",
//       scroller: "body",
//       start: "top 60%",
//       end: "top 45%",
//       markers: true,
//       scrub: 2
//     }
//   })
//   gsap.to(".img3", {
//     rotate: "0deg",
//     duration: 1,
//     scrollTrigger: {
//       trigger: ".img1",
//       scroller: "body",
//       start: "top 60%",
//       end: "top 45%",
//       markers: true,
//       scrub: 2
//     }
//   })
//   window.addEventListener('DOMContentLoaded', imgRotateAnimation);
// }

revealSpanCreator();
valueSetters();
loaderAnimation();
// homePageAnimation()
projectHoverEffect();
locomotive();
// imgRotateAnimation()