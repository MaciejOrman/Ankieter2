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
app.filter('xlat', ['$rootScope', function($rootScope) {
	  var tables = {
				//main view
			    'en': {
			    	'HELLO': 'Hello ',
			    	'LOGOUT': 'Log out',
			    	'SETTINGS': 'Settings',
			    	'QUESTIONNAIRELIST': 'List of avaiable questionnaires:',
			    	'COURSENAME': 'Name of course',
			    	'TEACHER': 'Teacher',
			    	'STARTDATE': 'Start date',
			    	'ENDDATE': 'End date',
			    	'STATUS': 'Status',
			    	'ACTIONS': 'Actions',
			    	'NOTFILLED': 'Not filled',
			    	'FILL': 'Fill questionnaire',			    	
			    	'QUESTIONNAIRE': 'QUESTIONNAIRE',
			    	'QUESTION': 'Question',
			    	'PREVIOUSQUESTION': 'Previous question',
			    	'NEXTQUESTION': 'Next question',
			    	'ANSWER': 'Answer',
			    	'CANCEL': 'Cancel',
			    	'SAVEQUESTIONNAIRE': 'Save questionnaire',
			    	'SENDQUESTIONNAIRE': 'Send questionnaire',
			    	'NEWQUESTIONNAIRE': 'Create new questionnaire template',
			    	'NEWQUESTIONNAIREDEF': 'Definition of new questionnaire template',
			    	'QUESTIONNAIRENAME': 'Name of questionnaire',
			    	'NEWQUESTION': 'Add new question',
			    	'QUESTIONTYPE': 'Question type',
			    	'QUESTIONTYPEOPEN': 'Open',
			    	'QUESTIONTYPESCALE': 'Scale',
			    	'QUESTIONTYPETF': 'True/False',
			    	'QUESTIONLIST': 'List of questions',
			    	'QUESTIONORDER': 'Change question order',
			    	'QUESTIONORDERUP': 'Up',
			    	'QUESTIONORDERDOWN': 'Down',
			    	'QUESTIONTITLE': 'Title',
			    	'QUESTIONCONTENT': 'Content',
			    	'QUESTIONSAVE': 'Save question',
			    	'QUESTIONDELETE': 'Delete question',
			    	'QUESTIONNAIRESAVE': 'Save questionnaire'},
			    'pl': {
			    	'HELLO': 'Witaj ',
			    	'LOGOUT': 'Wyloguj',
			    	'SETTINGS': 'Ustawienia',
			    	'QUESTIONNAIRELIST': 'Lista dostępnych ankiet:',
			    	'COURSENAME': 'Nazwa kursu',
			    	'TEACHER': 'Prowadzący',
			    	'STARTDATE': 'Data rozpoczęcia',
			    	'ENDDATE': 'Data zakończenia',
			    	'STATUS': 'Status',
			    	'ACTIONS': 'Akcje',
			    	'NOTFILLED': 'Nie wzpełniona',
			    	'FILL': 'Wypełnij ankietę',			    	
			    	'QUESTIONNAIRE': 'ANKIETA',
			    	'QUESTION': 'Pytanie',
			    	'PREVIOUSQUESTION': 'Poprzednie pytanie',
			    	'NEXTQUESTION': 'Następne pytanie',
			    	'ANSWER': 'Odpowiedź',
			    	'CANCEL': 'Anuluj',
			    	'SAVEQUESTIONNAIRE': 'Zapisz ankietę',
			    	'SENDQUESTIONNAIRE': 'Wyślij ankietę',
			    	'NEWQUESTIONNAIRE': 'Utwórz nowy szablon ankiety',
			    	'NEWQUESTIONNAIREDEF': 'Definiowanie szablonu ankiety',
			    	'QUESTIONNAIRENAME': 'Nazwa szablonu',
			    	'NEWQUESTION': 'Dodaj nowe pytanie',
			    	'QUESTIONTYPE': 'Typ pytania',
			    	'QUESTIONTYPEOPEN': 'Otwarte',
			    	'QUESTIONTYPESCALE': 'Skala',
			    	'QUESTIONTYPETF': 'TAK/NIE',
			    	'QUESTIONLIST': 'Lista pytań',
			    	'QUESTIONORDER': 'Zmień kolejność pytania',
			    	'QUESTIONORDERUP': 'W górę',
			    	'QUESTIONORDERDOWN': 'W dół',
			    	'QUESTIONTITLE': 'Tytuł',
			    	'QUESTIONCONTENT': 'Treść',
			    	'QUESTIONSAVE': 'Zapisz pytanie',
			    	'QUESTIONDELETE': 'Usuń pytanie',
			    	'QUESTIONNAIRESAVE': 'Zapisz szablon ankiety'
			    		},
};
	  $rootScope.currentLanguage = 'en';
	  return function(label) {
	    return tables[$rootScope.currentLanguage][label];
	  };
	}]);