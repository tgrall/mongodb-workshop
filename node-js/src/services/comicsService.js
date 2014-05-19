'use strict';

var ComicsService = function () {

    var COMICS_COLLECTION_NAME = 'comics';

    var mongoDbConnection = require('./mongoConnection.js');

    var _findOne = function (callback) {
        mongoDbConnection(function (connection) {
            connection.collection(COMICS_COLLECTION_NAME).findOne(function (err, item) {
                if (err) throw new Error(err);
                callback(item);
            });
        });
    };

    var _findByTitle = function (keyword, callback) {
        mongoDbConnection(function (connection) {
            var searchQuery = keyword ? {"title": new RegExp(keyword, "i")} : {};
            connection.collection(COMICS_COLLECTION_NAME).find(searchQuery).toArray(function (err, items) {
                if (err) throw new Error(err);
                callback(items);
            });
        });
    };

    return {
        findOne: _findOne,
        findByTitle: _findByTitle
    };
};

module.exports = ComicsService;
