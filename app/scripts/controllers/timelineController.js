twitterApp.controller('timelineController',
	['$scope', '$location', 'twitterAPIFactory', 'blockedUsersFilter',
	function($scope, $location, twitterAPIFactory, blockedUsersFilter) {

	$scope.init = function() {
		$scope.title = 'Timeline';
		twitterAPIFactory.getTimeline(10).then(function(timeline) {
			$scope.twitts = timeline;
			$scope.filteredTwitts = blockedUsersFilter($scope.twitts);
		});
	};	

	$scope.showTwittDetails =  function(twitt) {
		var index = $scope.twitts.indexOf(twitt);
		$location.path('/timeline/' + index);
	};

	$scope.init();

}]);