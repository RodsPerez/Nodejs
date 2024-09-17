const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar, hasta) => {
  try {
    let salida = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("===============".rainbow);
      console.log(" Tabla del:".rainbow, base);
      console.log("===============".rainbow);
      console.log(salida);
    }

    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //   if (err) throw err;

    //   console.log(`tabla-5${base}.txt creado`);
    // });

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`.rainbow;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
