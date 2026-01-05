export const Header = () => {
  return `
    <nav class="bg-white border-b border-gray-200 fixed w-full z-50 top-0 left-0 h-24 font-poppins">
      <div class="w-full mx-auto px-4 sm:px-6 lg:px-12 h-full">
        <div class="flex justify-between items-center h-full">
          
          <div class="flex-shrink-0 flex items-center cursor-pointer">
            <a href="#inicio">
              <img class="h-20 w-auto object-contain" src="/logo.png" alt="Logo Autovías Seguras">
            </a>
          </div>

          <div class="hidden lg:flex space-x-8 items-center">
            <a href="#inicio" class="text-brand-purple font-bold text-lg hover:opacity-80 transition">Inicio</a>
            
            <a href="#nosotros" class="text-gray-500 hover:text-brand-purple font-medium text-lg transition">Nosotros</a>
            
            <a href="#servicios" class="text-gray-500 hover:text-brand-purple font-medium text-lg transition flex items-center gap-1">
              Nuestro Servicios
              <svg class="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>

            <a href="#preguntas-frecuentes" class="text-gray-500 hover:text-brand-purple font-medium text-lg transition flex items-center gap-1">
              Preguntas Frecuentes
              <svg class="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>

            <a href="#blog" class="text-gray-500 hover:text-brand-purple font-medium text-lg transition">Nuestro Blog</a>
          </div>

          <div class="hidden lg:flex items-center gap-3">
            <a href="#cotiza" class="bg-brand-dark hover:bg-opacity-90 text-white px-8 py-2.5 rounded-md font-bold text-lg shadow-md transition transform hover:scale-105 tracking-wide">
              COTIZA
            </a>
            <a href="#resultados" class="bg-brand-dark hover:bg-opacity-90 text-white px-8 py-2.5 rounded-md font-bold text-lg shadow-md transition transform hover:scale-105 tracking-wide">
              RESULTADOS
            </a>
          </div>

          <div class="lg:hidden flex items-center">
            <button id="mobile-menu-btn" class="text-brand-dark focus:outline-none">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>

        </div>
      </div>
      
      <div id="mobile-menu" class="hidden lg:hidden bg-whiteQN border-t border-gray-100 absolute w-full shadow-xl">
        <div class="px-4 pt-4 pb-6 space-y-30 flex flex-col font-poppins">
          <a href="#inicio" class="block px-3 py-2 text-brand-purple font-bold bg-gray-50 rounded-md text-lg">Inicio</a>
          <a href="#nosotros" class="block px-3 py-2 text-gray-600 hover:text-brand-purple font-medium text-lg">Nosotros</a>
          <a href="#servicios" class="block px-3 py-2 text-gray-600 hover:text-brand-purple font-medium text-lg">Nuestro Servicios</a>
          <a href="#preguntas-frecuentes" class="block px-3 py-2 text-gray-600 hover:text-brand-purple font-medium text-lg">Preguntas Frecuentes</a>
          <a href="#blog" class="block px-3 py-2 text-gray-600 hover:text-brand-purple font-medium text-lg">Nuestro Blog</a>
          <div class="grid grid-cols-1 gap-3 mt-4 border-t pt-4">
            <a href="#cotiza" class="text-center bg-brand-dark text-white py-3 rounded-md font-bold text-lg">COTIZA</a>
            <a href="#resultados" class="text-center bg-brand-dark text-white py-3 rounded-md font-bold text-lg">RESULTADOS</a>
          </div>
        </div>
      </div>
    </nav>
  `;
}