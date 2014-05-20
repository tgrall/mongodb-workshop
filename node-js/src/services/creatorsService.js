'use strict';

var CreatorsService = function () {

    var CREATORS_COLLECTION_NAME = 'creators';

    var mongoDbConnection = require('./mongoConnection.js');

    var toCreatorsPage = function (items, count, limit, skip) {
        return {
            'totalItems': count,
            'itemsPerPage': limit,
            'currentPage': (skip / limit) + 1,
            'items': items
        };
    };

    var _findById = function (id, callback) {
        mongoDbConnection(function (connection) {
            connection.collection(CREATORS_COLLECTION_NAME).findOne({'_id': id}, function (err, item) {
                if (err) throw new Error(err);
                callback(item);
            });
        });
    };

    var _findByComicsName = function (comicsName, limit, skip, callback) {
        mongoDbConnection(function (connection) {
            var collection = connection.collection(CREATORS_COLLECTION_NAME);
            var searchQuery = comicsName ? {"comics.items.name": new RegExp(comicsName, "i")} : {};
            // 1- Count creators
            collection.count(searchQuery, function (err, count) {
                if (err) throw new Error(err);
                // 2- Search and paginate creators
                collection.find(searchQuery).limit(limit).skip(skip).toArray(function (err, items) {
                    if (err) throw new Error(err);
                    callback(toCreatorsPage(items, count, limit, skip));
                });
            });
        });
    };

    return {
        findById: _findById,
        findByComicsName: _findByComicsName
    };
};

module.exports = CreatorsService;
