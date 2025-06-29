// const plane = document.getElementById('plane');
// const cards = document.querySelectorAll('.calabria_card');

// window.addEventListener('scroll', () => {
//   cards.forEach((card, index) => {
//     const rect = card.getBoundingClientRect();
//     if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
//       // Cambiar posición del avión según index
//       const newTop = rect.top + window.scrollY + rect.height / 2;
//       const newLeft = index % 2 === 0 ? '20vw' : '70vw'; // alterna lado
//       plane.style.top = `${newTop}px`;
//       plane.style.left = newLeft;
//       plane.style.transform = `rotate(${index % 2 === 0 ? '45deg' : '-45deg'})`;
//     }
//   });
// });

