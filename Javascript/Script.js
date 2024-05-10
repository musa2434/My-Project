//Navigation Bar
const hamburger = document.querySelector("nav .btn");
const menu = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".nav-links");

//Adding event listener
hamburger.addEventListener("click", displayMenu);

//Functioin that display the menu
function displayMenu(){
    navLinks.classList.toggle("openMenu");

    if(navLinks.className.includes("openMenu")){
        document.querySelector(".fa-xmark").style.display = "block";
        menu.style.display = "none";
    }else{
        document.querySelector(".fa-xmark").style.display = "none";
        menu.style.display = "block";
    }
}