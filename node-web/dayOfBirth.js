const http = require("http");
const moment = require("moment");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.method === "POST" && req.url == "/echo") {
    let body = [];
    req
      .on("data", chunk => {
        body.push(chunk);
      })
      .on("end", () => {
        res.writeHead(200, { "Content-type": "text/plain" });
        body = Buffer.concat(body).toString();
        if (!moment(body, "YYYY-MM-DD").isValid()) {
          res.end("no es un formato valido. Formato esperado YYYY-MM-DD");
        } else {
          var weekDayName = moment(body).format("dddd");

          res.end("Tu dia de Nacimiento es:" + weekDayName);
        }
      });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(8002);
console.log("Servidor enla url http://localhost:8002");