const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Es el limite de la tabla",
  })
  .check((argv, options) => {
    if (isNaN(argv.h)) {
      throw "La hasta donde tiene que ser un número";
    }
    return true;
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    return true;
  }).argv;

module.exports = argv;

//option ("l")
//listar
//boolean
//default:false

// console.log("base: yargs", argv.b);

// const [, , arg3 = "base=5"] = process.argv;

// const [, base = 5] = arg3.split("=");

// const base = 5;
