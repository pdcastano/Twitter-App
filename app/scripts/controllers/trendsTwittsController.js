twitterApp.controller('trendsTwittsController',
	['$scope','$routeParams', 'twittsTopicStorage', 'topicStorage',
	function($scope, $routeParams, twittsTopicStorage, topicStorage){
	
	$scope.init = function() {		
		$scope.topicId = $routeParams.id;
		$scope.twittId = $routeParams.twittId;
		$scope.topic =  topicStorage.getData()[$scope.topicId];
		$scope.twitt = twittsTopicStorage.getData()[$scope.twittId];
		$scope.title = $scope.topic.name;
	};

	$scope.init();
}]);