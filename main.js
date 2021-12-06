const mainMenuItem = document.querySelector(
  ".sliding-menu-container .main-menu-item"
);
const slidingMenuContainer = document.querySelector(".sliding-menu-container");
const content = document.querySelector(".content");

mainMenuItem.addEventListener("click", () => {
  slidingMenuContainer.classList.toggle("active");
  content.classList.toggle("move-down");
});
