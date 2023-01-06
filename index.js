 window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
      })

// JS FOR ACTIVE STATE

const activePage = window.location.hash;
// console.log(activePage);
const navLinks = document.querySelectorAll('links ').
forEach(link => {
    if (link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})
// navbar a

const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section")

// function activeMenu(){
//     let len = sec.length;
//     while(--len && scrollY + 97 < sec[len].offsetTop){}
//     li.forEach(ltx => ltx.classList.remove("active"));
//     li[len].classList.add("active");

// }
// activeMenu();
// window.addEventListener("scroll", activeMenu);






// for the typing js

var i =0, text;
text = "Hi There!  👋🏽  WELCOME..."

function typing(){
    if (i < text.length){
        document.getElementById("greetings").innerHTML +=text.charAt(i);
        i++;
        setTimeout(typing,100);
    }
}
typing();


const ham_btn = document.querySelector(".hamburger");
const resNav = document.querySelector(".mobile-nav");

ham_btn.addEventListener('click', function (){
    ham_btn.classList.toggle('is-active');
    resNav.classList.toggle('is-active');
}); 