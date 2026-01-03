import './style.css'
import { Header } from './components/layout/Header.js';
import { Footer } from './components/layout/Footer.js';
// 1. Importamos el Hero y su Lógica
import { Hero, initHeroLogic } from './components/home/Hero.js';

const app = document.querySelector('#app');

// 2. Renderizamos (Ahora incluimos ${Hero()})
app.innerHTML = `
  ${Header()}
  <main id="contenido-principal">
    ${Hero()} 
    
    <div class="py-20 text-center bg-gray-50">
      <h2 class="text-3xl font-bold text-gray-800">Próximamente: Más secciones...</h2>
    </div>

  </main>
  ${Footer()} 
`;

// 3. Activamos la interactividad
// Menú Móvil
const btnMenu = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if(btnMenu && mobileMenu) {
  btnMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Inicializar el Carrusel del Hero
initHeroLogic();