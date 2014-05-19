'use strict';

var assert = require("assert");
var _ = require("lodash");

var ComicsService = require('../../src/services/comicsService');
var comicsService = new ComicsService();

describe('ComicsService', function () {

    describe('#findOne()', function () {
        it('should return a Comic', function (done) {
            comicsService.findOne(function (comic) {
                var comicAttributes = _.keys(comic);
                assert(_.contains(comicAttributes, '_id'));
                assert(_.contains(comicAttributes, 'title'));
                assert(_.contains(comicAttributes, 'description'));
                done();
            });
        });
    });

    describe('#findByTitle()', function () {
        it('should return an empty array when the comic\'s title corresponds to nothing', function (done) {
            comicsService.findByTitle('xxxxxx', function (comics) {
                assert(_.isEmpty(comics));
                done();
            });
        });
        it('should return one Comic when the comic\'s title corresponds to SPIDERMAN', function (done) {
            comicsService.findByTitle('SPIDERMAN', function (comics) {
                assert.equal(comics.length, 1);
                assert(_.contains(comics[0].title, 'SPIDERMAN'));
                done();
            });
        });
        it('should return one Comic when the comic\'s title corresponds to a substring of SPIDERMAN', function (done) {
            comicsService.findByTitle('SPIDERM', function (comics) {
                assert.equal(comics.length, 1);
                assert(_.contains(comics[0].title, 'SPIDERMAN'));
                done();
            });
        });
    });

});