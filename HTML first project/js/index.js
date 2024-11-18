const menuHamburger = document.querySelector(".menue-icon")
const navLinks = document.querySelector(".nav-link")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})