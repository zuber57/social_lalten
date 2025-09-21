  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  window.addEventListener("load", () => {
  video.muted = true; // Ensure muted
  video.play().catch((e) => {
    console.log("Autoplay prevented:", e);
  });
  centerBtn.classList.add("opacity-0", "pointer-events-none");
});
