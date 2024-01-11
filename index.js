// document.addEventListener("DOMContentLoaded", function () {
//     const startTime = performance.now();
  
//     window.addEventListener("load", function () {
//       const endTime = performance.now();
//       const loadingTime = endTime - startTime;
  
//       const minimumDuration = 2000;
  
//       const animationDuration = Math.max(minimumDuration, loadingTime);
  
//       setTimeout(function () {
//         document.getElementById("preloader-container").classList.add("hidden");
//         document.getElementById("content").classList.remove("hidden");
//       }, animationDuration);
//     });
//   });

document.addEventListener("DOMContentLoaded", function () {
    const startTime = performance.now();
  
    window.addEventListener("load", function () {
  
      const animationDuration = 5000;
  
      setTimeout(function () {
        document.getElementById("preloader-container").classList.add("hidden");
        document.getElementById("content").classList.remove("hidden");
      }, animationDuration);
    });
  });


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hiddenn');
hiddenElements.forEach((el) => observer.observe(el));

//gallery =>

const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('someshow');
        }
        else{
            entry.target.classList.remove('someshow');
        }
    })
})

const hiddenGalleryElements = document.querySelectorAll('.sometry');
hiddenGalleryElements.forEach((el) => obs.observe(el));

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
