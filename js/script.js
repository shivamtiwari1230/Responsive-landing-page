const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());





 let outerBox = document.querySelector("#id");
 outerBox.classList.add("outer-box-one-child")
 console.log(outerBox);
 
 
