const menuBtn = document.querySelector(".nav_btn");
const menuContainer = document.querySelector(".dropdown_menu");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open_menu");
  menuContainer.classList.toggle("open_dropdown");
  setTimeout(function () {
    menuContainer.classList.toggle("opened_dropdown");
  }, 300);
});

document.addEventListener("click", (e) => {
  if (menuContainer.classList.contains("opened_dropdown")) {
    if (
      e.target !== menuContainer &&
      menuContainer.contains(e.target) == false
    ) {
      console.log("sdsdsd");
      console.log(menuContainer.childNodes[1]);

      menuBtn.classList.remove("open_menu");
      menuContainer.classList.remove("open_dropdown");
      menuContainer.classList.remove("opened_dropdown");
    }
  }
});
