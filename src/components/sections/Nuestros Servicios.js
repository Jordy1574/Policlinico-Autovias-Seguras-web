// src/components/sections/Nuestros Servicios.js
export function NuestrosServicios() {
    return `
        <!-- Sección del Título con fondo turquesa -->
        <section class="relative py-24 md:py-32 bg-gradient-to-b from-[#3BBCA8] to-[#E8F8F5]">
            <div class="max-w-7xl mx-auto px-6">
                <div class="text-center animate-hero-item">
                    <h2 class="text-4xl md:text-6xl lg:text-7xl font-bold text-[#2E1A5F] leading-tight mb-8">
                        Soluciones Integrales de<br>Salud y Seguridad Vial
                    </h2>
                    <p class="text-lg md:text-2xl text-[#2E1A5F]/70 max-w-3xl mx-auto">
                        todo lo que necesitas en un solo lugar. autorizados por MTC, MINSA y SUCAMEC
                    </p>
                </div>
            </div>
            
            <!-- WhatsApp en la esquina derecha de esta sección -->
            <a href="https://wa.me/51341342660" target="_blank" class="absolute bottom-6 right-6 action-card-btn">
                <div class="bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                    <svg class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                </div>
            </a>
        </section>

        <!-- Sección de Servicios con fondo blanco -->
        <section id="servicios" class="relative py-16 bg-white">
            <div class="max-w-7xl mx-auto px-6">
                <!-- Grid de Servicios -->
                <div class="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
                    
                    <!-- Servicio 1: Medicina Ocupacional -->
                    <div class="bg-white rounded-3xl shadow-[8px_8px_30px_rgba(0,0,0,0.15)] overflow-hidden action-card-btn animate-hero-item" style="animation-delay: 0.1s;">
                        <div class="relative h-48 overflow-hidden">
                            <img src="/public/EMO.png" alt="Medicina Ocupacional" class="w-full h-full object-cover object-top">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                        
                        <!-- Ícono flotante -->
                        <div class="relative -mt-12 flex justify-center">
                            <div class="bg-[#3BBCA8] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </div>
                        </div>

                        <div class="p-6 pt-4">
                            <h3 class="text-2xl font-bold text-[#2E1A5F] text-center mb-3">
                                Medicina Ocupacional
                            </h3>
                            <p class="text-gray-600 text-center text-sm mb-5">
                                Evaluaciones médicas completas para garantizar la salud de tus colaboradores.
                            </p>
                            
                            <ul class="space-y-3 mb-6">
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-[#3BBCA8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700 text-sm">Exámenes de Ingreso/Retiro</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-[#3BBCA8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700 text-sm">Campañas de Salud</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-[#3BBCA8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700 text-sm">Resultados en 24h</span>
                                </li>
                            </ul>

                            <button class="w-full py-3 border-2 border-[#2E1A5F] text-[#2E1A5F] rounded-lg font-semibold hover:bg-[#2E1A5F] hover:text-white transition">
                                Ver Más Detalles
                            </button>
                        </div>
                    </div>

                    <!-- Servicio 2: Licencias de Conducir (Brevetes) -->
                    <div class="bg-white rounded-3xl shadow-[8px_8px_30px_rgba(0,0,0,0.15)] overflow-hidden action-card-btn animate-hero-item" style="animation-delay: 0.2s;">
                        <div class="relative h-48 overflow-hidden">
                            <img src="/public/Brevetes.png" alt="Licencias de Conducir" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                        
                        <!-- Ícono flotante -->
                        <div class="relative -mt-12 flex justify-center">
                            <div class="bg-[#3BBCA8] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                                </svg>
                            </div>
                        </div>

                        <div class="p-6 pt-4">
                            <h3 class="text-2xl font-bold text-[#2E1A5F] text-center mb-3">
                                Licencias de Conducir (Brevetes)
                            </h3>
                            <p class="text-gray-600 text-center text-sm mb-5">
                                Obtén o revalida tu licencia de conducir sin complicaciones.
                            </p>
                            
                            <ul class="space-y-3 mb-6">
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-[#3BBCA8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700 text-sm">Examen Médico A1, A2, A3</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-[#3BBCA8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700 text-sm">Psicosomático</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-[#3BBCA8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700 text-sm">Registro biométrico MTC</span>
                                </li>
                            </ul>

                            <button class="w-full py-3 border-2 border-[#2E1A5F] text-[#2E1A5F] rounded-lg font-semibold hover:bg-[#2E1A5F] hover:text-white transition">
                                Ver Más Detalles
                            </button>
                        </div>
                    </div>

                    <!-- Servicio 3: Examen de Sucamec -->
                    <div class="bg-white rounded-3xl shadow-[8px_8px_30px_rgba(0,0,0,0.15)] overflow-hidden action-card-btn animate-hero-item" style="animation-delay: 0.3s;">
                        <div class="relative h-48 overflow-hidden">
                            <img src="/public/SUCAMEC.png" alt="Examen Sucamec" class="w-full h-full object-top">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                        
                        <!-- Ícono flotante -->
                        <div class="relative -mt-12 flex justify-center">
                            <div class="bg-[#3BBCA8] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                        </div>

                        <div class="p-6 pt-4">
                            <h3 class="text-2xl font-bold text-[#2E1A5F] text-center mb-3">
                                Examen de Sucamec
                            </h3>
                            <p class="text-gray-600 text-center text-sm mb-5">
                                Evaluación obligatoria para portar armas y servicios de seguridad.
                            </p>
                            
                            <ul class="space-y-3 mb-6">
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-[#3BBCA8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700 text-sm">Salud Mental</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-[#3BBCA8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700 text-sm">Psicología</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-[#3BBCA8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700 text-sm">Certificado válido a nivel nacional</span>
                                </li>
                            </ul>

                            <button class="w-full py-3 border-2 border-[#2E1A5F] text-[#2E1A5F] rounded-lg font-semibold hover:bg-[#2E1A5F] hover:text-white transition">
                                Ver Más Detalles
                            </button>
                        </div>
                    </div>

                    <!-- Servicio 4: Escuela de Conductores -->
                    <div class="bg-white rounded-3xl shadow-[8px_8px_30px_rgba(0,0,0,0.15)] overflow-hidden action-card-btn animate-hero-item" style="animation-delay: 0.4s;">
                        <div class="relative h-48 overflow-hidden">
                            <img src="/public/Conductores.png" alt="Escuela de Conductores" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                        
                        <!-- Ícono flotante -->
                        <div class="relative -mt-12 flex justify-center">
                            <div class="bg-[#3BBCA8] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                                </svg>
                            </div>
                        </div>

                        <div class="p-6 pt-4">
                            <h3 class="text-2xl font-bold text-[#2E1A5F] text-center mb-3">
                                Escuela de Conductores
                            </h3>
                            <p class="text-gray-600 text-center text-sm mb-5">
                                Capacitación profesional para mejorar tus habilidades al volante.
                            </p>
                            
                            <ul class="space-y-3 mb-6">
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-[#3BBCA8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700 text-sm">Cursos de Recategorización</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-[#3BBCA8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700 text-sm">Taller Cambiemos de Actitud</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-[#3BBCA8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700 text-sm">Manejo defensivo</span>
                                </li>
                            </ul>

                            <button class="w-full py-3 border-2 border-[#2E1A5F] text-[#2E1A5F] rounded-lg font-semibold hover:bg-[#2E1A5F] hover:text-white transition">
                                Ver Más Detalles
                            </button>
                        </div>
                    </div>

                </div>
            </div>
                </div>
            </div>

        </section>
    `;
}
