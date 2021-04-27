const fs = require('fs')

//Cuando hacemos código síncrono lo mejor es hacer un try-catch para manejar el error
try{
    //método para poder leer lo que pasa por la terminal: Argumentos en Vector (parámetros por consola)
    const file = process.argv[2]

    const content = fs.readFileSync(file).toString();

    const lines = content.split('\n').length
    console.log(lines)
} catch(err) {
    return console.log(err)
}