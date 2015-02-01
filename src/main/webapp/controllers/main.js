/**
 * 
 */
function myController($scope, $http){
	
	$scope.tytul;
	$scope.tresc;
	$scope.pytania =[];
	$scope.tytulSzablonu;
	$scope.szablonAnkiety;
	
	$scope.wyswietl = function(){ 
	
		alert($scope.tytul);
		console.log($scope.tresc);
	}
	
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
	
}