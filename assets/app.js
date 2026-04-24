(function () {
  'use strict';

  const STORAGE_KEY = 'lingalarm.lang';
  const DEFAULT_LANG = 'tr';

  function getInitialLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'tr' || saved === 'en') return saved;
    } catch (e) {
      // localStorage unavailable, ignore
    }
    const browserLang = (navigator.language || '').slice(0, 2).toLowerCase();
    if (browserLang === 'tr') return 'tr';
    if (browserLang === 'en') return 'en';
    return DEFAULT_LANG;
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);

    const sections = document.querySelectorAll('[data-lang-section]');
    sections.forEach((el) => {
      if (el.getAttribute('data-lang-section') === lang) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    const buttons = document.querySelectorAll('[data-lang-btn]');
    buttons.forEach((btn) => {
      if (btn.getAttribute('data-lang-btn') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // localStorage unavailable, ignore
    }
  }

  function init() {
    const lang = getInitialLang();
    applyLang(lang);

    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.addEventListener('click', () => {
        applyLang(btn.getAttribute('data-lang-btn'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
