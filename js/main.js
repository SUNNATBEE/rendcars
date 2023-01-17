const elBtnOpen = document.querySelector(".site-header__burger");
const elBtnClose = document.querySelector(".site-header__close");
const elNav = document.querySelector(".sitenav");
const elBtnDark = document.querySelector(".site-header__dark");
const elOverlay = document.querySelector(".overlay");

elBtnOpen.addEventListener("click", () => {
  elNav.classList.add("site-header__sitenav--active");
  elOverlay.classList.add("overlay--active");
});
elBtnClose.addEventListener("click", () => {
  elNav.classList.remove("site-header__sitenav--active");
  elOverlay.classList.remove("overlay--active");
});

elBtnDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  elBtnDark.classList.toggle("sitenav__rigister-dark-btn--active");
});
