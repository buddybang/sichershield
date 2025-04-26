document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');
  const observerOptions = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Assign a staggered delay before triggering the animation
        entry.target.style.animationDelay = `${index * 100}ms`;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el, i) => {
    // Also set an initial delay if needed (optional)
    el.style.animationDelay = `${i * 100}ms`;
    observer.observe(el);
  });
});
