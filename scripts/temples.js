// Dynamic year
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Last modified date
const lastModSpan = document.getElementById('lastModified');
lastModSpan.textContent = document.lastModified;

// Hamburger menu logic
const menuButton = document.getElementById('menuButton');
const navMenu = document.getElementById('navMenu');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuButton.textContent = navMenu.classList.contains('open') ? '✖' : '☰';
});
