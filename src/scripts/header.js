
function displayMobileMenu() {
  document.querySelector(".mobile-menu").classList.toggle("open");
  document.querySelector(".nav-links-outer").classList.toggle("open");
}

document.querySelector(".mobile-menu").addEventListener("click", displayMobileMenu); 