var mongodbWorkshopApp = angular.module('mongodbWorkshopApp', [
    'ngRoute',
    'charactersControllers'
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
                templateUrl: 'partials/comics.html'
            }).
            when('/creators', {
                templateUrl: 'partials/creators.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
