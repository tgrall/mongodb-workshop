'use strict';

var assert = require("assert");
var _ = require("lodash");

var CreatorsService = require('../../src/services/creatorsService');
var creatorsService = new CreatorsService();

describe('CreatorsService', function () {

    describe('#findById()', function () {
        it('should return null when id is unknown', function (done) {
            creatorsService.findById(0, function (creator) {
                assert(creator === null);
                done();
            });
        });
        it('should return Rick Burchett when _id is 941', function (done) {
            creatorsService.findById(941, function (creator) {
                assert(creator !== null);
                assert.equal(creator._id, 941);
                assert.equal(creator.fullName, 'Rick Burchett');
                done();
            });
        });
    });

    describe('#findByComicsName()', function () {
        it('should return an empty array when the comic\'s title corresponds to nothing', function (done) {
            creatorsService.findByComicsName('xxxxxxxxxxxxxxx', 20, 0, function (creatorsPage) {
                assert.equal(creatorsPage.totalItems, 0);
                assert.equal(creatorsPage.currentPage, 1);
                assert.equal(creatorsPage.itemsPerPage, 20);
                assert.equal(creatorsPage.items.length, 0);
                done();
            });
        });
        it('should return one page of Creators when the comic\'s title corresponds to Hulk', function (done) {
            creatorsService.findByComicsName('hulk', 20, 0, function (creatorsPage) {
                assert.equal(creatorsPage.currentPage, 1);
                assert.equal(creatorsPage.itemsPerPage, 20);
                assert.equal(creatorsPage.items.length, 20);
                done();
            });
        });
    });

});