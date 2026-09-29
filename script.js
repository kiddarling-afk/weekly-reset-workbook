const menuToggle = document.querySelector('.menu-toggle');
const siteMenu = document.querySelector('.site-nav');

if (menuToggle && siteMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.innerHTML = isOpen ? 'Close <span aria-hidden="true">−</span>' : 'Menu <span aria-hidden="true">+</span>';
  });

  siteMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.innerHTML = 'Menu <span aria-hidden="true">+</span>';
    });
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();
