const menuBtn = document.querySelector(".nav_btn");
const menuContainer = document.querySelector(".dropdown_menu");
console.log("menuBtn");
menuBtn.addEventListener("click", (ev) => {
  menuBtn.classList.toggle("open_menu");
  menuContainer.classList.toggle("open_dropdown");
});
