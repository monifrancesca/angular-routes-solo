var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController'
        })
        .when('/huey', {
            templateUrl: '/views/templates/huey.html',
            controller: 'HueyController'
        })
        .when('/riley', {
            templateUrl: '/views/templates/riley.html',
            controller: 'RileyController'
        })
        .when('/grandpa', {
            templateUrl: '/views/templates/grandpa.html',
            controller: 'GrandpaController'
        })
        .when('/jazmine', {
            templateUrl: '/views/templates/jazmine.html',
            controller: 'JazmineController'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);