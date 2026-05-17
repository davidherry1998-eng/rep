const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.textContent = navLinks.classList.contains("active") ? "×" : "☰";
  });
}

const cards = document.querySelectorAll(".float-card, .chip, .risk-card, .btn, .nav-cta");

cards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});

const floatCards = document.querySelectorAll(".float-card");

window.addEventListener("mousemove", (event) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const moveX = (event.clientX - centerX) / centerX;
  const moveY = (event.clientY - centerY) / centerY;

  floatCards.forEach((card, index) => {
    const strength = (index + 1) * 4;
    card.style.transform = `translate(${moveX * strength}px, ${moveY * strength}px) ${
      card.classList.contains("balance-card") ? "rotate(4deg)" : ""
    }`;
  });
});

const warningItems = document.querySelectorAll(".danger, .warning, .info");

warningItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.filter = "brightness(1.35)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.filter = "brightness(1)";
  });
});
