// DOM ELEMENTS
const about = document.querySelector(".article__about");
const menus = document.querySelector(".article__menus");
const christmas = document.querySelector(".article__christmas");
const map = document.querySelector(".article__map");
const times = document.querySelector(".article__times");

// FADE IN ON SCROLL
const fadeInOnScroll = (scrollY, element) => {
  let y = window.scrollY;
  if (y >= scrollY) {
    element.classList.add("show");
  } else {
    element.classList.remove("show");
  }
};

//EVENT LISTENERS
window.onscroll = () => { 
  fadeInOnScroll(800, about);
  fadeInOnScroll(1600, menus);
  fadeInOnScroll(2500, christmas);
  fadeInOnScroll(3500, map);
  fadeInOnScroll(4200, times);
  // stickyNav();
};


