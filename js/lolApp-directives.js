
  var app = angular.module('lolApp-directives', []);

  app.directive('summonerdescription', function() {
  return {
    restrict: 'E',
    templateUrl: 'summoner-description.html'
  };
  });
