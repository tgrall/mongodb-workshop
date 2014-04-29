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
});