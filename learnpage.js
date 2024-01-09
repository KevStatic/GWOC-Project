// Shrink effect of the navbar
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

//-----------------------------------------------------------------------------------------
// Image slider

document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery img');

    let counter = 1;
    const slideWidth = images[0].clientWidth;

    setInterval(() => {
        gallery.style.transition = 'transform 0.5s ease-in-out';
        gallery.style.transform = `translateX(${-counter * slideWidth}px)`;

        counter++;

        if (counter === images.length - 1) {
            counter = 1;
            setTimeout(() => {
                gallery.style.transition = 'none';
                gallery.style.transform = 'translateX(0)';
            }, 500);
        }
    }, 3000); // Adjust the interval as needed
});