const http = require("http");
const hostname = "0.0.0";
const port = 3000;

const server = http
.createServer((requets, responde) => {
    Response.statusCode = 200;
    response.setHeader("COntent-Type", "text/plain");
    response.end("Hola Mundo Un saludo");
});

server,listen(port, hostname, () => {
    console.log('Bienvenido https://${hostname}:${port}/');
});