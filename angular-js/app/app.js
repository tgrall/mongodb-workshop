var mongodbWorkshopApp = angular.module('mongodbWorkshopApp', [
    'ngRoute',
    'charactersControllers',
    'comicsControllers',
    'pricesControllers',
    'mongodbWorkshopFilters'
]);

mongodbWorkshopApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/home.html'
            }).
            when('/characters', {
                templateUrl: 'partials/characters-list.html',
                controller: 'CharactersListCtrl'
            }).
            when('/characters/:characterId', {
                templateUrl: 'partials/characters-details.html',
                controller: 'CharactersDetailsCtrl'
            }).
            when('/comics', {
                templateUrl: 'partials/comics-search.html',
                controller: 'ComicsSearchCtrl'
            }).
            when('/comics/:comicId', {
                templateUrl: 'partials/comics-details.html',
                controller: 'ComicsDetailsCtrl'
            }).
            when('/creators', {
                templateUrl: 'partials/creators.html'
            }).
            when('/prices', {
                templateUrl: 'partials/prices.html',
                controller: 'PricesRepartitionCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
