// gallery

// quote gallery
document.addEventListener('DOMContentLoaded', function () {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".quote-main-container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  let maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  const images = document.querySelectorAll(".image-list .image");

  // Calculate the width of each image
  let imageWidth = images.length > 0 ? images[0].offsetWidth : 0;

  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;
    const maxThumbPosition =
      sliderScrollbar.getBoundingClientRect().width -
      scrollbarThumb.offsetWidth;

    // Update thumb position on mouse move
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;

      // Ensure the scrollbar thumb stays within bounds
      const boundedPosition = Math.max(
        0,
        Math.min(maxThumbPosition, newThumbPosition)
      );
      const scrollPosition =
        (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    };

    // Remove event listeners on mouse up
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    // Add event listeners for drag interaction
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide images according to the slide button clicks
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const targetIndex = Math.floor(imageList.scrollLeft / imageWidth) + direction;
      const newScrollLeft = targetIndex * imageWidth;
      imageList.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    });
  });

  // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
    slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  };

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
    handleSlideButtons();
  });

  window.addEventListener("resize", () => {
    // Recalculate the width of each image and maxScrollLeft on window resize
    imageWidth = images.length > 0 ? images[0].offsetWidth : 0;
    maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  });
});


// GRID
function updateText(text) {
  var textContentElement = document.getElementById("text-content");
  textContentElement.textContent = text;
}

document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("header");

  window.onscroll = function () {
    // Add or remove the "shrink" class based on scroll position
    if (window.pageYOffset > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  };
});

distance.oninput = (e) => {
  wrap.style.setProperty("--distance", e.target.value + "%");
};

thickness.oninput = (e) => {
  wrap.style.setProperty("--border", e.target.value + "px");
};

function toggleNavItems() {
  const navItems = document.getElementById("nav-items");
  navItems.classList.toggle("nav-show");
}

function toggleDescription(productId) {
  const description = document.getElementById(`description${productId}`);
  description.classList.toggle("hidden");
}

function toggleDuration(productId) {
  const duration = document.getElementById(`duration${productId}`);
  duration.classList.toggle("hidden");
}
