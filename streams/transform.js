const { Transform } = require('stream')

const transformStream = new Transform({
    transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase())
        callback()
    }
})

process.stdin.pipe(transformStream).pipe(process.stdout)
//https://nodejs.org/api/stream.html

//RETOOOOO!!!!! Crear un script en node que reciba 
//una cadena de texto y la convierta en Camelcase usando streams