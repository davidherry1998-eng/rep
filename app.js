const cta = document.querySelector(".cta");
const mainCard = document.querySelector(".main-card");
const floatingCards = document.querySelectorAll(".floating-card");
const coins = document.querySelectorAll(".coin");

if (cta && mainCard) {
  cta.addEventListener("click", function (event) {
    event.preventDefault();

    mainCard.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.012)" },
        { transform: "scale(1)" }
      ],
      {
        duration: 450,
        easing: "ease-out"
      }
    );

    alert(
      "Educational mockup only: always verify risks before trusting financial or gambling claims."
    );
  });
}

function isDesktop() {
  return window.innerWidth > 1120;
}

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

window.addEventListener("resize", () => {
  if (isDesktop()) return;

  floatingCards.forEach((card) => {
    card.style.transform = "";
  });

  coins.forEach((coin) => {
    coin.style.transform = "";
  });
});
