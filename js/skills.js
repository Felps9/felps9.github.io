(() => {
  const groups = document.querySelectorAll('[data-skills-group]');
  const setOpen = (group, isOpen) => {
    group.dataset.open = String(isOpen);
    group.querySelector('[data-skills-toggle]').setAttribute('aria-expanded', String(isOpen));
  };
  groups.forEach((group) => {
    group.querySelector('[data-skills-toggle]').addEventListener('click', () => {
      const willOpen = group.dataset.open !== 'true';
      groups.forEach((other) => setOpen(other, false));
      setOpen(group, willOpen);
    });
  });
})();