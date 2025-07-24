const products = document.querySelectorAll('.product');
const slider = document.querySelector('.product-slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.slider-btn.prev');

let activeSlider = 0;
const scrollStep = 280; // Adjust for width + margin

nextBtn.addEventListener('click', () => {
    activeSlider++;

    if (activeSlider >= products.length) {
        activeSlider = 0;
    }

    slider.style.transform = `translateX(-${activeSlider * scrollStep}px)`;
});

prevBtn.addEventListener('click', () => {
    activeSlider--;

    if (activeSlider < 0) {
        activeSlider = products.length - 1;
    }

    slider.style.transform = `translateX(-${activeSlider * scrollStep}px)`;
});

var w = window.innerWidth;
var h = window.innerHeight;

var x = document.getElementById("demo");
x = "Browser width: " + w + ", height: " + h + ".";
console.log(x);


