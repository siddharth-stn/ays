const hamburgIcon = document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar");

hamburgIcon.addEventListener("click", () => {
  hamburgIcon.classList.add("hidden");
  navBar.classList.remove("hidden");
});

function hideMenu() {
  hamburgIcon.classList.remove("hidden");
  navBar.classList.add("hidden");
}
