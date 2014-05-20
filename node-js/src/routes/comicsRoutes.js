'use strict';

var ComicsRoutes = function (comicsService) {

    var COMICS_PAGE_SIZE = 15;

    var _get = function (req, res) {
        var id = parseInt(req.param('id'), 10);
        comicsService.findById(id, function (comic) {
            if (comic !== null) {
                res.status(200).send(comic);
            }
            else {
                res.status(404).send('Comic not found !')
            }
        });
    };

    var _search = function (req, res) {
        if (req.query.keyword) {
            var keyword = req.query.keyword;
            var page = req.query.page ? parseInt(req.query.page, 10) : 1;
            var skip = COMICS_PAGE_SIZE * (page - 1);
            comicsService.searchByText(keyword, COMICS_PAGE_SIZE, skip, function (comics) {
                res.status(200).send(comics);
            });
        }
        else {
            res.status(400).send("Search query not supported.");
        }
    };

    return {
        get: _get,
        search: _search
    };

};

module.exports = ComicsRoutes;