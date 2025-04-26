document.addEventListener('DOMContentLoaded', () => {
  // Select the dynamic box section
  const dynamicSection = document.querySelector('.dynamic-box-section');
  if (!dynamicSection) return;
  
  // Select the first background image and the transparent boxes
  const firstBgImage = dynamicSection.querySelector('.bg-images .bg-image:nth-child(1)');
  const transparentBoxes = dynamicSection.querySelectorAll('.transparent-box');
  
  // Utility: clamp a value between a min and max
  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

  function onScroll() {
    // Get dynamic section's position relative to viewport
    const rect = dynamicSection.getBoundingClientRect();
    const sectionHeight = dynamicSection.offsetHeight;
    // Calculate progress: when the section top is at window.innerHeight, progress = 0; when it's fully scrolled out, progress = 1
    let progress = (window.innerHeight - rect.top) / sectionHeight;
    progress = clamp(progress, 0, 1);

    // Fade the first background image out from progress 0.5 to 1
    let imgOpacity = progress < 0.5 ? 1 : 1 - ((progress - 0.5) / 0.5);
    firstBgImage.style.opacity = clamp(imgOpacity, 0, 1);

    // Transparent boxes: fade in from progress 0.5 to 1, so that the 2nd background image appears only within these boxes.
    let boxOpacity = progress < 0.5 ? 0 : (progress - 0.5) / 0.5;
    transparentBoxes.forEach(box => {
      box.style.opacity = clamp(boxOpacity, 0, 1);
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll();
});
