'use strict';

var ComicsRoutes = function (comicsService) {

    var _iAmFeelingLucky = function (req, res) {
        comicsService.findOne(function (comic) {
            res.status(200).send(comic);
        });
    };

    return {
        iAmFeelingLucky: _iAmFeelingLucky
    };

};

module.exports = ComicsRoutes;