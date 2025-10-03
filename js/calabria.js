  gsap.registerPlugin(MotionPathPlugin);
  const obtainAirplane = document.getElementById("airplane1");
  obtainAirplane.style.rotate = '40deg'

//   gsap.set("#airplane", {
//   motionPath: {
//     path: "#flightPath",
//     align: "#flightPath",
//     alignOrigin: [0.5, 0.5],
//   }
// });

  // Dejar el avión en la posición final del path (100%)
gsap.set("#airplane1", {  // Cambié #airplane por #airplane1
  motionPath: {
    path: "#flightPath1",
    align: "#flightPath1",
    alignOrigin: [0.5, 0.5],
    autoRotate: true,  // IMPORTANTE: esto rota el avión según la dirección del path
    end: 1  // 1 = final del path (100%)
  }
});