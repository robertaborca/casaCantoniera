// DOM ELEMENTS
const nav = document.querySelector(".navbar");
const hero = document.querySelector(".hero");
const about = document.querySelector(".article__about");
const menus = document.querySelector(".article__menus");
// const christmas = document.querySelector(".article__christmas");
const map = document.querySelector(".article__map");
const times = document.querySelector(".article__times--home");
const gallery = document.querySelector(".gallery");

// const valentines = document.querySelector(".article__valentines");


const elementsToFade = [about, menus, map, times, gallery];


// GET SCROLL POINTS FOR FADING ELEMENTS
let scrollPoints = [];

const getScrollPoints = (elements) => {
  let heights = [];

  elements.forEach(element => {
    heights.push(element.offsetHeight);
  });

  for (let i = 0; i < heights.length; i++) {

    if (heights.indexOf(heights[i]) > 0) {
      scrollPoints.push(heights[i] += heights[i - 1]);
    } else {
      scrollPoints.push(heights[i]);
    }

  }
};

// FADE IN WHEN SCROLLPOINT IS HIGHER OR EQUAL TO WINDOW SCROLL
const fadeInOnScroll = (element, scrollPoint) => {
    let y = window.scrollY + element.offsetHeight / 2;
    if (y >= scrollPoint) {
      element.classList.add("show");
    }
};


//EVENT LISTENERS
 window.onscroll = () => { 
  getScrollPoints(elementsToFade);
  fadeInOnScroll(about, scrollPoints[0]);
  // fadeInOnScroll(valentines, scrollPoints[1]);
  fadeInOnScroll(menus, scrollPoints[1]);
  // fadeInOnScroll(christmas, scrollPoints[2]);
  fadeInOnScroll(map, scrollPoints[2]);
  fadeInOnScroll(times, scrollPoints[3]);
  fadeInOnScroll(gallery, scrollPoints[4]);
 };




