twitterApp.controller('trendsListController',
	['$scope', '$location','$routeParams', 'topicStorage', 'twitterAPIFactory', 'blockedUsersFilter',
	function($scope, $location, $routeParams, topicStorage, twitterAPIFactory, blockedUsersFilter) {
	
	$scope.init = function() {		
		$scope.topicId = $routeParams.id;
		$scope.trendTopic = topicStorage.getData()[$scope.topicId];
		$scope.title = "Twitts on " + $scope.trendTopic.name;
		twitterAPIFactory.searchTrendingTopics($scope.trendTopic.query).then(function(twitts){
			$scope.twitts = twitts;
			$scope.filteredTwitts = blockedUsersFilter($scope.twitts);
		});
	};

	$scope.showTwittDetails = function(twitt){
		var index = $scope.twitts.indexOf(twitt);
		$location.path('trends/' + $scope.topicId + '/' + index);
	};

	$scope.init();
}]);