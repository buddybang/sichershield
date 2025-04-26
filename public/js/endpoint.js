document.addEventListener('DOMContentLoaded', () => {
  /* === Reveal Animations Using Intersection Observer === */
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

  /* === (Optional) Dynamic Scroll Effect === */
  /* Since background images have been removed, you might not need a scroll effect here.
     If you want to trigger box animations or adjust opacity on scroll, 
     you can include your scroll effect logic. For now, we'll leave that portion out.
  */
});
