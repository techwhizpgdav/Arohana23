const mobile_nav= document.querySelector(".hamburger");
const nav_header = document.querySelector(".nav-elements");


const toggleNavbar = () => {
    // alert(" Aarohna ");
    nav_header.classList.toggle("active");

};

mobile_nav.addEventListener("click",() => toggleNavbar());

// logo click
const logo = document.querySelector(".AAROHNA-logo");
const logo_clicked = () => {
    // logo.style.pointer = "cursor";
    if (window.location.href.includes('events')){
        window.location.href = "../index.html";
    }
    else{
        window.location.href = "./index.html";
    }
}
logo.addEventListener("click",() => logo_clicked());