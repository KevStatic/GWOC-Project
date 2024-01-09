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
//       initializeCarousel();
//       AOS.refresh();
//     }, animationDuration);
//   });
// });


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
  initializeCarousel();
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

// const panels = document.querySelectorAll(".panel");

// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeActiveClasses();
//     panel.classList.add("active");
//   });
// });

// function removeActiveClasses() {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }

function initializeCarousel() {
    // Your carousel logic here (adding event listeners, etc.)
    const panels = document.querySelectorAll(".panel");

    panels.forEach((panel) => {
      panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
      });
    });

    function removeActiveClasses() {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    }
  }
