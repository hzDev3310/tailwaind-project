// Initialization for ES Users

const btn = document.querySelector(".menuBtn");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll('.menu a')

btn.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.replace("hidden", "flex");
  } else {
    menu.classList.replace("flex", "hidden");
  }
});

menuLinks.forEach(link => {
  link.addEventListener('click',()=>{
    menu.classList.replace("flex", "hidden");
  })
});  

