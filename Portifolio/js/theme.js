// Loaded in <head> (without defer) so the saved theme is applied before the first paint.
(() => {
  const STORAGE_KEY = 'portfolio-theme';
  const root = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  root.classList.toggle('dark', savedTheme ? savedTheme === 'dark' : prefersDark);
  const updateIcon = (icon) => {
    const isDark = root.classList.contains('dark');
    icon.className = isDark ? 'ri-sun-line' : 'ri-moon-line';
  };
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    const icon = toggle.querySelector('[data-theme-icon]');
    updateIcon(icon);
    toggle.addEventListener('click', () => {
      const isDark = root.classList.toggle('dark');
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
      updateIcon(icon);
    });
  });
})();