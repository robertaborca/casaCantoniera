// DOM ELEMENTS
const hamburger = document.querySelector(".navbar__hamburger");
const navMenu = document.querySelector(".navbar__menu");
const navLink = document.querySelectorAll(".navbar__menu-item--link");
const navbar = document.querySelector(".navbar");
const main = document.querySelector(".main");

// SCROLL TO TOP BTN
const scrollToTopButton = document.getElementById('js-top');



// RESPONSIVE NAVBAR/SMALLER SCREENS HAMBURGER MENU
// TOGGLES MENU
const toggleMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navLink.forEach(link => link.classList.toggle("no-display"));

    // making links not clickable when menu is closed
    if (hamburger.classList.contains("active")) {
        navLink.forEach(link => link.tabIndex = "0");
        
        // accessible tab escape from menu
        hamburger.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                closeMenu();
            }
        });


    } else {
        navLink.forEach(link => link.tabIndex = "-1");
    }
};

// CLOSES MENU WHEN CLICKING ON LINKS
const closeMenu = () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navLink.forEach(link => link.classList.add("no-display"));
    navLink.forEach(link => link.tabIndex = "-1");
};



//////////////////////////////////////////////////////
// GETS CURRENT SCROLL VALUE AND CHANGES CLASS OF BACK-TO-TOP BTN TO SHOW/HIDE
const scrollFunc = () => {
    // Get the current scroll value
    let y = window.scrollY;
    // If the scroll value is greater than the window height, add class to the scroll-to-top button to show it
    if (y > 0) {
      scrollToTopButton.className = "top-link show";
    } else {
      scrollToTopButton.className = "top-link hide";
    }
  };

////////////////
// SCROLLS BACK TO TOP
  const scrollToTop = () => {
    // number of pixels we are from the top of the document.
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    // If number > 0, scroll back to 0, or the top of the document.
    if (c > 0) {
      //  window.requestAnimationFrame(scrollToTop);
      window.scrollTo({
        top: c - c * 8,
        left: 0,
        behavior: 'smooth'
      });
    }
  };

//EVENT LISTENERS
hamburger.addEventListener("click", toggleMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

window.addEventListener("scroll", scrollFunc);

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function(e) {
    e.preventDefault();
    scrollToTop();
  }


