// src/components/home/Hero.js

const ServiceCard = (title, img, delay) => `
  <div class="action-card-btn animate-hero-item bg-white rounded-[2.5rem] shadow-hard-purple p-7 flex flex-col items-center w-full max-w-[285px] border border-gray-100" style="animation-delay: ${delay}ms">
    <div class="w-full h-28 mb-5 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center">
      <img src="${img}" class="w-full h-full object-cover">
    </div>
    <h3 class="text-[#2E1A5F] font-black text-center text-[18px] leading-tight uppercase tracking-tight">${title}</h3>
  </div>
`;

export const Hero = () => {
  // DISPARADOR AUTOMÁTICO: Espera a que el main.js termine de poner el HTML
  setTimeout(() => {
    const stats = document.querySelectorAll('.count-hero');
    stats.forEach(el => {
      const target = +el.getAttribute('data-target');
      let current = 0;
      const step = target / 140;
      const update = () => {
        current += step;
        if (current < target) {
          el.innerText = Math.ceil(current);
          requestAnimationFrame(update);
        } else { el.innerText = target; }
      };
      update();
    });
  }, 1000);

  return `
    <section class="relative w-full h-screen min-h-[850px] flex flex-col font-poppins overflow-hidden">
      
      <div class="hero-bg-fix">
        <img src="/Fondo 1.png" class="w-full h-full object-cover opacity-75">
        <div class="bg-autovias-double-filter"></div>
      </div>

      <div class="relative z-30 flex flex-col justify-between h-full w-full max-w-[1450px] mx-auto px-6 pt-40 pb-8">
        
        <h1 class="text-3xl md:text-5xl font-black text-[#2E1A5F] text-center tracking-tighter uppercase mt-4 animate-hero-item">
          Confianza y rapidez en un solo lugar
        </h1>

        <div class="w-full flex flex-wrap justify-center gap-10 items-start">
          ${ServiceCard("Examen Médico<br>Ocupacional - Emo", "/Emo.png", 200)}
          ${ServiceCard("Examen Para<br>Licencias - Brevetes", "/Brevetes.png", 400)}
          ${ServiceCard("Examen Médico<br>- SUCAMEC", "/SUCAMEC.png", 600)}
          ${ServiceCard("Escuela De<br>Conductores", "/Conductores.png", 800)}
        </div>

        <div class="flex flex-col sm:flex-row gap-6 items-center justify-center w-full animate-hero-item" style="animation-delay: 1000ms">
          <a href="#" class="bg-[#2E1A5F] text-white font-black py-4 px-20 rounded-2xl shadow-hard-purple hover:scale-105 transition-all text-[16px] tracking-widest uppercase">¡COTIZA AHORA!</a>
          <a href="https://wa.me/51913889497" class="bg-[#30E678] text-white font-black py-4 px-20 rounded-2xl shadow-lg hover:scale-105 transition-all flex items-center gap-3 text-[16px] tracking-widest uppercase">
            <i class="fab fa-whatsapp text-2xl"></i> WHATSAPP
          </a>
        </div>

        <div class="w-full max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl py-6 px-12 flex flex-col md:flex-row justify-around items-center border border-gray-100 animate-hero-item" style="animation-delay: 1200ms">
          <div class="flex flex-col items-center">
            <span class="text-5xl lg:text-7xl font-black text-[#40C3B8]">+<span class="count-hero" data-target="10">0</span></span>
            <p class="text-[12px] font-bold text-gray-400 uppercase mt-1 text-center">Años de experiencia</p>
          </div>
          <div class="flex flex-col items-center border-gray-200 md:border-x-2 w-full md:w-auto px-10">
            <span class="text-5xl lg:text-7xl font-black text-[#40C3B8]">+<span class="count-hero" data-target="1500">0</span></span>
            <p class="text-[12px] font-bold text-gray-400 uppercase mt-1 text-center">Empresas afiliadas</p>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-5xl lg:text-7xl font-black text-[#40C3B8]">+<span class="count-hero" data-target="15">0</span></span>
            <p class="text-[12px] font-bold text-gray-400 uppercase mt-1 text-center">Mil pacientes satisfechos</p>
          </div>
        </div>
      </div>
    </section>
  `;
};