app.controller('recentGamesController', ['$http', function($http){
		var lol = this;
		var link = 'https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/21418698/recent?api_key=d4095fd1-ec30-4403-8db7-fdacebef9b17';
		lol.games = [];
		lol.update = function() {
			var summonerId = document.getElementById('summonerId').value;
			link = 'https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/' + summonerId + '/recent?api_key=d4095fd1-ec30-4403-8db7-fdacebef9b17';
			$http.get(link).success(function(data){
			lol.games = data;
			console.log(lol.games);
		}).error(function(e){
			console.log(e);
		});
		};

		$http.get(link).success(function(data){
			lol.games = data;
		});

	}]);