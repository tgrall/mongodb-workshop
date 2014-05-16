var charactersControllers = angular.module('charactersControllers', []);

charactersControllers.controller(
    'CharactersListCtrl',
    [
        '$scope',
        '$http',
        '$location',
        function ($scope, $http, $location) {
            $http.get('api/characters').success(function (characters) {
                $scope.characters = characters;
            });

            $scope.imFeelingLucky = function() {
                $http.get('api/characters/random').success(function (randomCharacter) {
                    console.log(randomCharacter);
                    $location.path('characters/' + randomCharacter._id);
                });
            };

            $scope.search = function() {
                console.log('search : ' + $scope.searchQuery);
                $http.get('api/characters/search?name=' + $scope.searchQuery).success(function (characters) {
                    $scope.characters = characters;
                });
            };
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
            $http.get('api/characters/' + $routeParams.characterId).success(function (character) {
                $scope.character = character;
            });
        }
    ]
);