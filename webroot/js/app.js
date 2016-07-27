var myApp = angular.module('template',['ngRoute','gettext','ngResource']);

myApp.run(['$location', '$resource', '$rootScope', function($location,$resource,$rootScope) {
	$location.path('/');
}]);

myApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/default.html'
    });
});
