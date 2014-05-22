var charactersControllers = angular.module('charactersControllers', ['ui.bootstrap']);

charactersControllers.controller(
    'CharactersListCtrl',
    [
        '$scope',
        '$http',
        '$location',
        function ($scope, $http, $location) {
            var renderCharacters = function (charactersPage) {
                $scope.characters = charactersPage.items;
                $scope.totalItems = charactersPage.totalItems;
                $scope.currentPage = charactersPage.currentPage;
                $scope.itemsPerPage = charactersPage.itemsPerPage;
                $scope.maxSize = 10;
            };

            $http.get('api/characters').success(renderCharacters);

            $scope.pageChanged = function () {
                if ($scope.searchQuery) {
                    $http.get('api/characters/search?name=' + $scope.searchQuery + '&page=' + $scope.currentPage).success(renderCharacters);
                }
                else {
                    $http.get('api/characters?page=' + $scope.currentPage).success(renderCharacters);
                }
            };

            $scope.imFeelingLucky = function () {
                $http.get('api/characters/random').success(function (randomCharacter) {
                    $location.path('characters/' + randomCharacter._id);
                });
            };

            $scope.search = function () {
                if ($scope.searchQuery.length === 0) {
                    $http.get('api/characters').success(renderCharacters);
                }
                else {
                    $http.get('api/characters/search?name=' + $scope.searchQuery).success(renderCharacters);
                }
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

            $scope.saveStory = function () {
                $http.put('api/characters/' + $routeParams.characterId + "/story", $scope.character.story).success(function (result) {
                    $scope.result = result;
                });
            }

        }
    ]
);

charactersControllers.controller(
    'CharactersCreateCtrl',
    [
        '$scope',
        '$http',
        '$location',
        function ($scope, $http, $location) {
            $scope.save = function () {
                $http.post('api/characters', $scope.character).success(function () {
                    $location.path('characters/' + $scope.character._id);
                });
            }
        }
    ]
);
