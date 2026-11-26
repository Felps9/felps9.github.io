(() => {
  const slider = document.querySelector('[data-slider]');
  if (!slider) return;
  const track = slider.querySelector('[data-slider-track]');
  const slides = track.children;
  const dotsContainer = slider.querySelector('[data-slider-dots]');
  let currentIndex = 0;
  const dots = Array.from(slides, (_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'slider-dot';
    dot.setAttribute('aria-label', `Ir para o projeto ${index + 1}`);
    dot.addEventListener('click', () => goTo(index));
    dotsContainer.appendChild(dot);
    return dot;
  });
  function goTo(index) {
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === currentIndex));
  }
  slider.querySelector('[data-slider-prev]').addEventListener('click', () => goTo(currentIndex - 1));
  slider.querySelector('[data-slider-next]').addEventListener('click', () => goTo(currentIndex + 1));
  goTo(0);
})();