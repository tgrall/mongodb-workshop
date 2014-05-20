var comicsControllers = angular.module('comicsControllers', ['ui.bootstrap']);

comicsControllers.controller(
    'ComicsSearchCtrl',
    [
        '$scope',
        '$http',
        function ($scope, $http) {
            var renderComics = function (comicsPage) {
                $scope.comics = comicsPage.items;
                $scope.totalItems = comicsPage.totalItems;
                $scope.currentPage = comicsPage.currentPage;
                $scope.itemsPerPage = comicsPage.itemsPerPage;
                $scope.maxSize = 10;
            };

            $scope.pageChanged = function () {
                if ($scope.searchQuery) {
                    $http.get('api/comics/search?keyword=' + $scope.searchQuery + '&page=' + $scope.currentPage).success(renderComics);
                }
                else {
                    $scope.comics = null;
                }
            };

            $scope.search = function () {
                if ($scope.searchQuery) {
                    $http.get('api/comics/search?keyword=' + $scope.searchQuery).success(renderComics);
                }
                else {
                    $scope.comics = null;
                }
            };
        }
    ]
);

charactersControllers.controller(
    'ComicsDetailsCtrl',
    [
        '$scope',
        '$http',
        '$routeParams',
        function ($scope, $http, $routeParams) {
            $http.get('api/comics/' + $routeParams.comicId).success(function (comic) {
                $scope.comic = comic;
            });
        }
    ]
);