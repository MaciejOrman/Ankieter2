function loginController($scope, $http, $location){
	$scope.login;
	$scope.haslo;
	$scope.odpowiedz;
	$scope.info;
	
	$scope.zaloguj = function(){
		console.log($scope.login);
		console.log($scope.haslo);
		var konto = {"login":$scope.login,"haslo":$scope.haslo };
		
		if($scope.login!=null && $scope.haslo!=null){
		
		$http.post('/logowanie', konto ).
		  success(function(data, status, headers, config) {
			  $scope.odpowiedz = data;
			  if( $scope.odpowiedz == "ankietowany"){
				  $location.path("/ankietowany");
			  }else if($scope.odpowiedz == "audytor"){
				  $location.path("/audytor");
			  }else{
				  $location.path("/blad");
			  }
		  }).
		  error(function(data, status, headers, config) {
			  $scope.info ="Błąd poczas logowania!";
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
		}else{
			$scope.info = "Login i hasło nie mogą być puste!";
		}
		
	}
	$scope.powrot = function(){
		$location.path("/login");
	}
	
	$scope.wyloguj = function(){
		$location.path("/login");
	}
	
}