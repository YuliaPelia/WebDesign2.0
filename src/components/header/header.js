

const hamburger = document.querySelector('.header__hamburger');
const mobileMenu = document.querySelector('.header__navigation');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('left-0');
  mobileMenu.classList.toggle('left-[-100%]');

});

