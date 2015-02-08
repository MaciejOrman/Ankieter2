function audytorController($scope, $http, $location, $filter){
	
	var langFilter = $filter("xlat");
	$scope.tytul;
	$scope.tresc;
	$scope.pytania =[];
	$scope.tytulSzablonu;
	$scope.szablonAnkiety;
	$scope.typPytania=0;
	$scope.wybranyIndeksPytania=0;
	$scope.rodzajePytan = [{name: langFilter("QUESTIONTYPEOPEN"), value: 0},{name: langFilter("QUESTIONTYPETF"), value: 1},{name: langFilter("QUESTIONTYPESCALE"), value: 2}];
    $scope.form = {type : $scope.rodzajePytan[0].value};
    $scope.info;
    
	$scope.zapiszPytanie = function(){
		if($scope.tytul!=null && $scope.tresc!=null){
			if(znajdzIdPytaniaPoTytule($scope.tytul)==-1){
				$scope.pytania.push({"tytul":$scope.tytul,"tresc":$scope.tresc,"rodzajPytania":$scope.form.type});
				console.log($scope.pytania);
				$scope.wybranyIndeksPytania=$scope.pytania.length-1;
			}else{
				$scope.info = langFilter("VALIDERROR_QUESTIONALREADYEXIST");
			}
		}else{
			$scope.info = langFilter("VALIDERROR_NOTITLEORCONTENT");
		}
	}
	
	$scope.zapiszSzablon = function(){
		if($scope.tytulSzablonu != null){
			if($scope.pytania.length!=0){
			$scope.szablonAnkiety = {"nazwa_szablonu":$scope.tytulSzablonu,"pytania":$scope.pytania};
			$http.post('/zapiszSzablonAnkiety', $scope.szablonAnkiety).
			  success(function(data, status, headers, config) {
			    alert(langFilter("QUESTIONNAIRE_CREATED"));
			    $location.path('/audytor/');
			  }).
			  error(function(data, status, headers, config) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
			}else{
				$scope.info = langFilter("VALIDERROR_NOQUESTION");
			}
		}else{
			
			$scope.info = langFilter("VALIDERROR_NOTITLE");
		}

	}
	
	$scope.nowySzablonForm = function(){
		$location.path('/nowySzablon/');
		
	}
	
	$scope.pokazPytanie = function(tytul, $index){		
		for(var i =0; i<$scope.pytania.length;i++){
			var pytanie = $scope.pytania[i];
			if(pytanie.tytul==tytul){
				$scope.tytul =pytanie.tytul;
				$scope.tresc =pytanie.tresc;
				$scope.form = {type : $scope.rodzajePytan[pytanie.rodzajPytania].value};
			}
		}
		 $scope.wybranyIndeksPytania = $index;
	}
	$scope.usunPytanie = function(){
		console.log(znajdzIdPytaniaPoTytule($scope.tytul));
		var znalezioneIdPytania = znajdzIdPytaniaPoTytule($scope.tytul);
		if(znalezioneIdPytania!=-1){
			$scope.pytania.splice(znalezioneIdPytania,1);
			if($scope.wybranyIndeksPytania!=0){
				$scope.wybranyIndeksPytania--;
			}
			$scope.tytul =$scope.pytania[$scope.wybranyIndeksPytania].tytul;
			$scope.tresc =$scope.pytania[$scope.wybranyIndeksPytania].tresc;
		}
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
			$scope.wybranyIndeksPytania--;
		}
	}
	
	$scope.wDol = function(){
		
		var aktualnaPozycja = znajdzIdPytaniaPoTytule($scope.tytul);
		console.log(aktualnaPozycja);
		console.log($scope.pytania.length);
		if(aktualnaPozycja<$scope.pytania.length-1 && aktualnaPozycja>=0){
			var elZamieniany = $scope.pytania[aktualnaPozycja+1];
			var elDoZamieniany = $scope.pytania[aktualnaPozycja];
			$scope.pytania[aktualnaPozycja+1] = elDoZamieniany;
			$scope.pytania[aktualnaPozycja] = elZamieniany;
			$scope.wybranyIndeksPytania++;
		}
	}
	$scope.anuluj = function(){
		$location.path('/audytor/');
	}
	
	function znajdzIdPytaniaPoTytule(tytul){
		for(var i =0; i<$scope.pytania.length;i++){
			var pytanie = $scope.pytania[i];
			if(pytanie.tytul==tytul){
				return i;
			}
		}
		return -1;
	}
	
	
	
	
	
}