'use strict';

var ComicsRoutes = function (comicsService) {

    var _iAmFeelingLucky = function (req, res) {
        comicsService.findOne(function (comic) {
            res.status(200).send(comic);
        });
    };

    var _searchByTitle = function (req, res) {
        var keyword = req.query.title;
        comicsService.findByTitle(keyword, function (comics) {
            res.status(200).send(comics);
        });
    };

    return {
        iAmFeelingLucky: _iAmFeelingLucky,
        searchByTitle: _searchByTitle
    };

};

module.exports = ComicsRoutes;