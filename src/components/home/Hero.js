export const Hero = () => {
  return `
    <section class="relative w-full min-h-screen">
      <img src="/Fondo 1.png" class="absolute inset-0 w-full h-full object-cover z-0">
      
      <div class="absolute inset-0 z-10 bg-autovias-double-filter pointer-events-none"></div>

      <div class="relative z-20">
         </div>
    </section>
  `;
};







export const initHeroLogic = () => {
  const counters = document.querySelectorAll('.counter');
  const speed = 50; 

  const startCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  setTimeout(startCounters, 500);
};
