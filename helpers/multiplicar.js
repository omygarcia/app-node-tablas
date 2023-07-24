const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5,lista = false,hasta = 10) => {
    try
    {
        var cad = ``;
        var consola = ``;

        for(var i=1;i<=hasta;i++)
        {
            cad+=`${base} ${'x'} ${i} ${'='} ${base*i}\n`;
            consola+=`${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
        }
        if(lista == true)
        {
            console.log("=======================".green);
            console.log("     Tabla del: ".green,colors.blue(base));
            console.log("=======================".green);
            console.log(consola);
        }

        /*fs.writeFile(`tabla-${base}.txt`,cad,(err)=>{
            if(err) throw err;

            console.log(`tabla-${base}.txt creada`);
        });
        */
        let nombreArchivo = `./salida/tabla-${base}.txt`;
        fs.writeFileSync(nombreArchivo,cad);
        return nombreArchivo;
    }
    catch(err)
    {
        throw err;
    }
}

module.exports = {
    crearArchivo:crearArchivo
}