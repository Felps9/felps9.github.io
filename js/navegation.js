(() => {
  const header = document.getElementById('header');
  const menu = document.getElementById('nav-menu');
  const menuToggle = document.getElementById('nav-toggle');
  const menuIcon = menuToggle.querySelector('i');
  const links = document.querySelectorAll('.nav-link');
  const scrollUp = document.getElementById('scroll-up');
  const sections = document.querySelectorAll('section[id]');
  const setMenuOpen = (isOpen) => {
    menu.classList.toggle('hidden', !isOpen);
    menu.classList.toggle('flex', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    menuIcon.className = isOpen ? 'ri-close-line' : 'ri-menu-line';
  };
  menuToggle.addEventListener('click', () => {
    setMenuOpen(menu.classList.contains('hidden'));
  });
  links.forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));
  const highlightActiveLink = () => {
    const scrollPosition = window.scrollY + header.offsetHeight + 60;
    sections.forEach((section) => {
      const isCurrent =
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight;
      const link = document.querySelector(`.nav-link[href="#${section.id}"]`);
      link?.classList.toggle('is-active', isCurrent);
    });
  };
  const handleScroll = () => {
    header.classList.toggle('header-scrolled', window.scrollY > 50);
    scrollUp.classList.toggle('is-visible', window.scrollY > 500);
    highlightActiveLink();
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
  document.getElementById('current-year').textContent = new Date().getFullYear();
})();