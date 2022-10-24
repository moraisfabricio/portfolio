const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const toTop = document.querySelector(".to-top");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

