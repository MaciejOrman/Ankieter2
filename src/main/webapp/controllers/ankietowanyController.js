function ankietowanyController($scope,$rootScope, $http, $location){

	$rootScope.planyAnkietyzacji =[];
	
	$rootScope.nazwaKursu;
	$rootScope.prowadzacy;
	$scope.pytania = [];
	$rootScope.liczbaPytan;
	$rootScope.odpowiedzi= [];
	$rootScope.pytanie;
	$rootScope.odpowiedz;
	$rootScope.aktualnaStrona=0;
	
	$rootScope.pobierzPlanyAnkietyzacji = function(){
		$http.post('/pobierzPlanyAnkietyzacji', 1).				//przeslac nrIndeksu zamiast magic number
		  success(function(data, status, headers, config) {
			  $rootScope.planyAnkietyzacji = data;
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
		$rootScope.aktualnaStrona = 0;
		
		$rootScope.odpowiedz;
		//$scope.$apply();
		$location.path("/wypelnijAnkiete/")
		//console.log("$scope.nazwaKursu:"+$scope.nazwaKursu);
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
	$scope.anuluj = function(){
		$location.path('/ankietowany/');
	}
	$scope.wyslij = function(){
		$location.path('/ankietowany/');
	}
	
	
}