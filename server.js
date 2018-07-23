

const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

  res.render('home', {
    nombre: 'gustavo vásquez'
  });
});


app.get('/about', (req, res) => {
  res.render('about', {
    imgKali: 'assets/img/kali.jpg'
  });
});

app.get('/kira', (req, res) => {
  // res.send('Hola Gustavo');
  let respuesta = {
    nombre: 'Kira',
    edad: '1',
    url: req.url
  };
  res.send(respuesta);
});

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${ port }`);
});
