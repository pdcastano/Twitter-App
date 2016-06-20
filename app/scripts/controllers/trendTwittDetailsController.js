twitterApp.controller('trendTwittDetailsController',
	['$scope','$routeParams', 'twittsTopicStorage', 'topicStorage',
	function($scope, $routeParams, twittsTopicStorage, topicStorage){
		var self = this;

		this.init = function() {		
			self.topicId = $routeParams.id;
			self.twittId = $routeParams.twittId;
			self.topic =  topicStorage.getData()[self.topicId];
			self.twitt = twittsTopicStorage.getData()[self.twittId];
			self.title = self.topic.name;
		};

		this.init();
	}
]);