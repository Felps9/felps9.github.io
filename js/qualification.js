(() => {
  const tabs = document.querySelectorAll('[data-tab-target]');
  const contents = document.querySelectorAll('[data-tab-content]');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tabTarget;
      tabs.forEach((item) => {
        const isActive = item === tab;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-selected', String(isActive));
      });
      contents.forEach((content) => {
        content.classList.toggle('hidden', content.dataset.tabContent !== target);
      });
    });
  });
})();