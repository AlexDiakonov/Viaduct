const sliderView = document.querySelector(".view_port");
const slider = document.querySelector(".slider");
const sliderWidth = slider.offsetWidth;
const sliderWrapper = document.querySelector(".slider_wrapper");
const slideWidth = document.querySelector(".slider_item").offsetWidth;
const slidesArr = document.querySelectorAll(".slider_item");
const serviceSection = document.querySelector(".services_section");
const partnerSection = document.querySelector(".parter_section");
const win = window;
const winWidth = win.innerWidth * 0.05;
const progressBar = document.querySelector(".progressBar");

const maxMargin = sliderWidth - sliderView.offsetWidth;
const minMargin = sliderWidth;

const minHeight = slider.offsetWidth * 1.5;
sliderWrapper.style.height = `${minHeight}px`;

function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollBottom = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, bottom: rect.bottom + scrollBottom };
}

var divOffset = offset(sliderWrapper);
const lastPoint = divOffset.top + minHeight;
console.log(divOffset.top, divOffset.top + minHeight);
let currentSlide = 0;

const swipeLeft = () => {
  if (currentSlide <= slidesArr.length - 1) {
    const maxMargin = sliderWidth - sliderView.offsetWidth;
    currentSlide < slidesArr.length - 1
      ? (slider.style.marginLeft = `-${slideWidth * currentSlide}px`)
      : (slider.style.marginLeft = `-${maxMargin}px`);
  }
};

const swipeRight = () => {
  if (currentSlide >= 0) {
    const maxMargin = sliderWidth - sliderView.offsetWidth;
    if (currentSlide === slidesArr.length) {
      console.log("if");
      slider.style.marginLeft = `-${maxMargin}px`;
    } else {
      console.log("else");
      currentSlide--;
      slider.style.marginLeft = `-${slideWidth * currentSlide}px`;
    }
  }
};
let lastScrollTop = 0;
var doc = document.documentElement;

function scrollEvent() {
  // var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  const currentProgress =
    (sliderView.offsetTop /
      (sliderWrapper.offsetHeight - sliderView.offsetHeight)) *
    100;
  currentSl = ((currentProgress / 100) * slidesArr.length)
    .toString()
    .slice(0, 1);
  currentSlide = parseInt(currentSl);
  const barWidth = ((currentProgress / 100) * slidesArr.length)
    .toString()
    .slice(2, 4);
  console.log(currentSlide);
  progressBar.style.width = barWidth + "%";
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    swipeLeft();
  } else if (st <= lastScrollTop) {
    console.log("up");
    swipeRight();
  }
  lastScrollTop = st <= 0 ? 0 : st;
}

let options = {
  threshold: 1,
};
const sliderObserver = new IntersectionObserver(function (entries, observer) {
  const maxMargin = sliderWidth - sliderView.offsetWidth;
  entries.forEach((ent) => {
    if (ent.isIntersecting) {
      window.addEventListener("scroll", scrollEvent);
      if (currentSlide === slidesArr.length) {
        slider.style.marginLeft = `-${maxMargin}px`;
      }
    } else {
      window.removeEventListener("scroll", scrollEvent);
    }
  });
}, options);
sliderObserver.observe(sliderView);

// let trasholdOprtionsForTop = {
//   trashold: 0.5,
// };

// const setSliderToBegin = new IntersectionObserver(function (ent) {
//   ent.forEach((en) => {
//     if (en.isIntersecting) {
//       sliderShouldMoveLeft = false;
//       currentSlide = 0;
//
//     }
//   });
// }, trasholdOprtionsForTop);
// setSliderToBegin.observe(serviceSection);

// let trasholdOptionsForBottom = {
//   trashold: 1,
// };

// const setSliderToEnd = new IntersectionObserver(function (ent) {
//   ent.forEach((en) => {
//
//     if (en.isIntersecting) {
//       console.log("lol");
//       sliderShouldMoveRight = false;
//
//       currentSlide = slidesArr.length - 1;
//     }
//   });
// }, trasholdOptionsForBottom);
// setSliderToEnd.observe(partnerSection);
