'use strict';

var assert = require("assert");
var _ = require("lodash");

var ComicsService = require('../../src/services/comicsService');
var comicsService = new ComicsService();

describe('ComicsService', function () {

    describe('#findById()', function () {
        it('should return null when id is unknown', function (done) {
            comicsService.findById(0, function (comic) {
                assert(comic === null);
                done();
            });
        });
        it('should return Hulk (2008) #17 when _id is 25369', function (done) {
            comicsService.findById(25369, function (comic) {
                assert(comic !== null);
                assert.equal(comic._id, 25369);
                assert.equal(comic.title, 'Hulk (2008) #17');
                done();
            });
        });
    });

    describe('#searchByText()', function () {
        it('should return an empty array when the comic\'s title corresponds to nothing', function (done) {
            comicsService.searchByText('xxxxxxxxxxxxxxx', 20, 0, function (comicsPage) {
                assert.equal(comicsPage.totalItems, 0);
                assert.equal(comicsPage.currentPage, 1);
                assert.equal(comicsPage.itemsPerPage, 20);
                assert.equal(comicsPage.items.length, 0);
                done();
            });
        });
        it('should return one Comic when the comic\'s title corresponds to Spiderman', function (done) {
            comicsService.searchByText('spiderman', 20, 0, function (comicsPage) {
                assert.equal(comicsPage.totalItems, 1);
                assert.equal(comicsPage.currentPage, 1);
                assert.equal(comicsPage.itemsPerPage, 20);
                assert.equal(comicsPage.items.length, 1);
                done();
            });
        });
        it('should return one page of Comics when the comic\'s title corresponds to Hulk', function (done) {
            comicsService.searchByText('hulk', 20, 0, function (comicsPage) {
                assert.equal(comicsPage.currentPage, 1);
                assert.equal(comicsPage.itemsPerPage, 20);
                assert.equal(comicsPage.items.length, 20);
                done();
            });
        });
    });

    describe('#aggregatePrintPrices()', function () {
        it('should return aggregated prices', function (done) {
            comicsService.aggregatePrintPrices(function (prices) {
                assert.equal(prices.length, 68);
                assert.equal(prices[0]._id, 0.1);
                assert.equal(prices[0].total, 544);
                done();
            });
        });
    });

});