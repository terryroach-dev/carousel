const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

const dotNavIndicators = document.getElementsByClassName('carousel-indicator');
const carouselNav = document.querySelector('.carousel-nav');
const dots = Array.from(carouselNav.children);

const prevBtn = document.getElementById('carousel-btn-prev').addEventListener("click", moveToPrevSlide);
const nextBtn = document.getElementById('carousel-btn-next').addEventListener("click", moveToNextSlide);

function moveToPrevSlide() {
    hideAllSlides();
    removeAllDotNavIndicators();
    if(slidePosition === 0) {
        slidePosition = slides.length - 1
    } else {
        slidePosition -=1;
    }
    slides[slidePosition].classList.remove('carousel-item-hidden');
    slides[slidePosition].classList.add('carousel-item-visible');
    dotNavIndicators[slidePosition].classList.add('carousel-indicator-active');
};

function moveToNextSlide() {
    hideAllSlides();
    removeAllDotNavIndicators();
    if(slidePosition === totalSlides -1) {
        slidePosition = 0;
    } else {
        slidePosition +=1;
    }
    slides[slidePosition].classList.remove('carousel-item-hidden');
    slides[slidePosition].classList.add('carousel-item-visible');
    dotNavIndicators[slidePosition].classList.add('carousel-indicator-active');
};

function hideAllSlides() {
    for (slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
};

function removeAllDotNavIndicators() {
    for (dotNavIndicator of dotNavIndicators) {
        dotNavIndicator.classList.remove('carousel-indicator-active');
    }
};

carouselNav.addEventListener("click", e => {
    const targetDot = e.target.closest('button');
    if(!targetDot) return;
    hideAllSlides();
    removeAllDotNavIndicators();
    const dotIndex = dots.findIndex(dot => dot === targetDot);
    slidePosition = dotIndex;
    slides[dotIndex].classList.remove('carousel-item-hidden');
    slides[dotIndex].classList.add('carousel-item-visible');
    dotNavIndicators[dotIndex].classList.add('carousel-indicator-active');
});