var phonecatControllers = angular.module('phonecatControllers', []);

/**
 *  列表页
 */
phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
    function ($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
    }]);

/**
 * 详情页
 */
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
    function ($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({ phoneId: $routeParams.phoneId },
            function (phone) {
                $scope.mainImageUrl = phone.images[0];
            });
        $scope.phoneId = $routeParams.phoneId;

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }]);