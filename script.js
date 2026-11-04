(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const languageButton = document.querySelector('.language-toggle');
  let language = 'en';

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language;
    document.querySelectorAll('[data-en][data-bn]').forEach(element => {
      const value = element.dataset[language];
      if (value !== undefined) element.innerHTML = value;
    });
    if (languageButton) languageButton.textContent = language === 'en' ? 'বাংলা' : 'English';
  }
  if (languageButton) languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'bn' : 'en'));

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  // A subtle custom cursor is enabled only on fine-pointer devices.
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (finePointer && !reduceMotion) {
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (dot && ring) {
      document.body.classList.add('cursor-ready');
      let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
      window.addEventListener('mousemove', event => {
        mouseX = event.clientX; mouseY = event.clientY;
        dot.style.transform = `translate(${mouseX - 2.5}px, ${mouseY - 2.5}px)`;
      }, { passive: true });
      const animateRing = () => {
        ringX += (mouseX - ringX) * 0.16;
        ringY += (mouseY - ringY) * 0.16;
        ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
        requestAnimationFrame(animateRing);
      };
      requestAnimationFrame(animateRing);
      document.querySelectorAll('a,button').forEach(el => {
        el.addEventListener('mouseenter', () => {
          ring.style.width = '45px'; ring.style.height = '45px';
          ring.style.borderColor = 'rgba(0,0,0,.65)';
        });
        el.addEventListener('mouseleave', () => {
          ring.style.width = '32px'; ring.style.height = '32px';
          ring.style.borderColor = 'rgba(0,0,0,.35)';
        });
      });
    }
  }
})();