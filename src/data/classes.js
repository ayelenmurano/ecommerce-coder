export const classes = [
  { name: "funcional", image: "funcional.jpg" },
  { name: "crossfit", image: "crossfit.jpg" },
  { name: "zumba", image: "zumba.jpg" },
  { name: "yoga", image: "yoga.jpg" },
  { name: "meditacion", image: "meditacion.jpg" },
].map((elem) => ({ id: Math.random(), name: elem }));

export const images = {};

// classes.forEach(({ name, image }) => {
//   images[name] = require("../../assets/images/" + image);
// });
