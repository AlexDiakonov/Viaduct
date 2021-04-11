const menuBtn = document.querySelector(".nav_btn");
const menuContainer = document.querySelector(".dropdown_menu");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open_menu");
  menuContainer.classList.toggle("open_dropdown");
});
