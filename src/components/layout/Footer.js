export const Footer = () => {
  return `
<footer class="bg-[#eef8f8] font-poppins text-gray-700 text-sm">

  <!-- CONTENIDO PRINCIPAL -->
  <div class="max-w-6xl mx-auto px-6 lg:px-12 py-10
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

    <div>
      <img src="/logo.png" class="w-36 mb-3">
      <p class="text-xs leading-relaxed text-gray-600">
        Tu policlínico de confianza especializado en exámenes médicos para brevetes,
        salud ocupacional y licencias de armas.
      </p>
    </div>

    <div>
      <h3 class="text-brand-purple font-semibold mb-3">Servicios</h3>
      <ul class="space-y-1 text-xs">
        <li>Examen Médico Ocupacional</li>
        <li>Examen para Licencias de Conducir</li>
        <li>Examen de Sucamec</li>
        <li>Escuela de conductores</li>
      </ul>
    </div>

    <div>
      <h3 class="text-brand-purple font-semibold mb-3">Legal</h3>
      <ul class="space-y-1 text-xs">
        <li>Política de Privacidad</li>
        <li>Términos y Condiciones</li>
      </ul>
    </div>

    <div>
      <h3 class="text-brand-purple font-semibold mb-3">Contactos</h3>
      <p class="text-xs">
        📍 Av. 9 de Octubre 467,<br>San Juan de Lurigancho
      </p>
      <p class="text-xs font-medium mt-2">
        📞 913 889 497 | 941 342 860
      </p>
    </div>
  </div>

  <!-- FRANJA GRIS INTERNA -->
  <div class="bg-gray-100">
    <div class="max-w-6xl mx-auto px-6 lg:px-12 py-2
                flex items-center justify-between">

      <!-- ICONOS MINIMALISTAS -->
      <div class="flex gap-3 text-gray-500 text-base">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
        <i class="far fa-envelope"></i>
      </div>

      <p class="text-xs text-gray-400">
        © 2025 Policlínico Autovías Seguras. Todos los derechos reservados.
      </p>

    </div>
  </div>

</footer>
`;
}
