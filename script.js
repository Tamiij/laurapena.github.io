const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach((item) => observer.observe(item));

// Keeps the marquee visually continuous if the browser pauses animations on tab switch.
document.addEventListener('visibilitychange', () => {
  document.body.classList.toggle('is-paused', document.hidden);
});
