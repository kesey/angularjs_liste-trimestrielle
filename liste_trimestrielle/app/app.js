var app = angular.module("liste", ['ngRoute', '720kb.datepicker']);

app
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/home', {
                controller: 'listeController',
                templateUrl: './app/views/home.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }]);