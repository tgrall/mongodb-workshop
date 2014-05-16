'use strict';

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var ComicsRoutes = require('./routes/comicsRoutes');
var CharactersRoutes = require('./routes/charactersRoutes');
var ComicsService = require('./services/comicsService');
var CharactersService = require('./services/charactersService');

// Bootstrap Express application
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());

// Configure static content to render Angular.js application
app.use('/', express.static(__dirname + '/../../angular-js/app'));

// Configure services
var comicsService = new ComicsService();
var charactersService = new CharactersService();

// Configure routes
var comicsRoutes = new ComicsRoutes(comicsService);
app.get('/api/comics/random', comicsRoutes.iAmFeelingLucky);
app.get('/api/comics/search', comicsRoutes.search);
var charactersRoute = new CharactersRoutes(charactersService);
app.get('/api/characters', charactersRoute.getAll);
app.get('/api/characters/:id', charactersRoute.get);
app.get('/api/characters/random', charactersRoute.iAmFeelingLucky);

module.exports = app;
