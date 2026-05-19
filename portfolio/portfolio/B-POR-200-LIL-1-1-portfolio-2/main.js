// ── BARRE DE PROGRESSION AU SCROLL ──
const progressBar = document.createElement('div');
Object.assign(progressBar.style, {
  position: 'fixed',
  top: '0',
  left: '0',
  height: '2px',
  background: 'linear-gradient(90deg, var(--accent), var(--accent3))',
  zIndex: '999',
  transition: 'width 0.1s',
  width: '0%',
});
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = Math.min(pct, 100) + '%';
}, { passive: true });

// ── COMPRESSION DE L'IMAGE HERO ──
// Redimensionne la photo à max 280x280 et la recompresse en JPEG 80%
window.addEventListener('load', () => {
  const heroImg = document.querySelector('.hero-photo');
  if (!heroImg || !heroImg.complete || heroImg.naturalWidth === 0) return;

  // Seulement si l'image est plus grande que nécessaire
  if (heroImg.naturalWidth <= 560) return; // déjà petite, pas besoin

  const canvas = document.createElement('canvas');
  const MAX = 560; // 2x pour les écrans Retina
  const ratio = Math.min(MAX / heroImg.naturalWidth, MAX / heroImg.naturalHeight);
  canvas.width = Math.round(heroImg.naturalWidth * ratio);
  canvas.height = Math.round(heroImg.naturalHeight * ratio);

  const ctx = canvas.getContext('2d');
  ctx.drawImage(heroImg, 0, 0, canvas.width, canvas.height);

  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    heroImg.src = url;
  }, 'image/webp', 0.82);
});

// ── MENU HAMBURGER ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── ANIMATIONS AU SCROLL (FADE IN) ──
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// ── ANIMATION DES BARRES DE COMPÉTENCES ──
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.width = (bar.dataset.width || 0) + '%';
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-card').forEach(card => barObserver.observe(card));

// ── ACTIVE NAV AU SCROLL ──
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--text)' : '';
  });
}, { passive: true });

// ── FORMULAIRE DE CONTACT ──
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const vals = ['f-name', 'f-email', 'f-subject', 'f-message'].map(id => document.getElementById(id).value.trim());
  if (vals.some(v => !v)) return;
  const msg = document.getElementById('form-success');
  msg.style.display = 'block';
  this.reset();
  setTimeout(() => { msg.style.display = 'none'; }, 5000);
});
