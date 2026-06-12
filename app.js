/* =========================================================
   META PIXEL + TELEGRAM CTA
   File: app.js

   Supported URL parameters:
   ?px=123456789012345
   ?telegram=yourTelegramUsername
   ?subid=campaign_01

   Example:
   https://example.com/?px=123456789012345&telegram=mychannel&subid=ad01
   ========================================================= */

"use strict";

/* ---------------------------
   CONFIGURATION
---------------------------- */

// Replace these values.
const DEFAULT_META_PIXEL_ID = "1299956072116829";
const DEFAULT_TELEGRAM_USERNAME = "yourusername";

// Gives Meta Pixel a short moment to send the Lead event.
const REDIRECT_DELAY_MS = 350;


/* ---------------------------
   URL PARAMETERS
---------------------------- */

const params = new URLSearchParams(window.location.search);

function onlyDigits(value) {
  return String(value || "").replace(/\D/g, "");
}

function cleanTelegramUsername(value) {
  return String(value || "")
    .trim()
    .replace(/^https?:\/\/t\.me\//i, "")
    .replace(/^@/, "")
    .replace(/[^a-zA-Z0-9_]/g, "");
}

function cleanTrackingValue(value) {
  return String(value || "")
    .trim()
    .replace(/[<>"'`]/g, "")
    .slice(0, 100);
}

const pixelFromUrl = onlyDigits(params.get("px"));
const defaultPixel = onlyDigits(DEFAULT_META_PIXEL_ID);
const META_PIXEL_ID = pixelFromUrl || defaultPixel;

const telegramFromUrl = cleanTelegramUsername(
  params.get("telegram")
);

const defaultTelegram = cleanTelegramUsername(
  DEFAULT_TELEGRAM_USERNAME
);

const TELEGRAM_USERNAME =
  telegramFromUrl || defaultTelegram;

const SUB_ID = cleanTrackingValue(
  params.get("subid")
);

const TELEGRAM_URL =
  `https://t.me/${TELEGRAM_USERNAME}`;


/* ---------------------------
   META PIXEL INITIALIZATION
---------------------------- */

function initializeMetaPixel(pixelId) {
  if (!pixelId) {
    console.warn("Meta Pixel ID bulunamadı.");
    return;
  }

  if (window.fbq && window.fbq.loaded) {
    window.fbq("init", pixelId);
    window.fbq("track", "PageView");
    return;
  }

  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;

    n = f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };

    if (!f._fbq) {
      f._fbq = n;
    }

    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];

    t = b.createElement(e);
    t.async = true;
    t.src = v;

    s = b.getElementsByTagName(e)[0];

    if (s && s.parentNode) {
      s.parentNode.insertBefore(t, s);
    }
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );

  window.fbq("init", pixelId);
  window.fbq("track", "PageView");
}


/* ---------------------------
   EVENT HELPERS
---------------------------- */

function createEventId() {
  if (
    window.crypto &&
    typeof window.crypto.randomUUID === "function"
  ) {
    return window.crypto.randomUUID();
  }

  return (
    "lead_" +
    Date.now() +
    "_" +
    Math.random().toString(36).slice(2, 12)
  );
}

function trackLeadEvent() {
  if (typeof window.fbq !== "function") {
    console.warn(
      "Lead event gönderilemedi. Meta Pixel aktif değil."
    );

    return false;
  }

  const alreadyTracked = sessionStorage.getItem(
    "telegramLeadTracked"
  );

  if (alreadyTracked === "true") {
    console.log(
      "Lead eventi bu oturumda daha önce gönderildi."
    );

    return true;
  }

  const eventId = createEventId();

  window.fbq(
    "track",
    "Lead",
    {
      content_name: "Telegram Signal Join",
      content_category: "Telegram",
      source: "landing_page",
      subid: SUB_ID || undefined
    },
    {
      eventID: eventId
    }
  );

  sessionStorage.setItem(
    "telegramLeadTracked",
    "true"
  );

  sessionStorage.setItem(
    "telegramLeadEventId",
    eventId
  );

  console.log("Meta Lead eventi gönderildi:", eventId);

  return true;
}


/* ---------------------------
   TELEGRAM REDIRECT
---------------------------- */

function openTelegramWithTracking(button) {
  if (
    !TELEGRAM_USERNAME ||
    TELEGRAM_USERNAME === "yourusername"
  ) {
    console.error(
      "Telegram kullanıcı adı ayarlanmamış."
    );

    return;
  }

  if (button) {
    button.classList.add("is-loading");
    button.setAttribute("aria-busy", "true");
  }

  /*
   Open the tab immediately so mobile browsers
   do not block it as a popup.
  */
  const telegramTab = window.open(
    "about:blank",
    "_blank"
  );

  trackLeadEvent();

  window.setTimeout(() => {
    if (telegramTab) {
      telegramTab.opener = null;
      telegramTab.location.href = TELEGRAM_URL;
    } else {
      window.location.href = TELEGRAM_URL;
    }

    if (button) {
      button.classList.remove("is-loading");
      button.removeAttribute("aria-busy");
    }
  }, REDIRECT_DELAY_MS);
}


/* ---------------------------
   18+ AGE MODAL
---------------------------- */

function setupAgeGate() {
  const ageModal =
    document.getElementById("ageModal");

  const confirmAge =
    document.getElementById("confirmAge");

  const declineAge =
    document.getElementById("declineAge");

  if (!ageModal || !confirmAge || !declineAge) {
    return;
  }

  function showAgeModal() {
    ageModal.classList.add("is-visible");
    document.body.classList.add("modal-open");
  }

  function closeAgeModal() {
    ageModal.classList.remove("is-visible");
    document.body.classList.remove("modal-open");
  }

  confirmAge.addEventListener("click", () => {
    sessionStorage.setItem(
      "ageConfirmed",
      "true"
    );

    closeAgeModal();
  });

  declineAge.addEventListener("click", () => {
    document.body.innerHTML = `
      <main
        style="
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 24px;
          text-align: center;
          font-family: Manrope, Arial, sans-serif;
          color: #f7fff9;
          background: #06110d;
        "
      >
        <div>
          <h1
            style="
              font-size: 36px;
              margin-bottom: 12px;
            "
          >
            Erişim kapatıldı
          </h1>

          <p style="color: #b8c8bf;">
            Bu içerik yalnızca 18 yaş ve üzeri
            kullanıcılar içindir.
          </p>
        </div>
      </main>
    `;
  });

  const ageConfirmed =
    sessionStorage.getItem("ageConfirmed");

  if (ageConfirmed !== "true") {
    showAgeModal();
  }
}


/* ---------------------------
   INITIALIZATION
---------------------------- */

document.addEventListener(
  "DOMContentLoaded",
  () => {
    initializeMetaPixel(META_PIXEL_ID);

    setupAgeGate();

    const telegramButton =
      document.getElementById("telegramButton");

    if (!telegramButton) {
      console.error(
        'Telegram butonu bulunamadı. HTML butonunda id="telegramButton" olmalıdır.'
      );

      return;
    }

    telegramButton.addEventListener(
      "click",
      () => {
        openTelegramWithTracking(
          telegramButton
        );
      }
    );
  }
);
