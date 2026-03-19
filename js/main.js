/* ============================================================
   IT SERVICES CO — Main JS v3
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initMobileNav();
  initReveal();
  initCounters();
  initFAQ();
  initFilterTabs();
  initForms();
  updateYear();
});

/* ── Theme ──────────────────────────────────────────────── */
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const html   = document.documentElement;
  const saved  = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', saved);
  updateToggleIcon(toggle, saved);

  toggle?.addEventListener('click', () => {
    const cur  = html.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateToggleIcon(toggle, next);
  });
}
function updateToggleIcon(btn, theme) {
  if (!btn) return;
  btn.innerHTML = theme === 'dark'
    ? '<i class="bi bi-sun"></i>'
    : '<i class="bi bi-moon-stars"></i>';
}

/* ── Navbar scroll effect ───────────────────────────────── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile Nav ─────────────────────────────────────────── */
function initMobileNav() {
  const toggle  = document.getElementById('navToggle');
  const mobile  = document.getElementById('navMobile');
  if (!toggle || !mobile) return;

  toggle.addEventListener('click', () => {
    const open = mobile.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link click
  mobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobile.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ── Scroll Reveal ──────────────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ── Counter Animations ─────────────────────────────────── */
function initCounters() {
  const nums = document.querySelectorAll('[data-count]');
  if (!nums.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  nums.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const dur    = 1800;
  const start  = performance.now();

  function step(now) {
    const elapsed = Math.min(now - start, dur);
    const progress = easeOutExpo(elapsed / dur);
    const val = Math.round(progress * target);
    el.textContent = val + suffix;
    if (elapsed < dur) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(step);
}

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/* ── FAQ Accordion ──────────────────────────────────────── */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const body    = item.querySelector('.faq-body');
    if (!trigger || !body) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close others
      document.querySelectorAll('.faq-item.open').forEach(o => {
        o.classList.remove('open');
        o.querySelector('.faq-body').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
}

/* ── Service Filter Tabs ────────────────────────────────── */
function initFilterTabs() {
  const tabs  = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.service-card[data-category]');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;

      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.transition = 'opacity 0.3s, transform 0.3s';
        if (match) {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
          card.style.display = '';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            if (tab.dataset.filter !== 'all' && card.dataset.category !== tab.dataset.filter) {
              card.style.display = 'none';
            }
          }, 300);
        }
      });
    });
  });
}

/* ── Forms ──────────────────────────────────────────────── */
function initForms() {
  initContactForm();
  initQuoteForm();
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;

    const btn = form.querySelector('[type=submit]');
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="bi bi-arrow-repeat spin"></i> Sending…';
    btn.disabled = true;

    await new Promise(r => setTimeout(r, 1400));

    const success = document.getElementById('contactSuccess');
    if (success) {
      form.style.opacity = '0';
      form.style.transform = 'scale(0.97)';
      setTimeout(() => {
        form.style.display = 'none';
        success.style.display = 'block';
        success.style.opacity = '0';
        setTimeout(() => { success.style.transition = 'opacity 0.4s'; success.style.opacity = '1'; }, 20);
      }, 300);
    } else {
      btn.innerHTML = '<i class="bi bi-check-circle"></i> Sent!';
      btn.style.background = '#10b981';
      setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; btn.style.background = ''; }, 3000);
    }
  });
}

function initQuoteForm() {
  const form = document.getElementById('quoteForm');
  if (!form) return;

  const steps     = form.querySelectorAll('.q-form-step');
  const stepDots  = document.querySelectorAll('.q-step');
  const nextBtns  = form.querySelectorAll('[data-next]');
  const prevBtns  = form.querySelectorAll('[data-prev]');
  let currentStep = 0;

  function showStep(n) {
    steps.forEach((s, i) => {
      s.style.display = i === n ? 'block' : 'none';
    });
    stepDots.forEach((d, i) => {
      d.classList.toggle('active', i === n);
      d.classList.toggle('done', i < n);
    });
  }

  showStep(0);

  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const curr = form.querySelector('.q-form-step:not([style*="none"])') ||
                   form.querySelectorAll('.q-form-step')[currentStep];
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="bi bi-arrow-repeat spin"></i> Submitting…';
    btn.disabled = true;
    await new Promise(r => setTimeout(r, 1600));

    const panel   = document.getElementById('quoteFormPanel');
    const success = document.getElementById('quoteSuccess');
    if (panel && success) {
      panel.style.opacity = '0';
      setTimeout(() => { panel.style.display = 'none'; success.style.display = 'block'; }, 350);
    }
  });
}

/* ── Validation ─────────────────────────────────────────── */
function validateForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    if (!field.value.trim()) {
      field.classList.add('error');
      valid = false;
    } else {
      field.classList.remove('error');
    }
    if (field.type === 'email' && field.value && !field.value.includes('@')) {
      field.classList.add('error');
      valid = false;
    }
  });
  if (!valid) {
    const first = form.querySelector('.error');
    first?.focus();
  }
  return valid;
}

/* ── Newsletter ─────────────────────────────────────────── */
function handleNewsletter(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.innerHTML = '✓ Subscribed!';
  btn.disabled = true;
  btn.style.background = 'var(--emerald)';
  btn.style.color = '#050810';
  setTimeout(() => {
    btn.innerHTML = 'Subscribe';
    btn.disabled = false;
    btn.style.background = '';
    btn.style.color = '';
  }, 3200);
}

/* ── Year ─────────────────────────────────────────────────── */
function updateYear() {
  document.querySelectorAll('.footer-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

/* ── Spin animation (CSS) ─────────────────────────────────── */
const style = document.createElement('style');
style.textContent = `.spin { display:inline-block; animation: spin 0.8s linear infinite; } @keyframes spin { to { transform: rotate(360deg); } }`;
document.head.appendChild(style);
