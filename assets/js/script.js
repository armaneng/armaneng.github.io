// implement toggle button functionality

let toggleButton = document.querySelector(".toggle-button");
let menuNav = document.querySelector(".menu-nav");
let menuNavItems = document.querySelectorAll(".menu-nav__item");
let backdrop = document.querySelector(".backdrop");

toggleButton.addEventListener("click", toggleMenuNav);

menuNavItems.forEach(function(menuNavItem) {
    menuNavItem.addEventListener("click", closeMenuNav);
});

function toggleMenuNav() {
    if (toggleButton.classList.contains("toggle-button--close")) {
        closeMenuNav();
    }
    else {
        openMenuNav();
    }
}

backdrop.addEventListener("click", closeMenuNav);

function openMenuNav() {
    toggleButton.classList.add("toggle-button--close");
    backdrop.style.display = "block";
    menuNav.style.display = "flex";
    setTimeout(function() {
        backdrop.classList.add("backdrop--opened");
        menuNav.classList.add("menu-nav--opened");
    }, 10);
}

function closeMenuNav() {
    toggleButton.classList.remove("toggle-button--close");
    backdrop.classList.remove("backdrop--opened");
    setTimeout(function() {
        backdrop.style.display = "none";
    }, 200);
    menuNav.classList.remove("menu-nav--opened");
}