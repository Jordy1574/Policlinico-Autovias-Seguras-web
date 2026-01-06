// src/components/sections/Nosotros.js
export function Nosotros() {
    return `
        <!-- Hero Section -->
        <section class="relative py-32 md:py-40 bg-gradient-to-b from-[#3BBCA8] to-[#E8F8F5] overflow-hidden">
            <div class="absolute inset-0 opacity-20">
                <img src="/public/Fondo 1.png" alt="Background" class="w-full h-full object-cover object-top">
            </div>
            <div class="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-[#2E1A5F] leading-tight animate-hero-item">
                    Más de 10 años cuidando la<br>salud de los conductores y<br>empresas del Perú
                </h1>
            </div>
            
            <!-- WhatsApp en la esquina -->
            <a href="https://wa.me/51341342660" target="_blank" class="absolute bottom-6 right-6 action-card-btn">
                <div class="bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                    <svg class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                </div>
            </a>
        </section>

        <!-- Quiénes Somos Section -->
        <section class="py-20" style="background: linear-gradient(111.98deg, rgba(250, 255, 254, 0) 25.94%, rgba(255, 255, 255, 0.2) 32.44%), linear-gradient(280.42deg, rgba(255, 251, 251, 0.2) 13.38%, rgba(59, 188, 168, 0.176) 43.9%), linear-gradient(101.84deg, rgba(59, 188, 168, 0.072) 6.29%, rgba(126, 242, 224, 0.6) 28.51%, rgba(238, 249, 247, 0.6) 43.95%);">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="animate-hero-item">
                        <p class="text-[#3BBCA8] font-bold text-sm mb-2 uppercase">QUIÉNES SOMOS</p>
                        <h2 class="text-4xl md:text-5xl font-bold text-[#2E1A5F] mb-6 border-b-4 border-[#3BBCA8] inline-block pb-2">
                            Conócenos
                        </h2>
                        <div class="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Brindamos soluciones empresariales integrales en salud ocupacional y bienestar, orientadas al cuidado de los colaboradores y al fortalecimiento de organizaciones responsables.
                            </p>
                            <p>
                                Contamos con <strong>más de 10 años de experiencia</strong>, trabajando con empresas de diversos sectores, superando las expectativas de nuestros clientes mediante un servicio confiable, eficiente y de calidad.
                            </p>
                        </div>
                    </div>
                    <div class="animate-hero-item" style="animation-delay: 0.2s;">
                        <a href="https://res.cloudinary.com/dtozni6ik/image/upload/v1767594445/Sin_t%C3%ADtulo_myru3d.png" target="_blank" class="block action-card-btn">
                            <img src="https://res.cloudinary.com/dtozni6ik/image/upload/v1767594445/Sin_t%C3%ADtulo_myru3d.png" alt="Equipo Autovías Seguras" class="rounded-3xl shadow-[8px_8px_25px_rgba(59,188,168,0.4)] w-full">
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Nuestro Propósito Section -->
        <section class="py-20 relative overflow-hidden" style="background: linear-gradient(111.98deg, rgba(250, 255, 254, 0) 25.94%, rgba(255, 255, 255, 0.2) 32.44%), linear-gradient(280.42deg, rgba(59, 188, 168, 0.026) 5.35%, rgba(255, 251, 251, 0.056) 36.14%), linear-gradient(101.84deg, rgba(59, 188, 168, 0.072) 6.29%, rgba(126, 242, 224, 0.6) 28.51%, rgba(238, 249, 247, 0.6) 43.95%);">
            <!-- Imagen de fondo -->
            <div class="absolute inset-0 z-0">
                <img src="/public/Fondo 1.png" alt="Fondo" class="w-full h-full object-cover object-top opacity-20">
            </div>
            <div class="relative z-10 max-w-7xl mx-auto px-6">
                <h2 class="text-4xl md:text-5xl font-bold text-[#2E1A5F] text-center mb-16 animate-hero-item">
                    NUESTRO PROPÓSITO
                </h2>

                <!-- Misión -->
                <div class="max-w-2xl mx-auto mb-20 animate-hero-item" style="animation-delay: 0.1s;">
                    <div class="bg-white rounded-3xl p-8 border-4 border-[#3BBCA8] shadow-[8px_8px_25px_rgba(59,188,168,0.4)]">
                        <h3 class="text-3xl font-bold text-[#2E1A5F] text-center mb-6">
                            MISIÓN
                        </h3>
                        <div class="flex justify-center mb-6">
                            <div class="w-20 h-20 bg-[#3BBCA8] rounded-full flex items-center justify-center">
                                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-700 text-center leading-relaxed">
                            Contribuir con el proceso de prevención y lesión de enfermedades relacionados al ámbito laboral, a través de un servicio médico confiable, rápido y calidad.
                        </p>
                    </div>
                </div>

                <!-- Nuestros Valores -->
                <div>
                    <h3 class="text-3xl md:text-4xl font-bold text-[#2E1A5F] text-center mb-4 animate-hero-item" style="animation-delay: 0.2s;">
                        NUESTROS VALORES
                    </h3>
                    <div class="w-24 h-1 bg-[#3BBCA8] mx-auto mb-12"></div>

                    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <!-- Valor 1: Ágiles -->
                        <div class="animate-hero-item" style="animation-delay: 0.3s;">
                            <svg width="0" height="0">
                                <defs>
                                    <clipPath id="valorClip1" clipPathUnits="objectBoundingBox">
                                        <ellipse cx="0.5" cy="0.5" rx="0.48" ry="0.48"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div class="bg-white p-10 text-center border-4 border-[#2E1A5F] shadow-[8px_8px_25px_rgba(59,188,168,0.4)] action-card-btn valor-card valor-clip-1">
                                <h4 class="text-xl font-bold text-[#2E1A5F] uppercase">
                                    Somos Ágiles
                                </h4>
                                <a href="https://res.cloudinary.com/dtozni6ik/image/upload/v1767594901/Sin_1_f7mrzw.png" target="_blank" class="block overflow-hidden">
                                    <img src="https://res.cloudinary.com/dtozni6ik/image/upload/v1767594901/Sin_1_f7mrzw.png" alt="Somos Ágiles" class="w-full h-48 object-cover rounded-xl">
                                </a>
                                <p class="text-gray-700 text-sm leading-relaxed">
                                    Optimizamos procesos para ofrecer una atención ágil y resultados eficientes.
                                </p>
                            </div>
                        </div>

                        <!-- Valor 2: Confiables -->
                        <div class="animate-hero-item" style="animation-delay: 0.4s;">
                            <svg width="0" height="0">
                                <defs>
                                    <clipPath id="valorClip2" clipPathUnits="objectBoundingBox">
                                        <ellipse cx="0.5" cy="0.5" rx="0.48" ry="0.48"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div class="bg-white p-10 text-center border-4 border-[#2E1A5F] shadow-[8px_8px_25px_rgba(59,188,168,0.4)] action-card-btn valor-card valor-clip-2">
                                <h4 class="text-xl font-bold text-[#2E1A5F] uppercase">
                                    Somos Confiables
                                </h4>
                                <a href="https://res.cloudinary.com/dtozni6ik/image/upload/v1767594901/3_qnknh6.png" target="_blank" class="block overflow-hidden">
                                    <img src="https://res.cloudinary.com/dtozni6ik/image/upload/v1767594901/3_qnknh6.png" alt="Somos Confiables" class="w-full h-48 object-cover rounded-xl">
                                </a>
                                <p class="text-gray-700 text-sm leading-relaxed">
                                    Brindamos servicios confiables, con puntualidad y calidad garantizada.
                                </p>
                            </div>
                        </div>

                        <!-- Valor 3: Amables -->
                        <div class="animate-hero-item" style="animation-delay: 0.5s;">
                            <svg width="0" height="0">
                                <defs>
                                    <clipPath id="valorClip3" clipPathUnits="objectBoundingBox">
                                        <ellipse cx="0.5" cy="0.5" rx="0.48" ry="0.48"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div class="bg-white p-10 text-center border-4 border-[#2E1A5F] shadow-[8px_8px_25px_rgba(59,188,168,0.4)] action-card-btn valor-card valor-clip-3">
                                <h4 class="text-xl font-bold text-[#2E1A5F] uppercase">
                                    Somos Amables
                                </h4>
                                <a href="https://res.cloudinary.com/dtozni6ik/image/upload/v1767594901/2_sugjfk.png" target="_blank" class="block overflow-hidden">
                                    <img src="https://res.cloudinary.com/dtozni6ik/image/upload/v1767594901/2_sugjfk.png" alt="Somos Amables" class="w-full h-48 object-cover rounded-xl">
                                </a>
                                <p class="text-gray-700 text-sm leading-relaxed">
                                    Brindamos una atención cercana y humana, acompañando al paciente en todo el proceso.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}
