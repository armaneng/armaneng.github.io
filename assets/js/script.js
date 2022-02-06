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
    if (toggleButton.classList.contains("toggle-button--close")) 
        closeMenuNav();
    else
        openMenuNav();
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
        menuNav.style.display = "none";
    }, 500);
    menuNav.classList.remove("menu-nav--opened");
}

// implement fade-in effect for section wrappers

let sectionWrappers = document.querySelectorAll("section:not(.introduction) > div");

window.addEventListener("scroll", checkVisibility);

function checkVisibility() {
    sectionWrappers.forEach(function(sectionWrapper) {
        if (isVisible(sectionWrapper)) {
            sectionWrapper.classList.add("fade-in");
        }
    });
}

function isVisible(element) {
    let elementOffsetTop = element.getBoundingClientRect().top;
    let distanceFromTop = -250;
    if (elementOffsetTop - window.innerHeight < distanceFromTop) {
        return true;
    }
    else {
        return false;
    }
}

// implement skill fill percentages loading

let skillsWrapper = document.querySelector(".skills__wrapper");
let skillFillElements = document.querySelectorAll(".skill__fill");

window.addEventListener("scroll", fillSkillBar);

function fillSkillBar() {
    if (skillsWrapper.classList.contains("fade-in")) {
        skillFillElements.forEach(function(skillFillElement) {
            skillFillElement.classList.add("skill__fill--loading");
        });
    }
}

//implement toggle theme functionality

let rootElement = document.querySelector(":root");
let cssVariables = getComputedStyle(rootElement);
let toggleThemeBtn = document.querySelector(".toggle-theme");
let toggleThemeCircle = document.querySelector(".toggle-theme__circle");
let shadowElement = document.querySelector(".shadow");
console.log("Outside: " + localStorage.getItem("theme"));
toggleThemeBtn.addEventListener("click", toggleTheme);

function toggleTheme() {
    let currentTheme = localStorage.getItem("theme");
    console.log("In toggleTheme: " + currentTheme);
    if (currentTheme === null || currentTheme === "light") {
        localStorage.setItem("theme", "dark");
        setTheme("dark");
    }
    else {
        localStorage.setItem("theme", "light");
        setTheme("light");
    }
}

function setTheme(theme) {
    if (theme === "dark") {
        toggleThemeCircle.style.left = "0";
        shadowElement.style.display = "block";
        setTimeout(function() {
            shadowElement.classList.add("shadow--opened");
        }, 10);
        document.body.classList.add("dark-mode");
    }
    else {
        toggleThemeCircle.style.left = "50%";
        shadowElement.classList.remove("shadow--opened");
        setTimeout(function() {
            shadowElement.style.display = "none";
        }, 500);
        document.body.classList.remove("dark-mode");
    }
}