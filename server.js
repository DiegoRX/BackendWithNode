const http = require('http') //módulo nativo nodejs
const server = http.createServer() //método para crear el servidor

//el servidor funciona con eventos, el request es lo que llega del request
//el response es lo que le respomdemos al cliente
server.on('request', (req, res) => { 
    res.statusCode = 200 //todo está ok
    res.setHeader('Content-Type', 'text/plain') //tipo de respuesta texto plano

    res.end('hello world\n')
})

server.listen(8000) //El servidor funciona en el puerto 8000
console.log('Servidor en la url http://localhost:8000')