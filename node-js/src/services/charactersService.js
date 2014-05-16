'use strict';

var CharactersService = function () {

    var CHARACTERS_COLLECTION_NAME = 'characters';

    var mongoDbConnection = require('./mongoConnection.js');

    var _findOne = function (callback) {
        mongoDbConnection(function (connection) {
            connection.collection(CHARACTERS_COLLECTION_NAME).findOne(function (err, item) {
                if (err) throw new Error(err);
                callback(item);
            });
        });
    };

    var _findById = function (id, callback) {
        mongoDbConnection(function (connection) {
            connection.collection(CHARACTERS_COLLECTION_NAME).findOne({'_id': id}, function (err, item) {
                if (err) throw new Error(err);
                callback(item);
            });
        });
    };

    var _findAll = function (limit, skip, callback) {
        mongoDbConnection(function (connection) {
            connection.collection(CHARACTERS_COLLECTION_NAME).find({}).limit(limit).skip(skip).toArray(function (err, items) {
                if (err) throw new Error(err);
                callback(items);
            });
        });
    };

    return {
        findOne: _findOne,
        findById: _findById,
        findAll: _findAll
    };
};

module.exports = CharactersService;
