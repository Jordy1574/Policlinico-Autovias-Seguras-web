import './style.css'
// 1. Importamos los componentes
import { Header } from './components/layout/Header.js';
import { Footer } from './components/layout/Footer.js';
// 2. Definimos dónde vamos a renderizar
const app = document.querySelector('#app');

// 3. Inyectamos el HTML (Renderizado)
app.innerHTML = `
  ${Header()}
  <main id="contenido-principal" class="pt-20">
    <div class="h-screen flex items-center justify-center bg-gray-100">
      <h1 class="text-2xl text-gray-400">Pronto: Banner Principal...</h1>
    </div>
  </main>
${Footer()} `;

// 4. Lógica de interactividad (Después de renderizar)
// Activamos el menú móvil después de que el HTML ya existe en el DOM
const btnMenu = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if(btnMenu && mobileMenu) {
  btnMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}