const http = require("http");
const hostname = "0.0.0.0";
const port = 3000;

const server = http
.createServer((requets, response) => {
    response.statusCode = 200;
    response.setHeader("COntent-Type", "text/plain");
    response.end("Hola Mundo Un saludo");
});

server.listen(port, hostname, () => {
    console.log('Buenvenido http://${hostname}:${port}/');
});