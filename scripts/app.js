// RESPONSIVE NAVBAR/SMALLER SCREENS HAMBURGER MENU
const hamburger = document.querySelector(".navbar__hamburger");
const navMenu = document.querySelector(".navbar__menu");
const navLink = document.querySelectorAll(".navbar__menu-item--link");

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


hamburger.addEventListener("click", toggleMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));
