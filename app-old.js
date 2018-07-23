
const http = require('http');

http.createServer( (req, res) =>{

  res.writeHead(200, { 'Content-Type': 'application/json' });

  let respuesta = {
    nombre: 'Kali',
    edad: '1',
    url: req.url
  }
  res.write( JSON.stringify(respuesta) );
  res.end();
})
.listen(8081);

console.log('Escuchando al puerto 8081');
