export const Footer = () => {
  return `
<footer class="bg-[#eef8f8] font-poppins text-gray-700 text-sm mt-auto">

  <div class="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-8">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

      <div class="flex flex-col items-start">
        <img src="/logo.png" class="w-40 mb-4 object-contain" alt="Logo Autovías Seguras">
        <p class="text-xs leading-relaxed text-gray-600">
          Tu policlínico de confianza especializado en exámenes médicos para brevetes,
          salud ocupacional y licencias de armas. Comprometidos con tu seguridad y bienestar.
        </p>
      </div>

      <div>
        <h3 class="font-bold text-lg mb-4 text-[#4c3b93]">Servicios</h3>
        <ul class="space-y-2 text-sm text-gray-600">
          <li><a href="#" class="hover:text-[#4c3b93] transition">Examen Médico Ocupacional</a></li>
          <li><a href="#" class="hover:text-[#4c3b93] transition">Examen para Licencias de Conducir</a></li>
          <li><a href="#" class="hover:text-[#4c3b93] transition">Examen de Sucamec</a></li>
          <li><a href="#" class="hover:text-[#4c3b93] transition">Escuela de conductores</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold text-lg mb-4 text-[#4c3b93]">Legal</h3>
        <ul class="space-y-2 text-sm text-gray-600">
          <li><a href="#" class="hover:text-[#4c3b93] transition">Política de Privacidad</a></li>
          <li><a href="#" class="hover:text-[#4c3b93] transition">Términos y Condiciones</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold text-lg mb-4 text-[#4c3b93]">Contactos</h3>
        
        <div class="flex items-start gap-3 mb-4">
          <svg class="w-6 h-6 flex-shrink-0 mt-1" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fill="#4285F4" d="M18.5 25.5C18.5 25.5 18.5 25.5 18.5 25.5L18.5 25.5S25.364 36.3636 25.364 36.3636S32.227 25.5 32.227 25.5C32.227 25.5 32.227 25.5 32.227 25.5L32.227 25.5C34.619 21.912 36 17.618 36 13C36 5.82 30.18 0 23 0S10 5.82 10 13C10 17.618 11.381 21.912 13.773 25.5L13.773 25.5C13.773 25.5 13.773 25.5 13.773 25.5L18.5 25.5Z" transform="translate(-3 3)"/>
             <circle cx="20" cy="16" r="5" fill="#1967D2"/>
          </svg>
          <p class="text-xs text-gray-600">
            Av. 9 de Octubre 467,<br>San Juan de Lurigancho
          </p>
        </div>

        <div class="flex items-center gap-3">
          <svg class="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="12" cy="12" r="12" fill="#25D366"/>
             <path d="M17.5 14.85c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1s-.5.6-.7.8c-.1.1-.3.1-.5 0-.9-.4-1.5-1-1.9-1.5-.4-.4-.6-1-.8-1.5-.2-.5 0-.8.2-.9.1-.1.2-.2.3-.3.1-.1.2-.2.2-.3s0-.2 0-.3c0-.1-.4-1-.5-1.3-.2-.3-.4-.3-.5-.3-.2 0-.4 0-.6 0s-.5.1-.8.4c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.2.2 2 3 4.9 4.2.7.3 1.2.5 1.6.6.5.1 1.1.1 1.6 0 .5-.1 1.3-.5 1.5-1 .2-.5.2-1 .2-1.1-.1-.2-.4-.3-.6-.4z" fill="white"/>
          </svg>
          <p class="text-xs font-medium text-gray-600">
            913 889 497 | 941 342 860
          </p>
        </div>
      </div>
    </div>

    <div class="bg-gray-200 rounded-lg py-3 px-6 w-full relative flex flex-col md:flex-row items-center justify-center">
      
      <div class="flex items-center gap-4 mb-4 md:mb-0 md:absolute md:left-6">
        
        <a href="#" class="hover:scale-110 transition">
          <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#1877F2"/>
            <path d="M14 19.5v-6h2l.5-2.5h-2.5v-1.5c0-.6.2-1 .9-1h1.1V6.3c-.2 0-.9-.1-1.7-.1-1.7 0-2.9 1-2.9 3v1.8H9v2.5h1.9v6h3.1z" fill="white"/>
          </svg>
        </a>

        <a href="#" class="hover:scale-110 transition">
           <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <linearGradient id="instaGradOficial" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" style="stop-color:#f09433;stop-opacity:1" />
                 <stop offset="25%" style="stop-color:#e6683c;stop-opacity:1" />
                 <stop offset="50%" style="stop-color:#dc2743;stop-opacity:1" />
                 <stop offset="75%" style="stop-color:#cc2366;stop-opacity:1" />
                 <stop offset="100%" style="stop-color:#bc1888;stop-opacity:1" />
               </linearGradient>
             </defs>
             <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#instaGradOficial)"/>
             <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill="white"/>
             <circle cx="17" cy="7" r="1.2" fill="white"/>
           </svg>
        </a>

        <a href="#" class="hover:scale-110 transition">
          <svg class="w-8 h-8" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path fill="#EA4335" d="M24 24L45 10.8V38H33V24L24 30.6L15 24V38H3V10.8L24 24Z"/>
            <path fill="#4285F4" d="M3 10.8L24 24L45 10.8V8C45 5.8 43.2 4 41 4H7C4.8 4 3 5.8 3 8V10.8Z"/>
            <path fill="#34A853" d="M33 38H41C43.2 38 45 36.2 45 34V10.8L24 24L33 30.6V38Z"/>
            <path fill="#FBBC04" d="M3 34C3 36.2 4.8 38 7 38H15V30.6L24 24L3 10.8V34Z"/>
            <path fill="#EA4335" d="M45 10.8L24 24L3 10.8V8C3 6.9 3.5 6 4.3 5.4L24 18.2L43.7 5.4C44.5 6 45 6.9 45 8V10.8Z"/>
          </svg>
        </a>
      </div>

      <p class="text-xs text-gray-500 text-center">
        © 2025 Policlínico Autovías Seguras. Todos los derechos reservados.
      </p>

    </div>

  </div>
</footer>
`;
}