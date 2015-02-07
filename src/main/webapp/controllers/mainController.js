'use strict';

var app =angular.module('myApp', ['ngRoute']).
  config(['$routeProvider', function($routeProvider) {
//    $routeProvider.when('/home', {templateUrl: '/views/logowanie/logowanie.html', controller: 'logowanieController'});
    $routeProvider.when('/ankietowany', {templateUrl: '/views/ankietowany/ANKIETOWANY_main.html', controller: 'ankietowanyController'});
    $routeProvider.when('/wypelnijAnkiete', {templateUrl: '/views/ankietowany/wypelnianie_ankiety.html', controller: 'ankietowanyController'});
    $routeProvider.when('/audytor', {templateUrl: '/views/audytor/AUDYTOR_main.html', controller: 'audytorController'});
    $routeProvider.when('/nowySzablon', {templateUrl: '/views/audytor/definiowanie_szablonu_ankiety.html', controller: 'audytorController'});
    $routeProvider.when('/nowySzablon/:id', {templateUrl: '/views/audytor/definiowanie_szablonu_ankiety.html', controller: 'audytorController'});
    $routeProvider.otherwise({redirectTo: '/ankietowany'});
  }]);
app.factory('myService', function() {
	 var planyAnkietyzacji = {}
	 function set(data) {
		 planyAnkietyzacji = data;
	 }
	 function get() {
	  return planyAnkietyzacji;
	 }

	 return {
	  set: set,
	  get: get
	 }

	});