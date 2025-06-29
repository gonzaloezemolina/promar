 const carrusel = document.querySelector('.second_carrusel');
  const cards = document.querySelectorAll('.continent_card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      carrusel.style.animationPlayState = 'paused';
    });

    card.addEventListener('mouseleave', () => {
      carrusel.style.animationPlayState = 'running';
    });
  });