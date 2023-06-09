// Javascript code for responsive side bar
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

 menuBtn.addEventListener("click", () => {
   menu.classList.add("active");
 });

 closeBtn.addEventListener("click", () => {
   menu.classList.remove("active");
 });
menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

