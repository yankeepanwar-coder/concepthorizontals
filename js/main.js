// Concept Horizontals — main.js
// One job: open and close the navigation menu on small screens.

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}


// ------------------------------------------------------------
// Scroll reveals: sections fade up as they enter the viewport.
// ------------------------------------------------------------
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const sections = document.querySelectorAll("main section");

if (!prefersReduced && "IntersectionObserver" in window) {
  sections.forEach((s) => s.classList.add("reveal"));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  sections.forEach((s) => observer.observe(s));
} else {
  sections.forEach((s) => s.classList.add("in-view"));
}

// ------------------------------------------------------------
// Count-up stats: numbers climb to their value on first view.
// ------------------------------------------------------------
function animateCount(el) {
  const target = parseFloat(el.dataset.target);
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  const prefix = el.dataset.prefix || "";
  const suffix = el.dataset.suffix || "";
  const locale = el.dataset.locale || null;
  const duration = 1400;
  const start = performance.now();

  function frame(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3); // ease-out
    const value = target * eased;
    let display = decimals
      ? value.toFixed(decimals)
      : Math.round(value).toString();
    if (locale) display = Number(display).toLocaleString(locale);
    el.textContent = prefix + display + suffix;
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

const counters = document.querySelectorAll("[data-countup]");
if (!prefersReduced && "IntersectionObserver" in window && counters.length) {
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  counters.forEach((c) => countObserver.observe(c));
}
