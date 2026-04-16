const btn = document.getElementById('hamburgerBtn');
    const menu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('mobileMenuClose');
    const desktopNavLinks = document.getElementById('desktopNavLinks');
    const mobileMenuLinks = document.getElementById('mobileMenuLinks');

    if (desktopNavLinks && mobileMenuLinks) {
      mobileMenuLinks.innerHTML = desktopNavLinks.innerHTML;

      const mobileLinks = mobileMenuLinks.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          closeMenu();
        });
      });
    }

    function openMenu() {
      menu.classList.add('is-open');
      btn.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      menu.classList.remove('is-open');
      btn.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    btn.addEventListener('click', () => {
      const isOpen = menu.classList.contains('is-open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    closeBtn.addEventListener('click', closeMenu);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        closeMenu();
      }
    });

    document.getElementById('year').textContent = new Date().getFullYear();


    const projectCards = document.querySelectorAll('.card-project');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }

  });
}, {
  threshold: 0.35
});

projectCards.forEach(card => {
  observer.observe(card);
});