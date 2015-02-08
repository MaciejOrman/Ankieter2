'use strict';

var app =angular.module('myApp', ['ngRoute']).
  config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/login', {templateUrl: '/views/login.html', controller: 'loginController'});
	$routeProvider.when('/blad', {templateUrl: '/views/blad.html', controller: 'loginController'});
	$routeProvider.when('/ankietowany', {templateUrl: '/views/ankietowany/ANKIETOWANY_main.html', controller: 'ankietowanyController'});
    $routeProvider.when('/wypelnijAnkiete', {templateUrl: '/views/ankietowany/wypelnianie_ankiety.html', controller: 'ankietowanyController'});
    $routeProvider.when('/audytor', {templateUrl: '/views/audytor/AUDYTOR_main.html', controller: 'audytorController'});
    $routeProvider.when('/nowySzablon', {templateUrl: '/views/audytor/definiowanie_szablonu_ankiety.html', controller: 'audytorController'});
    $routeProvider.when('/nowySzablon/:id', {templateUrl: '/views/audytor/definiowanie_szablonu_ankiety.html', controller: 'audytorController'});
    $routeProvider.otherwise({redirectTo: '/login'});
  }]);

