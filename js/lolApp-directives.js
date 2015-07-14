
  var app = angular.module('lolApp-directives', []);

  app.directive('summonerdescription', function() {
  return {
    restrict: 'E',
    templateUrl: 'summoner-description.html'
  };
});

  app.directive('summonermatches', function() {
  return {
    restrict: 'E',
    templateUrl: 'summoner-matches.html'
  };
});
