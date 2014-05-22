'use strict';

var CharactersService = function () {

    var CHARACTERS_COLLECTION_NAME = 'characters';

    var mongoDbConnection = require('./mongoConnection.js');

    var toCharacterPage = function (items, count, limit, skip) {
        return {
            'totalItems': count,
            'itemsPerPage': limit,
            'currentPage': (skip / limit) + 1,
            'items': items
        };
    };

    var _findOneRandomly = function (callback) {
        mongoDbConnection(function (connection) {
            // TODO write some code ...
        });
    };

    var _findById = function (id, callback) {
        mongoDbConnection(function (connection) {
            // TODO write some code ...
        });
    };

    var _findByName = function (name, limit, skip, callback) {
        mongoDbConnection(function (connection) {
            // TODO write some code ...
            // Regexp example : var searchQuery = name ? {"name": new RegExp(name, "i")} : {};
            // Must return a page of characters
        });
    };

    var _findAll = function (limit, skip, callback) {
        mongoDbConnection(function (connection) {
            // TODO write some code ...
            // Must return a page of characters
        });
    };

    var _putStory = function (id, story, callback) {
        mongoDbConnection(function (connection) {
            // TODO write some code ...
        });
    };

    var _create = function (character, callback) {
        mongoDbConnection(function (connection) {
            var collection = connection.collection(CHARACTERS_COLLECTION_NAME);
            character._id = Number(character._id);
            // TODO write some code ...
        });
    }

    var _delete = function (id, callback) {
        mongoDbConnection(function (connection) {
            var collection = connection.collection(CHARACTERS_COLLECTION_NAME);
            collection.remove({ '_id': id }, function (err, result) {
                if (err) throw new Error(err);
                callback(result);
            });
        });
    }

    return {
        findOneRandomly: _findOneRandomly,
        findById: _findById,
        findByName: _findByName,
        findAll: _findAll,
        putStory: _putStory,
        create: _create,
        delete: _delete
    };
};

module.exports = CharactersService;
