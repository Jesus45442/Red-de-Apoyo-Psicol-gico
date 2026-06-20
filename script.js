// Menú móvil
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("active"));
});

// Header shadow
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.style.boxShadow =
    window.scrollY > 50 ? "0 4px 25px rgba(10,31,68,0.08)" : "none";
});

// Fade-in observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);
document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// Carrusel testimonios
const slides = document.getElementById("testimonioSlides");
const dots = document.querySelectorAll(".carrusel-dot");
let currentSlide = 0;
const totalSlides = 3;

function goToSlide(index) {
  currentSlide = index;
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}
dots.forEach((dot, index) =>
  dot.addEventListener("click", () => goToSlide(index)),
);
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  goToSlide(currentSlide);
}, 7000);

// FAQ Acordeón
document.querySelectorAll(".faq-pregunta").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const isActive = item.classList.contains("active");
    document
      .querySelectorAll(".faq-item")
      .forEach((i) => i.classList.remove("active"));
    if (!isActive) item.classList.add("active");
  });
});

// Formulario
document.getElementById("formPostula").addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = e.target.querySelector(".btn-form");
  const originalText = btn.textContent;
  btn.textContent = "✓ Postulación enviada";
  btn.style.background = "var(--aguamarina)";
  btn.style.color = "white";
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = "white";
    btn.style.color = "var(--azul-profundo)";
    e.target.reset();
  }, 3500);
});
