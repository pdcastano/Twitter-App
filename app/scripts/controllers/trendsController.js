twitterApp.controller('trendsController', 
	['$scope', '$location', 'geolocalization','twitterAPIFactory',
	function($scope, $location, geoService, twitterAPIFactory) {
	
	$scope.init = function(){
		$scope.title = "Trending topics";
		this.getNearestTopics();
	};

	$scope.getNearestTopics = function() {
		geoService.getMyPosition().then(function(myPosition){
			twitterAPIFactory.getClosestTopics(myPosition.coords.latitude,myPosition.coords.longitude).then(function(closestTrends){
				twitterAPIFactory.getTrendingTopics(closestTrends[0].woeid).then(function(topics) {
					$scope.topics = topics;
				});
			});
		});
	};

	$scope.showTwitts = function(index){
		$location.path('/trends/' + index);
	};

	$scope.init();
}]);