'use strict';

var ComicsService = function () {

    var mongoDbConnection = require('./mongoConnection.js');

    var _findOne = function (callback) {
        mongoDbConnection(function (connection) {
            var comicsCollection = connection.collection('comics');
            comicsCollection.findOne(function (err, item) {
                if (err) throw new Error(error);
                callback(item);
            });
        });
    };

    return {
        findOne: _findOne
    };
};

module.exports = ComicsService;
