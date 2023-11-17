let tabLinks = document.getElementsByClassName("tab_titles_tab-links");
let tabContents = document.getElementsByClassName("about__col-2-tab-contents");
let navLink = document.querySelector(".ham");
let hamburgerMenu = document.querySelector(".button-3");

const openTab = (tabName) => {
    for(tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

document.addEventListener("scroll", () => {
    let headerNav = document.querySelector(".nav-bar");
    let scrollPosition = window.scrollY;

    if(scrollPosition > 50) {
        headerNav.style.backgroundColor = "#111C1B";
    } else {
        headerNav.style.backgroundColor = "transparent";
    }
})
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    // Afficher/cacher la navbar en cliquant sur le bouton hamburger
    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    // Cacher la navbar lorsque l'utilisateur clique sur un lien
    navList.addEventListener('click', function () {
        navList.classList.remove('show');
    })
});