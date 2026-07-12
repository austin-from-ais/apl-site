// Agentic Pedagogy Research Group — shared site behavior

// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Scroll-triggered reveals (no-op if the user prefers reduced motion —
// CSS only applies the hidden state under no-preference)
const revealed = document.querySelectorAll(".reveal");
if (revealed.length && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 }
  );
  revealed.forEach((el) => io.observe(el));
} else {
  revealed.forEach((el) => el.classList.add("in"));
}

// Normalize the hero path so stroke-dasharray: 1 animates the full length
const heroPath = document.querySelector(".path-underline path");
if (heroPath) {
  heroPath.setAttribute("pathLength", "1");
}
