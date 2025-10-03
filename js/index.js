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


  gsap.registerPlugin(MotionPathPlugin);
  const obtainAirplane = document.getElementById("airplane");
  obtainAirplane.style.rotate = '40deg'

//   gsap.set("#airplane", {
//   motionPath: {
//     path: "#flightPath",
//     align: "#flightPath",
//     alignOrigin: [0.5, 0.5],
//   }
// });

  // gsap.to("#airplane", {
  //   duration: 5,
  //   ease: "power1.inOut",
  //   rotate: 45,
  //   motionPath: {
  //     path: "#flightPath",
  //     align: "#flightPath",
  //     alignOrigin: [0.5, 0.5]
  //   }
  // });

  // Dejar el avión en la posición final del path (100%)
gsap.set("#airplane", {
  motionPath: {
    path: "#flightPath",
    align: "#flightPath",
    alignOrigin: [0.5, 0.5],
    end: 1 // indica el final del path
  },
  rotate: 45 // opcional: ajuste fino de la inclinación final
});