'use strict';

var CreatorsRoutes = function (creatorsService) {

    var CREATORS_PAGE_SIZE = 15;

    var _get = function (req, res) {
        var id = parseInt(req.param('id'), 10);
        creatorsService.findById(id, function (creator) {
            if (creator !== null) {
                res.status(200).send(creator);
            }
            else {
                res.status(404).send('Creator not found !')
            }
        });
    };

    var _search = function (req, res) {
        if (req.query.comicsName) {
            var name = req.query.comicsName;
            var page = req.query.page ? parseInt(req.query.page, 10) : 1;
            var skip = CREATORS_PAGE_SIZE * (page - 1);
            creatorsService.findByComicsName(name, CREATORS_PAGE_SIZE, skip, function (characters) {
                res.status(200).send(characters);
            });
        }
        else {
            res.status(400).send('Search query not supported.');
        }
    };

    return {
        get: _get,
        search: _search
    };

};

module.exports = CreatorsRoutes;