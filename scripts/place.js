// place.js

document.addEventListener('DOMContentLoaded', () => {
  // Datos estáticos simulados
  const countryData = {
    area: '1,000,000 km²',
    population: '50,000,000',
    capital: 'Capital City',
    languages: 'Spanish, English',
    currency: 'Dollar',
    timezone: 'UTC-4',
    callingCode: '+591',
    tld: '.bo'
  };

  const weatherData = {
    temperature: '25°C',
    conditions: 'Sunny',
    wind: '10 km/h NE',
    windchill: '23°C',
    icon: '/images/clima.webp' // Asegúrate que esta imagen exista en la carpeta correcta
  };

  // Rellenar datos país
  document.getElementById('area').textContent = countryData.area;
  document.getElementById('population').textContent = countryData.population;
  document.getElementById('capital').textContent = countryData.capital;
  document.getElementById('languages').textContent = countryData.languages;
  document.getElementById('currency').textContent = countryData.currency;
  document.getElementById('timezone').textContent = countryData.timezone;
  document.getElementById('callingcode').textContent = countryData.callingCode;
  document.getElementById('tld').textContent = countryData.tld;

  // Rellenar datos clima
  document.getElementById('temperature').textContent = weatherData.temperature;
  document.getElementById('conditions').textContent = weatherData.conditions;
  document.getElementById('wind').textContent = weatherData.wind;
  document.getElementById('windchill').textContent = weatherData.windchill;
  document.getElementById('weather-icon').src = weatherData.icon;
  document.getElementById('weather-icon').alt = weatherData.conditions + " icon";

  // Fecha última modificación
  const lastModified = new Date(document.lastModified);
  document.getElementById('last-modified').textContent = lastModified.toLocaleString();
});
