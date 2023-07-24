const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();
console.log(argv);
//console.log(process.argv);
/*
const [,,arg3 = 'base=5'] = process.argv;
console.log(arg3);

const [,base] = arg3.split("=");
*/
let base = argv.b;
let lista = argv.l;
let hasta = argv.h;
crearArchivo(base,lista,hasta)
    .then((nombreArchivo)=>console.log(nombreArchivo.rainbow+' guardado con exito!'))
    .catch((err)=>console.log(err));

