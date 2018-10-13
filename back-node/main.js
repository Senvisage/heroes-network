const express = require('express');

const app = express();

let heroesData = [
  {
    id: 0,
    name: 'Scene',
    class: 'Bard',
    race: 'Tiefling',
    level: 5,
    pictureUrl:
      'http://www.d20radio.com/main/wp-content/uploads/2017/01/TieflingBard.jpg'
  },
  {
    id: 1,
    name: 'Tourment',
    class: 'Templar',
    race: 'Tiefling',
    level: 4,
    pictureUrl: 'https://i.imgur.com/yWzN0Vj.png'
  },
  {
    id: 2,
    name: 'Tzimisce',
    class: 'Shaman',
    race: 'Draeneï',
    level: 90,
    pictureUrl:
      'https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/c/ce/Unbroken.jpg'
  }
];

app
  // ----- MIDDLEWARES
  // Every once in a while, the server goes MIA (500), else we keep as planned
  .use(function(req, res, next) {
    // On a fumble
    if (Math.floor(Math.random() * 20) + 1 <= 0) {
      res.setHeader('Content-Type', 'text/plain');
      res.status(500).send('Server hiccup !');
    } else {
      next();
    }
  })
  // One middleware to take care of CORS
  .options('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header(
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Origin, Content-Type, Authorization, Content-Length, X-Requested-With'
    );
    res.status(200).send();
  })
  // ----- ROUTING
  .get('/heroes', function(req, res) {
    console.log(`Request for hero list`);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(heroesData));
  })
  .get('/heroes/:id', function(req, res) {
    console.log(`Request for hero #${req.params.id}`);
    if (heroesData[req.params.id] !== undefined) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(JSON.stringify(heroesData[req.params.id]));
    } else {
      res.setHeader('Content-Type', 'text/plain');
      res.status(404).send('Heros introuvable !');
    }
  })
  // 404 management
  .use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
  });
// Our server listens to the 8080 port
app.listen(8080);
