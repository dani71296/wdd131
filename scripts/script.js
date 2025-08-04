const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Poblar select de productos dinámicamente
const productSelect = document.getElementById('product');

products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;       // Valor será el id
  option.textContent = product.name; // Mostrar el nombre
  productSelect.appendChild(option);
});
// Código para footer dinámico

const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModSpan = document.getElementById('lastModified');
lastModSpan.textContent = document.lastModified;