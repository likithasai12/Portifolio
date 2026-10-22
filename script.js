/**
 * Portfolio JavaScript — Kovvuru Likitha Sai
 * Vanilla JavaScript: navigation, active scroll tracking, email copy, and accessible interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initActiveNavOnScroll();
  initCopyEmail();
  initCurrentYear();
  initSmoothScrollFocus();
});

/**
 * 1. Mobile Navigation Drawer Toggle & Accessibility
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (!toggleBtn || !mobileNav) return;

  function openMenu() {
    toggleBtn.setAttribute('aria-expanded', 'true');
    mobileNav.removeAttribute('hidden');
  }

  function closeMenu() {
    toggleBtn.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('hidden', '');
  }

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close mobile nav when clicking any link inside it
  const mobileLinks = mobileNav.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close when pressing the Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggleBtn.focus();
    }
  });

  // Close when clicking outside of header
  document.addEventListener('click', (e) => {
    const header = document.getElementById('site-header');
    if (header && !header.contains(e.target) && toggleBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });
}

/**
 * 2. Active Section Highlighting on Scroll via IntersectionObserver
 */
function initActiveNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav .mobile-nav-link');

  if (!sections.length || (!desktopLinks.length && !mobileLinks.length)) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -65% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        updateActiveLink(id);
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  function updateActiveLink(activeId) {
    desktopLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

/**
 * 3. Copy Email to Clipboard with Accessible Toast
 */
function copyEmailToClipboard(triggerElement) {
  const btn = triggerElement || document.getElementById('copy-email-btn');
  const copyBtnText = document.getElementById('copy-btn-text');
  const toast = document.getElementById('toast-notice');

  const emailToCopy = (btn && btn.getAttribute('data-email')) || 'likitha.sai.csse@gmail.com';
  let copySuccessful = false;

  // Try modern asynchronous clipboard API first
  if (navigator.clipboard && window.isSecureContext) {
    try {
      navigator.clipboard.writeText(emailToCopy);
      copySuccessful = true;
    } catch (err) {
      // Fallback below
    }
  }

  // Fallback using temporary textarea
  if (!copySuccessful) {
    try {
      const tempTextarea = document.createElement('textarea');
      tempTextarea.value = emailToCopy;
      tempTextarea.style.position = 'fixed';
      tempTextarea.style.top = '-9999px';
      tempTextarea.style.left = '-9999px';
      tempTextarea.setAttribute('readonly', '');
      document.body.appendChild(tempTextarea);
      tempTextarea.select();
      document.execCommand('copy');
      document.body.removeChild(tempTextarea);
      copySuccessful = true;
    } catch (err) {
      console.warn('Clipboard fallback copy error:', err);
    }
  }

  // Visual button feedback
  if (copyBtnText) {
    copyBtnText.textContent = 'Copied!';
  }

  // Visual toast notification
  if (toast) {
    toast.textContent = `Copied "${emailToCopy}" to clipboard!`;
    toast.removeAttribute('hidden');

    if (window._toastTimeout) {
      clearTimeout(window._toastTimeout);
    }
    window._toastTimeout = setTimeout(() => {
      toast.setAttribute('hidden', '');
      if (copyBtnText) {
        copyBtnText.textContent = 'Copy Email';
      }
    }, 2500);
  }
}

// Expose globally for inline onclick fallback
window.copyEmailToClipboard = copyEmailToClipboard;

function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    copyEmailToClipboard(copyBtn);
  });
}

/**
 * 4. Dynamic Year in Footer
 */
function initCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * 5. Smooth Scroll & Focus Management for Accessibility
 */
function initSmoothScrollFocus() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        // If reduced motion is preferred, jump directly
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
          targetEl.scrollIntoView();
        } else {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }

        // Manage focus for keyboard/screen-reader users
        targetEl.setAttribute('tabindex', '-1');
        targetEl.focus({ preventScroll: true });
      }
    });
  });
}
