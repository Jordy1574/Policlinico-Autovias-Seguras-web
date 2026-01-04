import './style.css';
import { Header } from './components/layout/Header.js';
import { Hero } from './components/home/Hero.js';
import { Footer } from './components/layout/Footer.js';

const app = document.querySelector('#app');

// Ensamblado modular de la página
app.innerHTML = `
  ${Header()}
  <main>
    ${Hero()}
    </main>
  ${Footer()}
`;

// Aquí puedes añadir la lógica para que el menú móvil funcione
const btnMenu = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if(btnMenu && mobileMenu) {
  btnMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}


