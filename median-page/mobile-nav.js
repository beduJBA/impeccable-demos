/**
 * Pulse — Shared Mobile Navigation
 * Handles: toggle, overlay, escape, click-outside, link-close, resize-auto-close
 */
(function () {
  'use strict';

  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('.nav-links');
  var overlay = document.querySelector('.nav-overlay');
  if (!toggle || !links) return;

  function openMenu() {
    toggle.setAttribute('aria-expanded', 'true');
    links.setAttribute('aria-hidden', 'false');
    if (overlay) overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    links.setAttribute('aria-hidden', 'true');
    if (overlay) overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  // Toggle on hamburger click
  toggle.addEventListener('click', function () {
    isOpen() ? closeMenu() : openMenu();
  });

  // Close on overlay click
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  // Close on nav link click
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) {
      closeMenu();
    }
  });

  // Close on click outside
  document.addEventListener('click', function (e) {
    if (isOpen() && !toggle.contains(e.target) && !links.contains(e.target)) {
      closeMenu();
    }
  });

  // Auto-close on resize to desktop
  var mql = window.matchMedia('(min-width: 769px)');
  mql.addEventListener('change', function (e) {
    if (e.matches && isOpen()) closeMenu();
  });
})();
