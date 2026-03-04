/* ── main.js — DetoxDay Interactive Layer ── */

// 1. Announcement Bar close
const announcementBar = document.getElementById('announcement-bar');
const closeBtn = document.getElementById('announcement-close');
if (closeBtn && announcementBar) {
  closeBtn.addEventListener('click', () => {
    announcementBar.style.maxHeight = announcementBar.scrollHeight + 'px';
    requestAnimationFrame(() => {
      announcementBar.style.transition = 'max-height 0.4s ease, opacity 0.4s ease, padding 0.4s ease';
      announcementBar.style.maxHeight = '0';
      announcementBar.style.opacity = '0';
      announcementBar.style.padding = '0';
      announcementBar.style.overflow = 'hidden';
    });
  });
}

// 2. Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

// 3. Intersection Observer — reveal animations
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);
revealEls.forEach(el => revealObserver.observe(el));

// 4. Stats counter animation
function animateCounter(el, target, duration = 1800, suffix = '') {
  const start = performance.now();
  const isDecimal = String(target).includes('.');
  const parsed = parseFloat(target);

  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = eased * parsed;
    el.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = isDecimal ? parsed.toFixed(1) : parsed;
  };
  requestAnimationFrame(update);
}

const statNumbers = document.querySelectorAll('.stat-number');
const statsSection = document.getElementById('stats');
let countersStarted = false;

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersStarted) {
        countersStarted = true;
        statNumbers.forEach(el => {
          const target = el.dataset.target;
          animateCounter(el, target);
        });
      }
    });
  },
  { threshold: 0.4 }
);
if (statsSection) statsObserver.observe(statsSection);

// 5. Progress bar animate on scroll
const progressFill = document.querySelector('.progress-fill');
const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Width is set inline; triggering transition by re-applying
        const width = progressFill.style.width;
        progressFill.style.width = '0';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            progressFill.style.width = width;
          });
        });
        progressObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);
if (progressFill) progressObserver.observe(progressFill);

// 6. Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// 7. Hamburger menu toggle (mobile)
const hamburger = document.getElementById('nav-hamburger');
const navMenu = document.getElementById('nav-menu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-open');
  });
}

// 8. Subtle parallax on hero
const hero = document.getElementById('hero');
window.addEventListener('scroll', () => {
  if (!hero) return;
  const scrolled = window.scrollY;
  if (scrolled < window.innerHeight) {
    hero.style.backgroundPositionY = scrolled * 0.3 + 'px';
  }
}, { passive: true });
