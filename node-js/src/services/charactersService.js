'use strict';

var CharactersService = function () {

    var CHARACTERS_COLLECTION_NAME = 'characters';

    var mongoDbConnection = require('./mongoConnection.js');

    var _findOneRandomly = function (callback) {
        mongoDbConnection(function (connection) {
            var collection = connection.collection(CHARACTERS_COLLECTION_NAME);
            // 1- Count characters
            collection.count(function (err, count) {
                if (err) throw new Error(err);
                // 2- Find one character randomly
                var random = Math.floor((Math.random() * count));
                collection.find().skip(random).limit(1).toArray(function (err, items) {
                    if (err) throw new Error(err);
                    callback(items[0]);
                });
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

    var _findByName = function (name, limit, skip, callback) {
        mongoDbConnection(function (connection) {
            var searchQuery = name ? {"name": new RegExp(name, "i")} : {};
            connection.collection(CHARACTERS_COLLECTION_NAME).find(searchQuery).limit(limit).skip(skip).toArray(function (err, item) {
                if (err) throw new Error(err);
                callback(item);
            });
        });
    };

    var _findAll = function (limit, skip, callback) {
        mongoDbConnection(function (connection) {
            var collection = connection.collection(CHARACTERS_COLLECTION_NAME);
            // 1- Count characters
            collection.count(function (err, count) {
                if (err) throw new Error(err);
                // 2- Paginate characters
                collection.find().limit(limit).skip(skip).toArray(function (err, items) {
                    if (err) throw new Error(err);
                    callback({
                        'totalItems': count,
                        'itemsPerPage': limit,
                        'currentPage': (skip / limit) + 1,
                        'items': items
                    });
                });
            });
        });
    };

    return {
        findOneRandomly: _findOneRandomly,
        findById: _findById,
        findByName: _findByName,
        findAll: _findAll
    };
};

module.exports = CharactersService;
