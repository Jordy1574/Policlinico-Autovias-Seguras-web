import './style.css';
import { Header } from './components/layout/Header.js';
import { Hero } from './components/home/Hero.js';
import { PreguntasFrecuentes } from './components/sections/Preguntas Frecuentes.js';
import { Footer } from './components/layout/Footer.js';

const app = document.querySelector('#app');

// Sistema de routing simple
function renderPage() {
  const hash = window.location.hash || '#inicio';
  
  let content = '';
  
  switch(hash) {
    case '#preguntas-frecuentes':
      content = `
        ${Header()}
        <main class="pt-24">
          ${PreguntasFrecuentes()}
        </main>
        ${Footer()}
      `;
      break;
    case '#inicio':
    default:
      content = `
        ${Header()}
        <main>
          ${Hero()}
        </main>
        ${Footer()}
      `;
      break;
  }
  
  app.innerHTML = content;
  
  // Lógica para el menú móvil
  const btnMenu = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if(btnMenu && mobileMenu) {
    btnMenu.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

// Renderizar página inicial
renderPage();

// Escuchar cambios en la URL
window.addEventListener('hashchange', renderPage);


