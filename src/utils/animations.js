import anime from 'animejs';

/**
 * Animation utility functions for GNAN Automations website
 * Provides reusable animation configurations and helper methods
 */

// ===== FADE ANIMATIONS =====

export const fadeIn = (targets, delay = 0) => {
  return anime({
    targets,
    opacity: [0, 1],
    translateY: [20, 0],
    easing: 'easeOutQuad',
    duration: 800,
    delay,
  });
};

export const fadeOut = (targets, delay = 0) => {
  return anime({
    targets,
    opacity: [1, 0],
    translateY: [0, -20],
    easing: 'easeInQuad',
    duration: 600,
    delay,
  });
};

// ===== SLIDE ANIMATIONS =====

export const slideInLeft = (targets, delay = 0) => {
  return anime({
    targets,
    opacity: [0, 1],
    translateX: [-50, 0],
    easing: 'easeOutExpo',
    duration: 1000,
    delay,
  });
};

export const slideInRight = (targets, delay = 0) => {
  return anime({
    targets,
    opacity: [0, 1],
    translateX: [50, 0],
    easing: 'easeOutExpo',
    duration: 1000,
    delay,
  });
};

export const slideInUp = (targets, delay = 0) => {
  return anime({
    targets,
    opacity: [0, 1],
    translateY: [50, 0],
    easing: 'easeOutExpo',
    duration: 1000,
    delay,
  });
};

// ===== SCALE ANIMATIONS =====

export const scaleIn = (targets, delay = 0) => {
  return anime({
    targets,
    opacity: [0, 1],
    scale: [0.8, 1],
    easing: 'easeOutExpo',
    duration: 800,
    delay,
  });
};

export const pulse = (targets, loop = true) => {
  return anime({
    targets,
    scale: [1, 1.05, 1],
    easing: 'easeInOutQuad',
    duration: 2000,
    loop,
  });
};

// ===== STAGGER ANIMATIONS =====

export const staggerFadeIn = (targets, staggerDelay = 100) => {
  return anime({
    targets,
    opacity: [0, 1],
    translateY: [30, 0],
    delay: anime.stagger(staggerDelay),
    easing: 'easeOutExpo',
    duration: 1000,
  });
};

export const staggerScaleIn = (targets, staggerDelay = 100) => {
  return anime({
    targets,
    opacity: [0, 1],
    scale: [0.8, 1],
    delay: anime.stagger(staggerDelay),
    easing: 'easeOutExpo',
    duration: 800,
  });
};

// ===== COUNTER ANIMATION =====

export const animateCounter = (targets, duration = 2000, delay = 0) => {
  return anime({
    targets,
    innerHTML: [0, (el) => el.getAttribute('data-target')],
    round: 1,
    easing: 'easeInOutQuad',
    duration,
    delay,
  });
};

// ===== ROTATE ANIMATIONS =====

export const rotate360 = (targets, duration = 1000, loop = false) => {
  return anime({
    targets,
    rotate: '1turn',
    easing: 'easeInOutQuad',
    duration,
    loop,
  });
};

export const shake = (targets) => {
  return anime({
    targets,
    translateX: [
      { value: -10, duration: 100 },
      { value: 10, duration: 100 },
      { value: -10, duration: 100 },
      { value: 10, duration: 100 },
      { value: 0, duration: 100 },
    ],
    easing: 'easeInOutQuad',
  });
};

// ===== SVG PATH DRAWING =====

export const drawPath = (targets, delay = 0) => {
  return anime({
    targets,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    delay,
  });
};

// ===== MORPHING ANIMATION =====

export const morphPath = (targets, path, duration = 1000) => {
  return anime({
    targets,
    d: path,
    easing: 'easeInOutQuad',
    duration,
  });
};

// ===== SCROLL-BASED ANIMATIONS =====

export const animateOnScroll = (targets, options = {}) => {
  const defaultOptions = {
    threshold: 0.2,
    rootMargin: '0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        anime({
          targets: entry.target,
          opacity: [0, 1],
          translateY: [50, 0],
          easing: 'easeOutExpo',
          duration: 1000,
        });
        observer.unobserve(entry.target);
      }
    });
  }, { ...defaultOptions, ...options });

  if (typeof targets === 'string') {
    document.querySelectorAll(targets).forEach((el) => observer.observe(el));
  } else if (targets instanceof NodeList) {
    targets.forEach((el) => observer.observe(el));
  } else {
    observer.observe(targets);
  }

  return observer;
};

// ===== RIPPLE EFFECT =====

export const createRipple = (event, element, theme = 'light') => {
  const ripple = document.createElement('span');
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.style.position = 'absolute';
  ripple.style.borderRadius = '50%';
  ripple.style.background = theme === 'dark' 
    ? 'rgba(255, 255, 255, 0.6)' 
    : 'rgba(0, 0, 0, 0.3)';
  ripple.style.pointerEvents = 'none';
  ripple.style.transform = 'scale(0)';

  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  element.appendChild(ripple);

  anime({
    targets: ripple,
    scale: [0, 2],
    opacity: [1, 0],
    easing: 'easeOutExpo',
    duration: 600,
    complete: () => ripple.remove(),
  });
};

// ===== LOADING ANIMATION =====

export const showLoader = (targets) => {
  return anime({
    targets,
    rotate: '1turn',
    easing: 'linear',
    duration: 1000,
    loop: true,
  });
};

// ===== TEXT ANIMATIONS =====

export const typeWriter = (element, text, speed = 50) => {
  let index = 0;
  element.innerHTML = '';

  const interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, speed);

  return interval;
};

export const animateTextReveal = (targets) => {
  return anime.timeline({ loop: false })
    .add({
      targets: targets,
      opacity: [0, 1],
      translateY: [30, 0],
      easing: 'easeOutExpo',
      duration: 1200,
      delay: anime.stagger(100, { start: 0 }),
    });
};

// ===== HOVER ANIMATIONS =====

export const hoverScale = (element) => {
  element.addEventListener('mouseenter', () => {
    anime({
      targets: element,
      scale: 1.05,
      duration: 300,
      easing: 'easeOutQuad',
    });
  });

  element.addEventListener('mouseleave', () => {
    anime({
      targets: element,
      scale: 1,
      duration: 300,
      easing: 'easeOutQuad',
    });
  });
};

// ===== PARALLAX EFFECT =====

export const initParallax = (targets, speed = 0.5) => {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const elements = typeof targets === 'string' 
      ? document.querySelectorAll(targets) 
      : [targets];

    elements.forEach((el) => {
      el.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
};

// ===== EXPORT ALL =====

export default {
  fadeIn,
  fadeOut,
  slideInLeft,
  slideInRight,
  slideInUp,
  scaleIn,
  pulse,
  staggerFadeIn,
  staggerScaleIn,
  animateCounter,
  rotate360,
  shake,
  drawPath,
  morphPath,
  animateOnScroll,
  createRipple,
  showLoader,
  typeWriter,
  animateTextReveal,
  hoverScale,
  initParallax,
};
