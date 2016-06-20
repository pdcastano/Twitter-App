twitterApp.controller('trendTopicsController', 
	['$scope', '$location', 'geolocalization','twitterAPIFactory',
	function($scope, $location, geoService, twitterAPIFactory) {
		var self = this;

		this.init = function(){
			self.title = "Trending topics";
			self.getNearestTopics();
		};

		this.getNearestTopics = function() {
			geoService.getMyPosition().then(function(myPosition){
				twitterAPIFactory.getClosestTopics(myPosition.coords.latitude,myPosition.coords.longitude).then(function(closestTrends){
					twitterAPIFactory.getTrendingTopics(closestTrends[0].woeid).then(function(topics) {
						self.topics = topics;
					});
				});
			});
		};

		this.showTwitts = function(index){
			$location.path('/trends/' + index);
		};

		this.init();
	}
]);