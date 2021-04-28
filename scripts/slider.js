const sliderView = document.querySelector(".view_port");
const slider = document.querySelector(".slider");
const sliderCont = document.querySelector(".slider_borders");
// const sliderWidth = slider.offsetWidth;
const sliderWrapper = document.querySelector(".slider_wrapper");

const slidesArr = document.querySelectorAll(".slider_item");
const serviceSection = document.querySelector(".services_section");
const partnerSection = document.querySelector(".parter_section");
const win = window;
const winWidth = win.innerWidth * 0.05;
const progressBar = document.querySelector(".progressBar");

// const sliderWidthCalc = () => {
//   return sliderWidth;
// };
const minHeightCalc = () => {
  const minHeight = slider.offsetWidth;
  return minHeight;
};

const slideWidthApply = () => {
  slidesArr.forEach((slide) => {
    slide.style.width = `${sliderView.offsetWidth * 0.8}px`;
  });
  minHeightCalc();
  const sliderWidth = slider.offsetWidth;
  const minHeight = minHeightCalc();
  const maxMargin = sliderWidth - sliderCont.offsetWidth;
  const slideWidth = sliderView.offsetWidth * 0.8;
  console.log(maxMargin);
  return [sliderWidth, minHeight, maxMargin, slideWidth];
};

slideWidthApply();
// const maxMargin = slideWidthApply()[0] - sliderView.offsetWidth;
// console.log("2", maxMargin);

const minHeight = minHeightCalc();
sliderWrapper.style.height = `${minHeight}px`;

window.addEventListener("resize", slideWidthApply);
function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollBottom = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, bottom: rect.bottom + scrollBottom };
}

var divOffset = offset(sliderWrapper);
const lastPoint = divOffset.top + minHeight;

const swipeLeft = () => {
  if (currentSlide <= slidesArr.length - 1) {
    currentSlide < slidesArr.length - 1
      ? (slider.style.marginLeft = `-${slideWidthApply()[3] * currentSlide}px`)
      : (slider.style.marginLeft = `-${slideWidthApply()[2]}px`);
  }
};

const swipeRight = () => {
  if (currentSlide <= 2) {
    slider.style.marginLeft = `-${slideWidthApply()[3] * currentSlide}px`;
  }
};
let lastScrollTop = 0;
var doc = document.documentElement;

function scrollEvent() {
  const currentProgress =
    (sliderView.offsetTop /
      (sliderWrapper.offsetHeight - sliderView.offsetHeight)) *
    100;
  let currentSl = ((currentProgress / 100) * slidesArr.length)
    .toString()
    .slice(0, 1);
  currentSlide = parseInt(currentSl);
  const barWidth = (currentProgress / 100).toString().slice(2, 4);

  progressBar.style.width = barWidth + "%";
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    swipeLeft();
  } else if (st <= lastScrollTop) {
    swipeRight();
  }
  lastScrollTop = st <= 0 ? 0 : st;
}

let options = {
  threshold: 1,
};
const sliderObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((ent) => {
    if (ent.isIntersecting) {
      window.addEventListener("scroll", scrollEvent);
    } else {
      window.removeEventListener("scroll", scrollEvent);
    }
  });
}, options);
sliderObserver.observe(sliderView);
