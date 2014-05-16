'use strict';

var assert = require("assert");
var _ = require("lodash");

var CharactersService = require('../../src/services/charactersService');
var charactersService = new CharactersService();

describe('CharactersService', function () {

    describe('#findOne()', function () {
        it('should return a Character', function (done) {
            charactersService.findOne(function (character) {
                var characterAttributes = _.keys(character);
                assert(_.contains(characterAttributes, '_id'));
                assert(_.contains(characterAttributes, 'name'));
                assert(_.contains(characterAttributes, 'description'));
                done();
            });
        });
    });

    describe('#findAll()', function () {
        it('should return an array of 20 elements when the given limit is 20', function (done) {
            charactersService.findAll(20, 0, function (characters) {
                assert.equal(characters.length, 20);
                done();
            });
        });
    });

});