const menuBtn = document.querySelector(".nav_btn");
const menuContainer = document.querySelector(".dropdown_menu");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open_menu");
  menuContainer.classList.toggle("open_dropdown");
  if (!menuContainer.classList.contains("opened_dropdown")) {
    setTimeout(function () {
      menuContainer.classList.add("opened_dropdown");
    }, 10);
  }
});

document.addEventListener("click", (e) => {
  if (menuContainer.classList.contains("opened_dropdown")) {
    if (
      e.target !== menuContainer &&
      menuContainer.contains(e.target) == false
    ) {
      menuBtn.classList.remove("open_menu");
      menuContainer.classList.remove("open_dropdown");
      menuContainer.classList.remove("opened_dropdown");
    }
  }
});
