// Set Current Year
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

// Mobile navigation
const btnNavEl = document.querySelector(".btn-nav");
const hContainerEl = document.querySelector(".header-container");

btnNavEl.addEventListener("click", () => {
  hContainerEl.classList.toggle("nav-open");
});

const alink = document.querySelectorAll("a:link");

alink.forEach((linkEl) => {
  linkEl.addEventListener("click", (e) => {
    e.preventDefault();
    const href = linkEl.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (href.startsWith("#")) {
      const elTo = document.querySelector(href);
      elTo.scrollIntoView({ behavior: "smooth" });
    }
    if (linkEl.classList.contains("nav-link")) {
      hContainerEl.classList.toggle("nav-open");
    }
  });
});

const sHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const en = entries[0];

    if (!en.isIntersecting) {
      document.querySelector(".header").classList.add("sticky");
    } else {
      document.querySelector(".header").classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sHeroEl);
