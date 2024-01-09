// document.addEventListener("DOMContentLoaded", function () {
//   const startTime = performance.now();

//   window.addEventListener("load", function () {
//     const endTime = performance.now();
//     const loadingTime = endTime - startTime;

//     const minimumDuration = 2000;

//     const animationDuration = Math.max(minimumDuration, loadingTime);

//     setTimeout(function () {
//       document.getElementById("preloader-container").classList.add("hidden");
//       document.getElementById("content").classList.remove("hidden");
//       AOS.refresh();
//     }, animationDuration);
//   });
// });


document.onkeydown = (e) => {
  if (e.keyCode === 37) {
    prevSlide();
  } else if (e.keyCode === 39) {
    nextSlide();
  }
};

let currentSlider = 0;

function showSlide(index) {
  const slides = document.querySelector(".photoshow-slides");
  const totalSlides = document.querySelectorAll(".photoshow-slide").length;

  if (index >= totalSlides) {
    currentSlider = 0;
  } else if (index < 0) {
    currentSlider = totalSlides - 1;
  } else {
    currentSlider = index;
  }

  slides.style.transform = `translateX(${-currentSlider * 100}%)`;
}

function prevSlide() {
  showSlide(currentSlider - 1);
}

function nextSlide() {
  showSlide(currentSlider + 1);
}

setInterval(nextSlide, 3500);

document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('header');

  window.onscroll = function () {
      // Add or remove the "shrink" class based on scroll position
      if (window.pageYOffset > 50) {
          header.classList.add('shrink');
      } else {
          header.classList.remove('shrink');
      }
  };
});

distance.oninput = e => {
  wrap.style.setProperty('--distance', e.target.value + '%')
}

thickness.oninput = e => {
  wrap.style.setProperty('--border', e.target.value + 'px')
}

function toggleNavItems() {
  const navItems = document.getElementById('nav-items');
  navItems.classList.toggle('nav-show');
}

function toggleDescription(productId) {
  const description = document.getElementById(`description${productId}`);
  description.classList.toggle("hidden");
}

function toggleDuration(productId) {
  const duration = document.getElementById(`duration${productId}`);
  duration.classList.toggle("hidden");
}
