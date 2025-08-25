// Sélection des éléments
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

// Toggle au clic
burger.addEventListener('click', () => {
  nav.classList.toggle('show');
});
