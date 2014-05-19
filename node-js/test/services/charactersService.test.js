'use strict';

var assert = require("assert");
var _ = require("lodash");

var CharactersService = require('../../src/services/charactersService');
var charactersService = new CharactersService();

describe('CharactersService', function () {

    describe('#findOneRandomly()', function () {
        it('should return a Character', function (done) {
            charactersService.findOneRandomly(function (character) {
                var characterAttributes = _.keys(character);
                assert(_.contains(characterAttributes, '_id'));
                assert(_.contains(characterAttributes, 'name'));
                assert(_.contains(characterAttributes, 'description'));
                done();
            });
        });
    });

    describe('#findById()', function () {
        it('should return null when id is unknown', function (done) {
            charactersService.findById(0, function (character) {
                assert(character === null);
                done();
            });
        });
        it('should return 3-D Man when _id is 1011334', function (done) {
            charactersService.findById(1011334, function (character) {
                assert(character !== null);
                assert.equal(character._id, 1011334);
                assert.equal(character.name, '3-D Man');
                done();
            });
        });
    });

    describe('#findByName()', function () {
        it('should return an empty page when name is unknown', function (done) {
            charactersService.findByName('XZXZXZXZXZXZ', 20, 0, function (charactersPage) {
                assert.equal(charactersPage.totalItems, 0);
                assert.equal(charactersPage.currentPage, 1);
                assert.equal(charactersPage.itemsPerPage, 20);
                assert.equal(charactersPage.items.length, 0);
                done();
            });
        });
        it('should return the second page with 2 items when name is Hulk and limit is 15 and skip is 15', function (done) {
            charactersService.findByName('Hulk', 15, 15, function (charactersPage) {
                assert.equal(charactersPage.totalItems, 17);
                assert.equal(charactersPage.currentPage, 2);
                assert.equal(charactersPage.itemsPerPage, 15);
                assert.equal(charactersPage.items.length, 2);
                done();
            });
        });
    });

    describe('#findAll()', function () {
        it('should return the first page with 20 items when limit is 20 and skip is 0', function (done) {
            charactersService.findAll(20, 0, function (charactersPage) {
                assert.equal(charactersPage.currentPage, 1);
                assert.equal(charactersPage.itemsPerPage, 20);
                assert.equal(charactersPage.items.length, 20);
                done();
            });
        });
        it('should return the third page with 20 items when limit is 20 and skip is 40', function (done) {
            charactersService.findAll(20, 40, function (charactersPage) {
                assert.equal(charactersPage.currentPage, 3);
                assert.equal(charactersPage.itemsPerPage, 20);
                assert.equal(charactersPage.items.length, 20);
                done();
            });
        });
    });

});