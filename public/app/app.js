var app = angular.module("steampatrol", ['ui.router', 'ngResource', 'ngAnimate']);
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'app/views/index.html',
            controller: ['$scope', '$http', function($scope, $http) {
                $http({method: 'GET', url: "http://localhost:8085/steampatrol-api/public/"})
                    .success(function(data, status) {
                        $scope.data = data;
                });
            }]
        });
    $urlRouterProvider
        .otherwise('/');
}]);
