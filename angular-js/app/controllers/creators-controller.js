var creatorsControllers = angular.module('creatorsControllers', ['ui.bootstrap']);

creatorsControllers.controller(
    'CreatorsSearchCtrl',
    [
        '$scope',
        '$http',
        function ($scope, $http) {
            var renderCreators = function (creatorsPage) {
                $scope.creators = creatorsPage.items;
                $scope.totalItems = creatorsPage.totalItems;
                $scope.currentPage = creatorsPage.currentPage;
                $scope.itemsPerPage = creatorsPage.itemsPerPage;
                $scope.maxSize = 10;
            };

            $scope.pageChanged = function () {
                if ($scope.searchQuery) {
                    $http.get('api/creators/search?comicsName=' + $scope.searchQuery + '&page=' + $scope.currentPage).success(renderCreators);
                }
                else {
                    $scope.creators = null;
                }
            };

            $scope.search = function () {
                if ($scope.searchQuery) {
                    $http.get('api/creators/search?comicsName=' + $scope.searchQuery).success(renderCreators);
                }
                else {
                    $scope.creators = null;
                }
            };
        }
    ]
);

creatorsControllers.controller(
    'CreatorsDetailsCtrl',
    [
        '$scope',
        '$http',
        '$routeParams',
        function ($scope, $http, $routeParams) {
            $http.get('api/creators/' + $routeParams.creatorId).success(function (creator) {
                $scope.creator = creator;
            });
        }
    ]
);