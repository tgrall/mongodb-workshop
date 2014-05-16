var charactersControllers = angular.module('charactersControllers', []);

charactersControllers.controller(
    'CharactersListCtrl',
    [
        '$scope',
        '$http',
        function ($scope, $http) {
            $http.get('api/characters').success(function (data) {
                $scope.characters = data;
            });
        }
    ]
);

charactersControllers.controller(
    'CharactersDetailsCtrl',
    [
        '$scope',
        '$http',
        '$routeParams',
        function ($scope, $http, $routeParams) {
            $http.get('api/characters/' + $routeParams.characterId).success(function (data) {
                $scope.character = data;
            });
        }
    ]
);