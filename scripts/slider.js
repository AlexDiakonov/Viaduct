const sliderView = document.querySelector(".view_port");
const slider = document.querySelector(".slider");
// const sliderWidth = slider.offsetWidth;
const sliderWrapper = document.querySelector(".slider_wrapper");

const slidesArr = document.querySelectorAll(".slider_item");
const serviceSection = document.querySelector(".services_section");
const partnerSection = document.querySelector(".parter_section");
const win = window;
const winWidth = win.innerWidth * 0.05;
const progressBar = document.querySelector(".progressBar");

const slideWidthApply = () => {
  slidesArr.forEach((slide) => {
    slide.style.width = `${sliderView.offsetWidth * 0.8}px`;
  });
  const sliderWidth = slider.offsetWidth;
  const minHeight = slider.offsetWidth;
  const slideWidth = sliderView.offsetWidth * 0.8;
  const maxMargin = sliderWidth - sliderView.offsetWidth;
  console.log(`widht${sliderWidth} height ${minHeight}`);
  return [sliderWidth, minHeight, slideWidth, maxMargin];
};

slideWidthApply();
console.log(slideWidthApply()[0]);

console.log(slideWidthApply()[0], sliderView.offsetWidth);
const minMargin = slideWidthApply();
console.log(minMargin);
sliderWrapper.style.height = `${slideWidthApply()[1]}px`;

window.addEventListener("resize", slideWidthApply);
function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollBottom = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, bottom: rect.bottom + scrollBottom };
}

var divOffset = offset(sliderWrapper);
const lastPoint = divOffset.top + slideWidthApply()[1];

const swipeLeft = () => {
  if (currentSlide <= slidesArr.length - 1) {
    currentSlide < slidesArr.length - 1
      ? (slider.style.marginLeft = `-${slideWidthApply()[2] * currentSlide}px`)
      : (slider.style.marginLeft = `-${slideWidthApply[3]}px`);
  }
};

const swipeRight = () => {
  if (currentSlide <= 2) {
    slider.style.marginLeft = `-${slideWidthApply()[2] * currentSlide}px`;
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
