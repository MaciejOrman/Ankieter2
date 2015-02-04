function audytorController($scope, $http, $location){
	
	$scope.tytul;
	$scope.tresc;
	$scope.pytania =[];
	$scope.tytulSzablonu;
	$scope.szablonAnkiety;
	
	$scope.zapiszPytanie = function(){
		$scope.pytania.push({"tytul":$scope.tytul,"tresc":$scope.tresc});
		console.log($scope.pytania);
	}
	
	$scope.zapiszSzablon = function(){
		$scope.szablonAnkiety = {"nazwa_szablonu":$scope.tytulSzablonu,"pytania":$scope.pytania};
		$http.post('/zapiszSzablonAnkiety', $scope.szablonAnkiety).
		  success(function(data, status, headers, config) {
		    alert("Utworzono podany szablon ankiety!");
		  }).
		  error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
	}
	
	$scope.nowySzablonForm = function(){
		$location.path('/nowySzablon/');
		
	}
	
	$scope.pokazPytanie = function(tytul){		
		for(var i =0; i<$scope.pytania.length;i++){
			var pytanie = $scope.pytania[i];
			if(pytanie.tytul==tytul){
				$scope.tytul =pytanie.tytul;
				$scope.tresc =pytanie.tresc;
			}
		}
	}
	$scope.usunPytanie = function(){
		console.log(znajdzIdPytaniaPoTytule($scope.tytul));
		$scope.pytania.splice(znajdzIdPytaniaPoTytule($scope.tytul),1);
	}
	
	$scope.wGore = function(){
		
		var aktualnaPozycja = znajdzIdPytaniaPoTytule($scope.tytul);
		console.log(aktualnaPozycja);
		console.log($scope.pytania.length);
		if(aktualnaPozycja<$scope.pytania.length && aktualnaPozycja>0){
			var elZamieniany = $scope.pytania[aktualnaPozycja-1];
			var elDoZamieniany = $scope.pytania[aktualnaPozycja];
			$scope.pytania[aktualnaPozycja-1] = elDoZamieniany;
			$scope.pytania[aktualnaPozycja] = elZamieniany;
		}
	}
	
	$scope.wDol = function(){
		
		var aktualnaPozycja = znajdzIdPytaniaPoTytule($scope.tytul);
		console.log(aktualnaPozycja);
		console.log($scope.pytania.length);
		if(aktualnaPozycja<=$scope.pytania.length-1 && aktualnaPozycja>=0){
			var elZamieniany = $scope.pytania[aktualnaPozycja+1];
			var elDoZamieniany = $scope.pytania[aktualnaPozycja];
			$scope.pytania[aktualnaPozycja+1] = elDoZamieniany;
			$scope.pytania[aktualnaPozycja] = elZamieniany;
		}
	}
	
	function znajdzIdPytaniaPoTytule(tytul){
		for(var i =0; i<$scope.pytania.length;i++){
			var pytanie = $scope.pytania[i];
			if(pytanie.tytul==tytul){
				return i;
			}
		}		
	}
	
	
	
	
	
}