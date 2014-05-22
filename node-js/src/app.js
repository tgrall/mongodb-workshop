'use strict';

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var ComicsRoutes = require('./routes/comicsRoutes');
var CharactersRoutes = require('./routes/charactersRoutes');
var CreatorsRoutes = require('./routes/creatorsRoutes');
var ComicsService = require('./services/comicsService');
var CharactersService = require('./services/charactersService');
var CreatorsService = require('./services/creatorsService');

// Bootstrap Express application
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());

// Configure static content to render Angular.js application
app.use('/', express.static(__dirname + '/../../angular-js/app'));

// Configure services
var comicsService = new ComicsService();
var charactersService = new CharactersService();
var creatorsService = new CreatorsService();

// Configure routes
var charactersRoute = new CharactersRoutes(charactersService);
app.get('/api/characters/random', charactersRoute.iAmFeelingLucky);
app.get('/api/characters/search', charactersRoute.search);
app.get('/api/characters', charactersRoute.getAll);
app.get('/api/characters/:id', charactersRoute.get);
app.put('/api/characters/:id/story', charactersRoute.putStory);
var comicsRoutes = new ComicsRoutes(comicsService);
app.get('/api/comics/search', comicsRoutes.search);
app.get('/api/comics/:id', comicsRoutes.get);
app.get('/api/comics/groupBy/price', comicsRoutes.groupByPrice);
var creatorsRoutes = new CreatorsRoutes(creatorsService);
app.get('/api/creators/search', creatorsRoutes.search);
app.get('/api/creators/:id', creatorsRoutes.get);

module.exports = app;
