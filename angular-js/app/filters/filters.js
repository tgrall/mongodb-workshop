'use strict';

var mongodbWorkshopFilters = angular.module('mongodbWorkshopFilters', []);

mongodbWorkshopFilters.filter(
    'restrictLength',
    [
        function () {
            return function (text) {
                return text.substring(0, 150) + ' [...]';
            }
        }
    ]
);
