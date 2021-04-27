const http = require('http') //módulo nativo nodejs
const server = http.createServer() //método para crear el servidor

//el servidor funciona con eventos, el request es lo que llega del request
//el response es lo que le respomdemos al cliente
server.on('request', (req, res) => { 
    // res.statusCode = 200 //todo está ok
    // res.setHeader('Content-Type', 'text/plain') //tipo de respuesta texto plano
    if (req.method === 'POST' && req.url == '/echo'){
        let body = [];

        req.on('data', chunk => {
            body.push(chunk)
        })
        .on('end', () => {
            // De esta forma nos ahorramos dos lines de código
            res.writeHead(200, {'Content-type': 'text/plain'})
            // El Stream trae datos tipo Buffer, la forma de convertirlos a string es:
            body = Buffer.concat(body).toString();
            res.end(body)
        })
    } else {
        res.statusCode = 404
        res.end()
    }
})

server.listen(8001) //El servidor funciona en el puerto 8001
console.log('Servidor en la url http://localhost:8001')