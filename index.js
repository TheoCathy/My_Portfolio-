window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// JS FOR ACTIVE STATE

const navLinks = document.querySelectorAll(".nav_Links");
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    navLinks.classList.add("active");
  });
});



const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section");

var i = 0,
  text;
text = "Hi There!  👋🏽  WELCOME...";

function typing() {
  if (i < text.length) {
    document.getElementById("greetings").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();

// hamburger menu here

const ham_btn = document.querySelector(".hamburger");
const resNav = document.querySelector(".mobile-nav");

ham_btn.addEventListener("click", function () {
  ham_btn.classList.toggle("is-active");
  resNav.classList.toggle("is-active");
});

// function toggleMenu() {
//   var menu = document.querySelector('.menu');
//   menu.classList.toggle('active');
// }