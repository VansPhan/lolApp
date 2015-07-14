app.controller('apiController', ['$http', '$scope', function($http, $scope){

	var cdn = $http.get('https://global.api.pvp.net/api/lol/static-data/na/v1.2/realm?api_key=d4095fd1-ec30-4403-8db7-fdacebef9b17');
	cdn;
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
				for (var i = 0; i < data.games.length; i++) {
					switch(data.games[i].spell1) {
						case 1:
							data.games[i].spell1 = "SummonerBoost";
						break;
						case 2:
							data.games[i].spell1 = "SummonerClairvoyance";
						break;
						case 3:
							data.games[i].spell1 = "SummonerExhaust";
						break;
						case 4:
							data.games[i].spell1 = "SummonerFlash";
						break;
						case 6:
							data.games[i].spell1 = "SummonerHaste";
						break;
						case 7:
							data.games[i].spell1 = "SummonerHeal";
						break;
						case 11:
							data.games[i].spell1 = "SummonerSmite";
						break;
						case 12:
							data.games[i].spell1 = "SummonerTeleport";
						break;
						case 13:
							data.games[i].spell1 = "SummonerMana";
						break;
						case 14:
							data.games[i].spell1 = "SummonerDot";
						break;
						case 17:
							data.games[i].spell1 = "SummonerOdinGarrison";
						break;
						case 21:
							data.games[i].spell1 = "SummonerBarrier";
						break;
						case 30:
							data.games[i].spell1 = "SummonerPoroRecall";
						break;
						case 31:
							data.games[i].spell1 = "SummonerPoroThrow";
						break;
						case 32:
							data.games[i].spell1 = "SummonerSnowball";
						break;
						default:
							break;
					};

					switch(data.games[i].spell2) {
						case 1:
							data.games[i].spell2 = "SummonerBoost";
						break;
						case 2:
							data.games[i].spell2 = "SummonerClairvoyance";
						break;
						case 3:
							data.games[i].spell2 = "SummonerExhaust";
						break;
						case 4:
							data.games[i].spell2 = "SummonerFlash";
						break;
						case 6:
							data.games[i].spell2 = "SummonerHaste";
						break;
						case 7:
							data.games[i].spell2 = "SummonerHeal";
						break;
						case 11:
							data.games[i].spell2 = "SummonerSmite";
						break;
						case 12:
							data.games[i].spell2 = "SummonerTeleport";
						break;
						case 13:
							data.games[i].spell2 = "SummonerMana";
						break;
						case 14:
							data.games[i].spell2 = "SummonerDot";
						break;
						case 17:
							data.games[i].spell2 = "SummonerOdinGarrison";
						break;
						case 21:
							data.games[i].spell2 = "SummonerBarrier";
						break;
						case 30:
							data.games[i].spell2 = "SummonerPoroRecall";
						break;
						case 31:
							data.games[i].spell2 = "SummonerPoroThrow";
						break;
						case 32:
							data.games[i].spell2 = "SummonerSnowball";
						break;
						default:
							break;
					};
				};
				$scope.games = data;
			});

		};

	}]);