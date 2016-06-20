twitterApp.controller('trendsListController',
	['$scope', '$location','$routeParams', 'topicStorage', 'twitterAPIFactory', 'blockedUsersFilter',
	function($scope, $location, $routeParams, topicStorage, twitterAPIFactory, blockedUsersFilter) {
		var self = this;

		this.init = function() {		
			self.topicId = $routeParams.id;
			self.trendTopic = topicStorage.getData()[self.topicId];
			self.title = "Twitts on " + self.trendTopic.name;
			twitterAPIFactory.searchTrendingTopics(self.trendTopic.query).then(function(twitts){
				self.twitts = twitts;
				self.filteredTwitts = blockedUsersFilter(self.twitts);
			});
		};

		this.showTwittDetails = function(twitt){
			var index = self.twitts.indexOf(twitt);
			$location.path('trends/' + self.topicId + '/' + index);
		};

		this.init();
	}
]);