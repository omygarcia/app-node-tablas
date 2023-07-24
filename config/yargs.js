const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type:'number',
                    demandOption:true,
                    default:5,
                    description:'Es la base de la tabla de mutiplicar'
                })
                .option('l',{
                    alias:'lista',
                    type:'boolean',
                    default:false,
                    description:'Muestra la tabla de multiplicar en consola'
                })
                .option('h',{
                    alias:'hasta',
                    type:'number',
                    default:10,
                    description:'limite de la tabla de multiplicar'
                })
                .check((argv,options)=>{
                    if(isNaN(argv.b)){
                        return "La base tiene que ser un numero";
                    }

                    return true;
                })
                .argv;


module.exports = argv;