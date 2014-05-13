'use strict';

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var ComicsRoutes = require('./routes/comicsRoutes');
var ComicsService = require('./services/comicsService');

// Bootstrap Express application
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());

// Configure services
var comicsService = new ComicsService();

// Configure routes
var comicsRoutes = new ComicsRoutes(comicsService);
app.get('/comics/random', comicsRoutes.iAmFeelingLucky);
app.get('/comics/search', comicsRoutes.searchByTitle);

module.exports = app;