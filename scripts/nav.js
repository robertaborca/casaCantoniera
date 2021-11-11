// DOM ELEMENTS
const hamburger = document.querySelector(".navbar__hamburger");
const navMenu = document.querySelector(".navbar__menu");
const navLink = document.querySelectorAll(".navbar__menu-item--link");
const navbar = document.querySelector(".navbar");
const main = document.querySelector(".main");


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

// // STICKY TRANSPARENT NAV ON SCROLLING
// // Get the offset position of the navbar
// let navbarHeight = navbar.offsetHeight;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// const stickyNav = () => {
//   if (window.pageYOffset >= navbarHeight && window.innerWidth > 950) {
//     navbar.classList.add("navbar__sticky");
//     main.style.padding = "10rem 0 0 0"; 
//   } else {
//     navbar.classList.remove("navbar__sticky");
//     main.style.padding = "0"; 
//   }
// }


//EVENT LISTENERS
hamburger.addEventListener("click", toggleMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

// window.onscroll = () => { 
//     stickyNav();
//   };