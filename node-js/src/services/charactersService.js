'use strict';

var CharactersService = function () {

    var DB = 'comics';
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
            var db = connection.db(DB);
            var collection = db.collection(CHARACTERS_COLLECTION_NAME);
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
            var db = connection.db(DB);
            db.collection(CHARACTERS_COLLECTION_NAME).findOne({'_id': id}, function (err, item) {
                if (err) throw new Error(err);
                callback(item);
            });
        });
    };

    var _findByName = function (name, limit, skip, callback) {
        mongoDbConnection(function (connection) {
            var db = connection.db(DB);
            var collection = db.collection(CHARACTERS_COLLECTION_NAME);
            var searchQuery = name ? {"name": new RegExp(name, "i")} : {};
            // 1- Count characters
            collection.count(searchQuery, function (err, count) {
                if (err) throw new Error(err);
                // 2- Search and paginate characters
                collection.find(searchQuery).limit(limit).skip(skip).toArray(function (err, items) {
                    if (err) throw new Error(err);
                    callback(toCharacterPage(items, count, limit, skip));
                });
            });
        });
    };

    var _findAll = function (limit, skip, callback) {
        mongoDbConnection(function (connection) {
            var db = connection.db(DB);
            var collection = db.collection(CHARACTERS_COLLECTION_NAME);
            // 1- Count characters
            collection.count(function (err, count) {
                if (err) throw new Error(err);
                // 2- Paginate characters
                collection.find().limit(limit).skip(skip).toArray(function (err, items) {
                    if (err) throw new Error(err);
                    callback(toCharacterPage(items, count, limit, skip));
                });
            });
        });
    };

    var _putStory = function (id, story, callback) {
        mongoDbConnection(function (connection) {
            var db = connection.db(DB);
            var collection = db.collection(CHARACTERS_COLLECTION_NAME);
            collection.updateOne({ '_id': id }, { '$set': { 'story': story } }, function (err, result) {
                if (err) throw new Error(err);
                callback(result);
            });
        });
    };

    var _create = function (character, callback) {
        mongoDbConnection(function (connection) {
            var collection = connection.collection(CHARACTERS_COLLECTION_NAME);
            character._id = Number(character._id);
            collection.insert(character, function (err, result) {
                if (err) throw new Error(err);
                callback(result);
            });
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
