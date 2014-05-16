'use strict';

var CharactersRoutes = function (charactersService) {

    var _iAmFeelingLucky = function (req, res) {
        charactersService.findOne(function (character) {
            res.status(200).send(character);
        });
    };

    var _get = function (req, res) {
        var id = parseInt(req.param('id'), 10);
        charactersService.findById(id, function (character) {
            res.status(200).send(character);
        });
    };

    var _getAll = function (req, res) {
        // TODO get pagination parameters
        charactersService.findAll(25, 0, function (characters) {
            res.status(200).send(characters);
        });
    };

    return {
        iAmFeelingLucky: _iAmFeelingLucky,
        get: _get,
        getAll: _getAll
    };

};

module.exports = CharactersRoutes;