'use strict';

var ComicsRoutes = function (comicsService) {

    var _iAmFeelingLucky = function (req, res) {
        comicsService.findOne(function (comic) {
            res.status(200).send(comic);
        });
    };

    var _search = function (req, res) {
        if (req.query.title) {
            var keyword = req.query.title;
            comicsService.findByTitle(keyword, function (comics) {
                res.status(200).send(comics);
            });
        }
        else {
            // TODO manage JSON content for errors
            res.status(400).send("Search query not supported.");
        }
    };

    return {
        iAmFeelingLucky: _iAmFeelingLucky,
        search: _search
    };

};

module.exports = ComicsRoutes;