function ankietowanyController($scope,$rootScope, $http, $location, myService){

	$rootScope.planyAnkietyzacji =[];
	
	$rootScope.nazwaKursu;
	$rootScope.prowadzacy;
	$scope.pytania = [];
	$rootScope.liczbaPytan;
	$rootScope.odpowiedzi= [];
	$rootScope.pytanie;
	$rootScope.odpowiedz;
	$rootScope.aktualnaStrona=0;


	//http://www.jeffryhouser.com/index.cfm/2014/6/2/How-do-I-run-code-when-a-variable-changes-with-AngularJS
	
	$rootScope.pobierzPlanyAnkietyzacji = function(){
		$http.post('/pobierzPlanyAnkietyzacji', 1).				//przeslac nrIndeksu zamiast magic number
		  success(function(data, status, headers, config) {
			  $rootScope.planyAnkietyzacji = data;
			  myService.set(data);
			  console.log(data);
		  }).
		  error(function(data, status, headers, config) {
			    alert("Nie pobrano planów ankietyzacji!");
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
	}
	
	$rootScope.wypelnijAnkiete = function(id){
		
		console.log(id);
		id--;
		
		var planAnkietyzacji = $rootScope.planyAnkietyzacji[id];
		console.log(planAnkietyzacji);
		$rootScope.nazwaKursu = planAnkietyzacji.kurs.nazwa;
		$rootScope.prowadzacy = planAnkietyzacji.kurs.prowadzacy;
		$rootScope.pytania = planAnkietyzacji.szablonAnkiety.pytania;
		$rootScope.liczbaPytan = $rootScope.pytania.length;
		$rootScope.pytanie =$rootScope.pytania[$rootScope.aktualnaStrona].tresc;
		console.log($rootScope.pytania);
		
		$rootScope.odpowiedz;
		//$scope.$apply();
		$location.path("/wypelnijAnkiete/")
		//console.log("$scope.nazwaKursu:"+$scope.nazwaKursu);
		//console.log(myService.get());
	}
	
	$rootScope.nastepnePytanie = function(){
		if($rootScope.aktualnaStrona < $rootScope.pytania.length-1){
			$rootScope.aktualnaStrona++;
			$rootScope.pytanie =$rootScope.pytania[$rootScope.aktualnaStrona].tresc;
			//$rootScope.odpowiedzi[$rootScope.aktualnaStrona] = $rootScope.odpowiedz; 
		}
	}
	$rootScope.poprzedniePytanie = function(){		
		if($rootScope.aktualnaStrona >0){
			$rootScope.aktualnaStrona--;
			$rootScope.pytanie =$rootScope.pytania[$rootScope.aktualnaStrona].tresc;
			//$rootScope.odpowiedzi[$rootScope.aktualnaStrona] = $rootScope.odpowiedz; 
		}
	}
}