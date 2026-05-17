// Dom Element Declarations
const openDrawerBtn = document.getElementById("open-drawer-btn");
const closeDrawerBtn = document.getElementById("close-drawer-btn");
const drawerOverlay = document.getElementById("drawer-overlay");

const mainCard = document.querySelector(".main-card");
const floatingCards = document.querySelectorAll(".floating-card");
const coins = document.querySelectorAll(".coin");

// Step Panel Trigger Controls
if (openDrawerBtn && drawerOverlay && closeDrawerBtn) {
  // Opening Action Handler
  openDrawerBtn.addEventListener("click", () => {
    drawerOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background body bouncing scrolling
  });

  // Closing Action Handlers
  closeDrawerBtn.addEventListener("click", () => {
    drawerOverlay.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable background scrolling
  });

  // Click outside drawer content space wrapper to close it organically
  drawerOverlay.addEventListener("click", (e) => {
    if (e.target === drawerOverlay) {
      drawerOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

// Helper checker function
function isDesktop() {
  return window.innerWidth > 1120;
}

// Mouse Interactive Parallax Movement Tracking
window.addEventListener("mousemove", (event) => {
  if (!isDesktop()) return;

  const x = (event.clientX / window.innerWidth - 0.5) * 20;
  const y = (event.clientY / window.innerHeight - 0.5) * 20;

  floatingCards.forEach((card, index) => {
    const strength = index + 1;
    card.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
  });

  coins.forEach((coin, index) => {
    const strength = (index + 1) * 1.5;
    const baseRotation = index * 12;
    coin.style.transform = `translate(${x / strength}px, ${y / strength}px) rotate(${baseRotation}deg)`;
  });
});

// Window reset adjustment boundary limits
window.addEventListener("resize", () => {
  if (isDesktop()) return;

  floatingCards.forEach((card) => {
    card.style.transform = "";
  });

  coins.forEach((coin) => {
    coin.style.transform = "";
  });
});
