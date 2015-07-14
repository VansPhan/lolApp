app.controller('apiController', ['$http', '$scope', function($http, $scope){
	//default summoner is Van for now
	var link = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/van?api_key=d4095fd1-ec30-4403-8db7-fdacebef9b17';
	//Will use user property to serve data onto html
		$scope.user = [];
		$scope.games = [];
	//After submit event fires- populates user property with data
		$scope.username = {"name":""};
		this.submit = function() {
		//Gets the name entered into text box
			getUser();
				
		};
		var getUser = function (){
			//Edits the api link with the new name
				link = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + $scope.username.name + '?api_key=d4095fd1-ec30-4403-8db7-fdacebef9b17';
				$http.get(link).success(function(data){
			//If successful, put data into user property
				angular.forEach(data, function (val, key){
					$scope.user = val;
				})
				

				getGames(data);

			}).error(function(e){
			/*
			If error then display alert box.
			NOTE: Need to learn how to serve the given error html
			given by angular.
			*/
				alert('Summoner not found!');
			
			});
		}
		var getGames = function (data){
			var userid = "";
			angular.forEach(data, function(val, key) {
				// only itterate one time
				userid = val.id;
			});
			link = 'https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/' + userid + '/recent?api_key=d4095fd1-ec30-4403-8db7-fdacebef9b17';
			$http.get(link).success(function(data){
				$scope.games = data;
			});

		};
		
	//Initialize on startup
		$http.get(link).success(function(data){
			var init;
			angular.forEach(data, function (val, key){
				init = val;
			})

			$scope.user = init;
		});
	}]);