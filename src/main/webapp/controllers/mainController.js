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
			    	'VALIDERROR_QUESTIONALREADYEXIST': 'Question with this title already exist in questionnaire!',
					'VALIDERROR_NOTITLEORCONTENT': 'Question must have title and content!',
					'QUESTIONNAIRE_CREATED': 'Questionnaire created successfully',
					'VALIDERROR_NOQUESTION': 'Questionnaire must contain at least one question!',
					'VALIDERROR_NOTITLE': 'Questionnaire must have a title',
					'QUESTIONSAVE': 'Save question',
			    	'QUESTIONDELETE': 'Delete question',
			    	'QUESTIONNAIRESAVE': 'Save questionnaire',
			    	'LOGIN': 'Login: ',
			    	'PASSWORD': 'Password: ',
			    	'LOGINTO': 'Log in',
			    	'ERROR_LOG_IN': 'Wrong login/password',
			    	'BACK': 'Back'},
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
			    	'VALIDERROR_QUESTIONALREADYEXIST': 'Podane pytanie istnieje już na liście!',
					'VALIDERROR_NOTITLEORCONTENT': 'Podaj tytuł i treść pytania!',
					'QUESTIONNAIRE_CREATED': 'Utworzono podany szablon ankiety!',
					'VALIDERROR_NOQUESTION': 'Nie zdefiniowałeś żadnego pytania!',
					'VALIDERROR_NOTITLE': 'Podaj tytuł szablonu ankiety!',
					'QUESTIONSAVE': 'Zapisz pytanie',
			    	'QUESTIONDELETE': 'Usuń pytanie',
			    	'QUESTIONNAIRESAVE': 'Zapisz szablon ankiety',
			    	'LOGIN': 'Login: ',
			    	'PASSWORD': 'Hasło: ',
			    	'LOGINTO': 'Zaloguj',
			    	'ERROR_LOG_IN': 'Zły login/hasło',
			    	'BACK': 'Powrót'
			    		},
};
		$rootScope.currentLanguage = 'en';
	  return function(label) {
	    return tables[$rootScope.currentLanguage][label];
	  };
	}]);
