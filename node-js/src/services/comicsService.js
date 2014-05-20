'use strict';

var ComicsService = function () {

    var COMICS_COLLECTION_NAME = 'comics';

    var mongoDbConnection = require('./mongoConnection.js');

    var toComicPage = function (items, count, limit, skip) {
        return {
            'totalItems': count,
            'itemsPerPage': limit,
            'currentPage': (skip / limit) + 1,
            'items': items
        };
    }

    var _findById = function (id, callback) {
        mongoDbConnection(function (connection) {
            connection.collection(COMICS_COLLECTION_NAME).findOne({'_id': id}, function (err, item) {
                if (err) throw new Error(err);
                callback(item);
            });
        });
    };

    var _searchByText = function (keyword, limit, skip, callback) {
        mongoDbConnection(function (connection) {
            var collection = connection.collection(COMICS_COLLECTION_NAME);
            var searchQuery = {
                $text: {
                    $search: keyword
                }
            };
            var projectQuery = {
                title: 1,
                description: 1,
                score: { $meta: "textScore" }
            };
            var sortQuery = {
                score: {
                    $meta: "textScore"
                }
            };
            // 1- Count results
            collection.count(searchQuery, function (err, count) {
                if (err) throw new Error(err);
                // 2- Search and paginate comics
                collection.find(searchQuery, projectQuery).sort(sortQuery).limit(limit).skip(skip).toArray(function (err, items) {
                    if (err) throw new Error(err);
                    callback(toComicPage(items, count, limit, skip));
                });
            });
        });
    };

    var _aggregatePrintPrices = function (callback) {
        mongoDbConnection(function (connection) {
            var collection = connection.collection(COMICS_COLLECTION_NAME);
            collection.aggregate(
                [
                    {$unwind: "$prices"},
                    {$match: {"prices.type": "printPrice", "prices.price": {$gt: 0}}},
                    {$group: {_id: "$prices.price", total: {$sum: 1}}},
                    {$sort: {_id: 1}}
                ],
                function (err, result) {
                    if (err) throw new Error(err);
                    callback(result);
                }
            );
        });
    };

    return {
        findById: _findById,
        searchByText: _searchByText,
        aggregatePrintPrices: _aggregatePrintPrices
    };
};

module.exports = ComicsService;
