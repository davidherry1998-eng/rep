* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  font-family: Inter, Arial, sans-serif;
  background:
    radial-gradient(circle at 8% 25%, rgba(0, 120, 120, 0.18), transparent 18%),
    radial-gradient(circle at 92% 20%, rgba(0, 170, 140, 0.22), transparent 18%),
    linear-gradient(135deg, #f6fbff, #eef6f8);
  color: #0f172a;
  overflow-x: hidden;
}

.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 40px 20px;
}

.outer-card {
  position: relative;
  width: min(1280px, 100%);
  min-height: 720px;
  display: grid;
  place-items: center;
}

.main-card {
  width: min(860px, 100%);
  overflow: hidden;
  border-radius: 18px;
  background: white;
  box-shadow: 0 28px 70px rgba(15, 23, 42, 0.18);
  position: relative;
  z-index: 5;
}

.hero {
  min-height: 435px;
  position: relative;
  padding: 36px 42px 52px;
  color: white;
  background:
    linear-gradient(90deg, rgba(3, 13, 25, 0.96), rgba(5, 18, 31, 0.68)),
    url("https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=1600&q=80");
  background-size: cover;
  background-position: center;
}

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 80% 50%, rgba(39, 224, 204, 0.25), transparent 24%),
    linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.22));
  pointer-events: none;
}

.brand {
  position: relative;
  z-index: 2;
  font-size: 23px;
  font-weight: 800;
  color: #d7c181;
  margin-bottom: 70px;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.hero h1 {
  font-size: clamp(34px, 4.8vw, 54px);
  line-height: 1.08;
  font-weight: 900;
  letter-spacing: -1.6px;
  margin-bottom: 20px;
}

.hero h1 span {
  color: #d7b66c;
}

.hero p {
  max-width: 650px;
  margin: 0 auto 28px;
  font-size: 20px;
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.92);
}

.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 38px;
  border-radius: 7px;
  background: linear-gradient(135deg, #24d9c4, #00a7d8);
  color: white;
  font-weight: 800;
  font-size: 18px;
  text-decoration: none;
  box-shadow: 0 14px 34px rgba(0, 199, 214, 0.34);
  transition: 0.25s ease;
}

.cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 42px rgba(0, 199, 214, 0.42);
}

.profile-section {
  display: grid;
  grid-template-columns: 135px 1fr;
  gap: 28px;
  align-items: center;
  padding: 38px 64px 26px;
  background: white;
}

.profile-image {
  width: 135px;
  height: 135px;
  border-radius: 12px;
  overflow: hidden;
  background: #e5e7eb;
  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.08);
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-copy h2 {
  font-size: 25px;
  line-height: 1.05;
  margin-bottom: 12px;
  font-weight: 900;
}

.profile-copy p {
  font-size: 16px;
  line-height: 1.45;
  color: #111827;
}

.disclaimer {
  padding: 16px 64px 26px;
  color: #111827;
  font-size: 14px;
  line-height: 1.5;
}

.disclaimer p {
  border-top: 1px solid #e5e7eb;
  padding-top: 18px;
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-top: 1px solid #e5e7eb;
  padding: 16px 64px;
  font-size: 13px;
  color: #111827;
}

footer a {
  color: #111827;
  font-weight: 700;
}

.floating-card {
  position: absolute;
  width: 205px;
  min-height: 155px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 18px 44px rgba(15, 23, 42, 0.12);
  display: grid;
  place-items: center;
  text-align: center;
  padding: 22px;
  z-index: 3;
  backdrop-filter: blur(12px);
}

.floating-card.left {
  left: 0;
}

.floating-card.right {
  right: 0;
}

.floating-card.top {
  top: 180px;
}

.floating-card.bottom {
  top: 360px;
}

.icon {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #effefa;
  border: 2px solid #b8f2ec;
  font-size: 34px;
  margin-bottom: 12px;
}

.floating-card h3 {
  font-size: 19px;
  line-height: 1.12;
  font-weight: 900;
}

.floating-card p {
  margin-top: 5px;
  font-size: 12px;
  color: #475569;
}

.coin {
  position: absolute;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: white;
  font-size: 46px;
  font-weight: 900;
  background:
    radial-gradient(circle at 30% 28%, #c8fff2, transparent 20%),
    linear-gradient(145deg, #0abf9a, #066d66);
  box-shadow: 0 18px 38px rgba(3, 105, 92, 0.35);
  filter: blur(0.2px);
  opacity: 0.85;
  z-index: 1;
}

.coin-1 {
  right: 70px;
  top: 70px;
  transform: rotate(16deg);
}

.coin-2 {
  right: 90px;
  bottom: 80px;
  transform: rotate(-14deg);
}

.coin-3 {
  right: -10px;
  bottom: 30px;
  width: 125px;
  height: 125px;
  font-size: 64px;
  opacity: 0.75;
}

.coin-4 {
  left: -40px;
  bottom: 210px;
  width: 105px;
  height: 105px;
  font-size: 56px;
  background:
    radial-gradient(circle at 30% 28%, #ffffff, transparent 20%),
    linear-gradient(145deg, #525252, #111827);
  opacity: 0.5;
}

@media (max-width: 1120px) {
  .floating-card,
  .coin {
    display: none;
  }

  .outer-card {
    min-height: auto;
  }
}

@media (max-width: 720px) {
  .page {
    padding: 20px 12px;
  }

  .hero {
    padding: 28px 22px 42px;
    min-height: 440px;
  }

  .brand {
    margin-bottom: 55px;
  }

  .hero p {
    font-size: 17px;
  }

  .profile-section {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 32px 24px 18px;
  }

  .profile-image {
    margin: 0 auto;
  }

  .disclaimer,
  footer {
    padding-left: 24px;
    padding-right: 24px;
  }

  footer {
    flex-direction: column;
  }
}
