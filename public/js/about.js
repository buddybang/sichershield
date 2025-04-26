document.addEventListener('DOMContentLoaded', () => {
  // Select all elements that will be revealed on scroll
  const revealElements = document.querySelectorAll('.reveal');
  const observerOptions = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${idx * 100}ms`;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el, idx) => {
    el.style.animationDelay = `${idx * 100}ms`;
    observer.observe(el);
  });
});
