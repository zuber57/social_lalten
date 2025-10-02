window.addEventListener("load", () => {
    setTimeout(() => {
      const loader = document.getElementById("loader");
      if (loader) {
        loader.classList.add("fade-out");
        loader.addEventListener("animationend", () => {
          loader.style.display = "none";
        });
      }
    }, 1000); 
  });

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});





