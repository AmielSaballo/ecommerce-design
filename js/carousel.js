const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");

slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${i * 100}%)`;
});

let currentSlide = 0;
const nextSlide = document.querySelector(".carousel-next");
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", () => {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
    indicators[currentSlide].classList.add("indicator-active");
    indicators[maxSlide].classList.remove("indicator-active");
  } else {
    currentSlide++;
    indicators[currentSlide].classList.add("indicator-active");
    indicators[currentSlide - 1].classList.remove("indicator-active");
  }

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".carousel-prev");

prevSlide.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = maxSlide;
    indicators[currentSlide].classList.add("indicator-active");
    indicators[0].classList.remove("indicator-active");
  } else {
    currentSlide--;
    indicators[currentSlide].classList.add("indicator-active");
    indicators[currentSlide + 1].classList.remove("indicator-active");
  }

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
});

function setSlide(n) {
  currentSlide = n;

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });

  indicators.forEach((indicator) => {
    indicator.classList.remove("indicator-active");
  });

  indicators[currentSlide].classList.add("indicator-active");
}
