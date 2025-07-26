// === Tu código existente ===

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

// === Nuevo código para templos ===

// Arreglo de templos
const temples = [
   {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  // Añadí 3 templos más
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, November, 27",
    area: 52000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
  },
  {
    templeName: "Lisbon Portugal",
    location: "Lisbon, Portugal",
    dedicated: "2019, July, 21",
    area: 14000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/lisbon-portugal-temple/lisbon-portugal-temple-6315-main.jpg"
  }
];

// Contenedor donde se insertarán las tarjetas
const templesContainer = document.getElementById('templesContainer');

// Función para crear y mostrar las tarjetas
function displayTemples(templesList) {
  templesContainer.innerHTML = ''; // Limpia contenido previo

  templesList.forEach(temple => {
  const figure = document.createElement('figure');
  figure.classList.add('temple-card');

  figure.innerHTML = `
    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" />
    <figcaption>
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    </figcaption>
  `;

  templesContainer.appendChild(figure);
});

  
}

// Mostrar todos inicialmente
displayTemples(temples);

// Filtrado

function filterOld() {
  const filtered = temples.filter(t => {
    const year = new Date(t.dedicated).getFullYear();
    return year < 1900;
  });
  displayTemples(filtered);
}

function filterNew() {
  const filtered = temples.filter(t => {
    const year = new Date(t.dedicated).getFullYear();
    return year > 2000;
  });
  displayTemples(filtered);
}

function filterLarge() {
  const filtered = temples.filter(t => t.area > 90000);
  displayTemples(filtered);
}

function filterSmall() {
  const filtered = temples.filter(t => t.area < 10000);
  displayTemples(filtered);
}

function filterHome() {
  displayTemples(temples);
}

// Eventos para botones del menú (asumiendo IDs)
document.getElementById('filterOld').addEventListener('click', filterOld);
document.getElementById('filterNew').addEventListener('click', filterNew);
document.getElementById('filterLarge').addEventListener('click', filterLarge);
document.getElementById('filterSmall').addEventListener('click', filterSmall);
document.getElementById('filterHome').addEventListener('click', filterHome);
