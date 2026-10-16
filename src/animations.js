/**
 * Lenis smooth scroll + GSAP ScrollTrigger section reveals
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis = null;
let heroTween = null;

function initLenis() {
  if (prefersReducedMotion()) {
    window.__diplomatScrollTo = (target = 0) => {
      const y = typeof target === 'number' ? target : 0;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };
    return null;
  }

  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.2,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  window.__diplomatLenis = lenis;
  window.__diplomatScrollTo = (target = 0, options = {}) => {
    if (lenis) {
      lenis.scrollTo(target, { duration: 1.1, ...options });
    } else {
      window.scrollTo({
        top: typeof target === 'number' ? target : 0,
        behavior: 'smooth',
      });
    }
  };

  return lenis;
}

function isInHiddenPage(el) {
  const page = el.closest('.page-view');
  return Boolean(page && page.classList.contains('hidden'));
}

function animateSection(section) {
  const items = section.querySelectorAll('[data-reveal-item]');
  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    onComplete: () => {
      section.dataset.revealPlayed = '1';
    },
  });

  tl.fromTo(
    section,
    { autoAlpha: 0, y: 56 },
    { autoAlpha: 1, y: 0, duration: 0.9, clearProps: 'transform' }
  );

  if (items.length) {
    tl.fromTo(
      items,
      { autoAlpha: 0, y: 32 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.09,
        clearProps: 'transform',
      },
      0.15
    );
  }

  return tl;
}

function setupSectionReveals() {
  const sections = document.querySelectorAll('.reveal-section');

  sections.forEach((section) => {
    // Skip SPA pages that are not currently visible
    if (isInHiddenPage(section)) return;

    if (section.dataset.revealPlayed === '1') {
      gsap.set(section, { autoAlpha: 1, y: 0 });
      return;
    }

    if (section.dataset.revealBound === '1') return;
    section.dataset.revealBound = '1';

    if (section.classList.contains('reveal-hero')) {
      gsap.set(section, { autoAlpha: 1, y: 0 });
      const heroBits = section.querySelectorAll('[data-reveal-hero]');
      if (heroBits.length && !prefersReducedMotion()) {
        gsap.fromTo(
          heroBits,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            stagger: 0.12,
            ease: 'power3.out',
            delay: 0.12,
            clearProps: 'transform',
            onComplete: () => {
              section.dataset.revealPlayed = '1';
            },
          }
        );
      } else {
        section.dataset.revealPlayed = '1';
      }
      return;
    }

    if (prefersReducedMotion()) {
      gsap.set(section, { autoAlpha: 1, y: 0 });
      section.dataset.revealPlayed = '1';
      return;
    }

    gsap.set(section, { autoAlpha: 0, y: 56 });

    ScrollTrigger.create({
      trigger: section,
      start: 'top 84%',
      once: true,
      onEnter: () => animateSection(section),
    });
  });
}

function setupHeroParallax() {
  const heroImg = document.getElementById('hero-parallax-img');
  const heroSection = heroImg?.closest('section');
  if (!heroImg || !heroSection || prefersReducedMotion()) return;

  heroTween?.scrollTrigger?.kill();
  heroTween?.kill();

  gsap.set(heroImg, { yPercent: 0 });

  heroTween = gsap.to(heroImg, {
    yPercent: 16,
    ease: 'none',
    scrollTrigger: {
      trigger: heroSection,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
}

function refreshAnimations() {
  requestAnimationFrame(() => {
    // Allow newly visible SPA pages to bind triggers
    document.querySelectorAll('.page-view:not(.hidden) .reveal-section').forEach((section) => {
      if (section.dataset.revealPlayed !== '1') {
        delete section.dataset.revealBound;
      }
    });

    setupSectionReveals();
    ScrollTrigger.refresh();
    lenis?.resize();
  });
}

function init() {
  initLenis();
  setupSectionReveals();
  setupHeroParallax();

  window.__diplomatRefreshAnimations = refreshAnimations;

  window.addEventListener('load', () => {
    refreshAnimations();
  });

  const grid = document.getElementById('properties-grid');
  if (grid) {
    const mo = new MutationObserver(() => {
      ScrollTrigger.refresh();
    });
    mo.observe(grid, { childList: true });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
