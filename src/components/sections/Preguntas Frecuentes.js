// src/components/sections/Preguntas Frecuentes.js
export function PreguntasFrecuentes() {
    return `
        <section id="preguntas-frecuentes" class="relative py-20 bg-gradient-to-b from-[#3BBCA8] via-[#E8F8F5] to-white">
            <div class="max-w-6xl mx-auto px-6">
                <!-- Título Principal -->
                <div class="text-center mb-10 animate-hero-item">
                    <h2 class="text-5xl md:text-6xl font-bold text-[#2E1A5F] mb-3">
                        Resolvemos tus Dudas
                    </h2>
                    <p class="text-[#2E1A5F]/60 text-base">
                        Encuentra respuestas rápidas a las preguntas más comunes sobre nuestros servicios
                    </p>
                </div>

                <!-- Barra de Búsqueda -->
                <div class="max-w-3xl mx-auto mb-8 animate-hero-item" style="animation-delay: 0.2s;">
                    <div class="relative">
                        <input 
                            type="text" 
                            id="faq-search"
                            placeholder="¿Qué estás buscando? (Ej. Horarios, Precios, Requisitos)"
                            class="w-full px-6 py-4 pl-12 rounded-full bg-white border-2 border-[#3BBCA8] focus:outline-none focus:border-[#2E1A5F] shadow-lg"
                        />
                        <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#2E1A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>

                <!-- Botones de Categorías -->
                <div class="flex flex-wrap justify-center gap-4 mb-12 animate-hero-item" style="animation-delay: 0.3s;">
                    <button class="faq-category-btn px-6 py-2 rounded-full bg-[#2E1A5F] text-white font-semibold action-card-btn active" data-category="general">
                        General
                    </button>
                    <button class="faq-category-btn px-6 py-2 rounded-full bg-white text-[#2E1A5F] font-semibold border-2 border-[#2E1A5F] action-card-btn" data-category="brevetes">
                        Brevetes
                    </button>
                    <button class="faq-category-btn px-6 py-2 rounded-full bg-white text-[#2E1A5F] font-semibold border-2 border-[#2E1A5F] action-card-btn" data-category="empresas">
                        Empresas
                    </button>
                    <button class="faq-category-btn px-6 py-2 rounded-full bg-white text-[#2E1A5F] font-semibold border-2 border-[#2E1A5F] action-card-btn" data-category="resultados">
                        Resultados
                    </button>
                </div>

                <!-- Preguntas y Respuestas (Acordeón) -->
                <div class="max-w-4xl mx-auto space-y-4 mb-16" id="faq-container">
                    <!-- Pregunta 1 -->
                    <div class="faq-item bg-white rounded-2xl shadow-hard-purple overflow-hidden animate-hero-item" data-category="general" style="animation-delay: 0.4s;">
                        <button class="faq-question w-full px-6 py-5 flex justify-between items-center text-left hover:bg-[#3BBCA8]/10 transition-colors">
                            <span class="text-lg font-semibold text-[#2E1A5F]">¿Necesito sacar cita o es por orden de llegada?</span>
                            <svg class="faq-icon w-6 h-6 text-[#3BBCA8] transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer hidden px-6 pb-5 text-[#2E1A5F]/80">
                            <p>Trabajamos por orden de llegada. No necesitas sacar cita previa, puedes acercarte directamente a nuestras instalaciones en el horario de atención. Te recomendamos llegar temprano para evitar tiempos de espera prolongados.</p>
                        </div>
                    </div>

                    <!-- Pregunta 2 -->
                    <div class="faq-item bg-white rounded-2xl shadow-hard-purple overflow-hidden animate-hero-item" data-category="general" style="animation-delay: 0.5s;">
                        <button class="faq-question w-full px-6 py-5 flex justify-between items-center text-left hover:bg-[#3BBCA8]/10 transition-colors">
                            <span class="text-lg font-semibold text-[#2E1A5F]">¿Dónde están ubicados exactamente?</span>
                            <svg class="faq-icon w-6 h-6 text-[#3BBCA8] transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer hidden px-6 pb-5 text-[#2E1A5F]/80">
                            <p>Estamos ubicados en Av. de Octubre 469, Urb. Miraflores, Castilla - Piura. Frente al Banco de la Nación. Puedes encontrarnos fácilmente usando Google Maps o Waze.</p>
                        </div>
                    </div>

                    <!-- Pregunta 3 -->
                    <div class="faq-item bg-white rounded-2xl shadow-hard-purple overflow-hidden animate-hero-item" data-category="brevetes" style="animation-delay: 0.6s;">
                        <button class="faq-question w-full px-6 py-5 flex justify-between items-center text-left hover:bg-[#3BBCA8]/10 transition-colors">
                            <span class="text-lg font-semibold text-[#2E1A5F]">¿Aceptan tarjetas de crédito?</span>
                            <svg class="faq-icon w-6 h-6 text-[#3BBCA8] transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer hidden px-6 pb-5 text-[#2E1A5F]/80">
                            <p>Sí, aceptamos pagos en efectivo, tarjetas de débito y crédito Visa/Mastercard, y transferencias bancarias. También contamos con Yape y Plin para tu comodidad.</p>
                        </div>
                    </div>

                    <!-- Pregunta 4 -->
                    <div class="faq-item bg-white rounded-2xl shadow-hard-purple overflow-hidden animate-hero-item" data-category="general" style="animation-delay: 0.7s;">
                        <button class="faq-question w-full px-6 py-5 flex justify-between items-center text-left hover:bg-[#3BBCA8]/10 transition-colors">
                            <span class="text-lg font-semibold text-[#2E1A5F]">¿Cuál es su horario de atención?</span>
                            <svg class="faq-icon w-6 h-6 text-[#3BBCA8] transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer hidden px-6 pb-5 text-[#2E1A5F]/80">
                            <p>Nuestro horario de atención es de Lunes a Viernes de 8:00 AM a 6:00 PM, y Sábados de 8:00 AM a 1:00 PM. Domingos y feriados permanecemos cerrados.</p>
                        </div>
                    </div>

                    <!-- Pregunta 5 -->
                    <div class="faq-item bg-white rounded-2xl shadow-hard-purple overflow-hidden animate-hero-item" data-category="empresas" style="animation-delay: 0.8s;">
                        <button class="faq-question w-full px-6 py-5 flex justify-between items-center text-left hover:bg-[#3BBCA8]/10 transition-colors">
                            <span class="text-lg font-semibold text-[#2E1A5F]">¿En cuánto tiempo entregan los resultados?</span>
                            <svg class="faq-icon w-6 h-6 text-[#3BBCA8] transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer hidden px-6 pb-5 text-[#2E1A5F]/80">
                            <p>Los exámenes médicos para brevetes se entregan el mismo día. Para exámenes ocupacionales y otros servicios, el tiempo puede variar entre 24 a 48 horas hábiles dependiendo del tipo de evaluación.</p>
                        </div>
                    </div>
                </div>

                <!-- Call to Action - No encontraste tu respuesta -->
                <div class="max-w-3xl mx-auto bg-[#3BBCA8]/20 rounded-3xl p-8 text-center shadow-hard-purple animate-hero-item" style="animation-delay: 0.9s;">
                    <div class="mb-6">
                        <svg class="w-16 h-16 mx-auto text-[#3BBCA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-[#2E1A5F] mb-3">
                        ¿No encontraste tu respuesta?
                    </h3>
                    <p class="text-[#2E1A5F]/70 mb-6">
                        Habla con una asesor o envíanos tus dudas y resuelve todas tus dudas
                    </p>
                    <a 
                        href="https://wa.me/51341342660" 
                        target="_blank"
                        class="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg action-card-btn shadow-hard-purple"
                    >
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp Directo
                    </a>
                </div>
            </div>
        </section>

        <script>
            // Funcionalidad del acordeón
            document.addEventListener('DOMContentLoaded', () => {
                const faqQuestions = document.querySelectorAll('.faq-question');
                
                faqQuestions.forEach(question => {
                    question.addEventListener('click', () => {
                        const faqItem = question.parentElement;
                        const answer = faqItem.querySelector('.faq-answer');
                        const icon = question.querySelector('.faq-icon');
                        
                        // Toggle la respuesta actual
                        answer.classList.toggle('hidden');
                        icon.classList.toggle('rotate-180');
                        
                        // Cerrar otras respuestas abiertas (opcional)
                        faqQuestions.forEach(otherQuestion => {
                            if (otherQuestion !== question) {
                                const otherItem = otherQuestion.parentElement;
                                const otherAnswer = otherItem.querySelector('.faq-answer');
                                const otherIcon = otherQuestion.querySelector('.faq-icon');
                                
                                otherAnswer.classList.add('hidden');
                                otherIcon.classList.remove('rotate-180');
                            }
                        });
                    });
                });

                // Funcionalidad de filtro por categorías
                const categoryButtons = document.querySelectorAll('.faq-category-btn');
                const faqItems = document.querySelectorAll('.faq-item');
                
                categoryButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        const category = button.dataset.category;
                        
                        // Actualizar estilos de botones
                        categoryButtons.forEach(btn => {
                            btn.classList.remove('bg-[#2E1A5F]', 'text-white', 'active');
                            btn.classList.add('bg-white', 'text-[#2E1A5F]');
                        });
                        button.classList.add('bg-[#2E1A5F]', 'text-white', 'active');
                        button.classList.remove('bg-white', 'text-[#2E1A5F]');
                        
                        // Filtrar preguntas
                        if (category === 'general') {
                            faqItems.forEach(item => item.style.display = 'block');
                        } else {
                            faqItems.forEach(item => {
                                if (item.dataset.category === category) {
                                    item.style.display = 'block';
                                } else {
                                    item.style.display = 'none';
                                }
                            });
                        }
                    });
                });

                // Funcionalidad de búsqueda
                const searchInput = document.getElementById('faq-search');
                
                searchInput.addEventListener('input', (e) => {
                    const searchTerm = e.target.value.toLowerCase();
                    
                    faqItems.forEach(item => {
                        const questionText = item.querySelector('.faq-question span').textContent.toLowerCase();
                        const answerText = item.querySelector('.faq-answer p').textContent.toLowerCase();
                        
                        if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
        </script>
    `;
}
