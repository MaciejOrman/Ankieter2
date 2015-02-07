function ankietowanyController($scope, $http, $location){

	$scope.planyAnkietyzacji =[];
	$scope.nrIndeksu = 1;

	//http://www.jeffryhouser.com/index.cfm/2014/6/2/How-do-I-run-code-when-a-variable-changes-with-AngularJS
	
	$scope.pobierzPlanyAnkietyzacji = function(){
		$http.post('/pobierzPlanyAnkietyzacji', 1).				//przeslac nrIndeksu zamiast magic number
		  success(function(data, status, headers, config) {
			  $scope.planyAnkietyzacji = data;
		  }).
		  error(function(data, status, headers, config) {
			    alert("NIE!");
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
	}
}