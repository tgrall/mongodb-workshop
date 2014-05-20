var pricesControllers = angular.module('pricesControllers', ['highcharts-ng']);

pricesControllers.controller(
    'PricesRepartitionCtrl',
    [
        '$scope',
        '$http',
        function ($scope, $http) {
            $http.get('api/comics/groupBy/price').success(function (prices) {
                $scope.prices = prices;

                $scope.chartConfig = {
                    options: {
                        chart: {
                            type: 'area'
                        }
                    },
                    series: [
                        {
                            name: 'number of comics',
                            data: prices.map(function (price) {
                                return [price._id, price.total];
                            })
                        }
                    ],
                    title: {
                        text: 'Price chart'
                    },
                    loading: false
                }

            });
        }
    ]
);
