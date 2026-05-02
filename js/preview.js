const DEVICES = [
  { name: "iPhone SE", width: 375, height: 667 },
  { name: "iPhone 12 / 13 / 14", width: 390, height: 844 },
  { name: "iPhone 14 Pro Max", width: 430, height: 932 },
  { name: "iPhone 16 Pro Max", width: 440, height: 956 },
  { name: "Pixel 7", width: 412, height: 915 },
  { name: "Pixel 10 Pro XL", width: 414, height: 921 },
  { name: "Galaxy S8+", width: 360, height: 740 },
];
const DEFAULT_DEVICE = "iPhone 16 Pro Max";

const cardTemplate = Handlebars.templates.preview;
const serpTemplate = Handlebars.templates.serp;
const replicaSmallTemplate = Handlebars.templates["replica-small"];
const replicaLargeTemplate = Handlebars.templates["replica-large"];
const replicaNewsTemplate = Handlebars.templates["replica-news"];

const $card = document.getElementById("card");
const $serp = document.getElementById("serp");
const $replicaSmall = document.getElementById("replica-small");
const $replicaLarge = document.getElementById("replica-large");
const $replicaNews = document.getElementById("replica-news");
const $deviceSelect = document.getElementById("device-select");
const $deviceDimensions = document.getElementById("device-dimensions");
const $phoneViewport = document.getElementById("phone-viewport");

let state = {};

const IMAGE_MIN_WIDTH = 1200;
const IMAGE_MIN_HEIGHT = 675;
let imageCheckId = 0;

function checkImageDimensions(url) {
  const myId = ++imageCheckId;
  const field = document
    .querySelector('[data-bind="imageUrl"]')
    .closest(".data-panel-field");
  if (!field) return;
  if (!url) {
    setImageValidation(field, true);
    return;
  }
  const img = new Image();
  img.onload = function () {
    if (myId !== imageCheckId) return;
    const ok =
      img.naturalWidth >= IMAGE_MIN_WIDTH &&
      img.naturalHeight >= IMAGE_MIN_HEIGHT;
    setImageValidation(field, ok, img.naturalWidth, img.naturalHeight);
  };
  img.onerror = function () {
    if (myId !== imageCheckId) return;
    setImageValidation(field, true);
  };
  img.src = url;
}

function setImageValidation(field, ok, w, h) {
  const error = field.querySelector(".data-panel-error");
  const text = field.querySelector(".data-panel-error-text");
  if (ok) {
    field.classList.remove("is-invalid");
    error.hidden = true;
  } else {
    field.classList.add("is-invalid");
    error.hidden = false;
    text.textContent = `The image is below the recommended minimum size of ${IMAGE_MIN_WIDTH}×${IMAGE_MIN_HEIGHT} px (currently ${w}×${h} px).`;
  }
}

function deriveFromCanonical() {
  try {
    state.origin = new URL(state.canonical).origin;
  } catch (e) {
    state.origin = "";
  }
  if (state.origin) {
    const fav = new URL(
      "https://encrypted-tbn0.gstatic.com/faviconV2?client=NEWS_360&size=48&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
    );
    fav.searchParams.set("url", state.origin);
    state.favicon = fav.href;
  } else {
    state.favicon = "";
  }
}

function toDatetimeLocal(value) {
  if (!value) return "";
  const d = new Date(value);
  if (isNaN(d.getTime())) return "";
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function fromNow(value, locale) {
  const d = new Date(value);
  if (isNaN(d.getTime())) return "";
  const rtf = new Intl.RelativeTimeFormat(locale || undefined, {
    numeric: "auto",
  });
  const diffMs = d.getTime() - Date.now();
  const abs = Math.abs(diffMs);
  const SEC = 1000,
    MIN = 60 * SEC,
    HOUR = 60 * MIN,
    DAY = 24 * HOUR;
  const WEEK = 7 * DAY,
    MONTH = 30 * DAY,
    YEAR = 365 * DAY;
  if (abs < MIN) return rtf.format(Math.round(diffMs / SEC), "second");
  if (abs < HOUR) return rtf.format(Math.round(diffMs / MIN), "minute");
  if (abs < DAY) return rtf.format(Math.round(diffMs / HOUR), "hour");
  if (abs < WEEK) return rtf.format(Math.round(diffMs / DAY), "day");
  if (abs < MONTH) return rtf.format(Math.round(diffMs / WEEK), "week");
  if (abs < YEAR) return rtf.format(Math.round(diffMs / MONTH), "month");
  return rtf.format(Math.round(diffMs / YEAR), "year");
}

Handlebars.registerHelper("ago", (value) => fromNow(value, state.language));

function render() {
  if (state.titleTag) document.title = state.titleTag;
  $card.innerHTML = cardTemplate(state);
  $serp.innerHTML = serpTemplate(state);
  $replicaSmall.innerHTML = replicaSmallTemplate(state);
  $replicaLarge.innerHTML = replicaLargeTemplate(state);
  $replicaNews.innerHTML = replicaNewsTemplate(state);
}

function bindInputs() {
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const key = el.dataset.bind;
    if (el.type === "checkbox") {
      el.checked = !!state[key];
      el.addEventListener("change", (e) => {
        state[key] = e.target.checked;
        render();
      });
    } else if (el.type === "datetime-local") {
      el.value = toDatetimeLocal(state[key]);
      el.addEventListener("input", (e) => {
        state[key] = e.target.value;
        render();
      });
    } else {
      el.value = state[key] != null ? state[key] : "";
      el.addEventListener("input", (e) => {
        state[key] = e.target.value;
        if (key === "canonical") deriveFromCanonical();
        if (key === "imageUrl") checkImageDimensions(e.target.value);
        render();
      });
    }
  });
}

function applyDevice(idx) {
  const d = DEVICES[idx];
  if (!d) return;
  $phoneViewport.style.width = d.width + "px";
  $deviceDimensions.textContent = `${d.width} × ${d.height}`;
}

DEVICES.forEach((device, i) => {
  const opt = document.createElement("option");
  opt.value = i;
  opt.textContent = `${device.name} — ${device.width}×${device.height}`;
  $deviceSelect.appendChild(opt);
});

const defaultIdx = Math.max(
  0,
  DEVICES.findIndex((d) => d.name === DEFAULT_DEVICE),
);
$deviceSelect.value = defaultIdx;
applyDevice(defaultIdx);

$deviceSelect.addEventListener("change", (e) => applyDevice(e.target.value));

document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { type: "msg_from_preview" },
      function (response) {
        state = response;
        bindInputs();
        checkImageDimensions(state.imageUrl);
        render();
      },
    );
  });
});
