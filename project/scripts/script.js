// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Menú responsive
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    // Cerrar menú si se hace clic en un enlace (móvil)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });
  }

  // Formulario de contacto
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Obtener valores
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      // Validación simple
      if (name.length < 2) {
        showMessage('Por favor, ingresa un nombre válido (mínimo 2 caracteres).', true);
        form.name.focus();
        return;
      }
      if (!validateEmail(email)) {
        showMessage('Por favor, ingresa un correo electrónico válido.', true);
        form.email.focus();
        return;
      }
      if (message.length < 10) {
        showMessage('Por favor, ingresa un mensaje más detallado (mínimo 10 caracteres).', true);
        form.message.focus();
        return;
      }

      // Guardar en localStorage
      const contactData = {
        name,
        email,
        message,
        date: new Date().toISOString()
      };

      saveToLocalStorage(contactData);

      // Mostrar mensaje éxito y resetear formulario
      showMessage('¡Gracias por contactarnos! Hemos recibido tu mensaje.', false);
      form.reset();
    });
  }

  // Función para mostrar mensajes (error o éxito)
  function showMessage(text, isError) {
    if (!formMessage) return;
    formMessage.textContent = text;
    formMessage.style.color = isError ? 'crimson' : '#005f99';
  }

  // Validación básica email con regex
  function validateEmail(email) {
    // Simple regex para validar email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }

  // Guardar datos en localStorage (array con key 'contactMessages')
  function saveToLocalStorage(data) {
    let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    messages.push(data);
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    }
    // Dynamic year
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Last modified date
    const lastModSpan = document.getElementById('lastModified');
    lastModSpan.textContent = document.lastModified;

});
