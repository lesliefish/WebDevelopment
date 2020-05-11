var app = angular.module('myapp', []);
app.controller('myctrl', function ($scope, $rootScope) {
     $scope.carname = 'lesliefish';
     $scope.name = 'l';
     $scope.sayHello = function () {
          $scope.greeting = 'Hello ' + $scope.name + '!';
     };
     $scope.names = ["Emil", "Tobias", "Linus"];
     $rootScope.lastname = 'Leslie';
});

app.filter('myfilter', function () {
     return function (text) {
          return text + ' this is a filter';
     }
})