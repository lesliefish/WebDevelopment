var phonecatControllers = angular.module('phonecatControllers', []);

/**
 *  列表页
 */
phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('phones/phones.json').success(function (data) {
            $scope.phones = data;
        });

        $scope.orderProp = 'age';
    }]);

/**
 * 详情页
 */
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
        $http.get('phones/' + $routeParams.phoneId + ".json")
            .success(function (data) {
                console.log(data);
                $scope.phone = data;
            })
        $scope.phoneId = $routeParams.phoneId;
    }]);