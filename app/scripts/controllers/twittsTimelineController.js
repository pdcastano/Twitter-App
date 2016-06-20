/***
* Use Controller as sentences to use dot notation on DOM. 
* so we don't need $scope to bind view-data.
* we can use 'this' to replace $scope, but we need $scope for specials functions ($on,$emit,$broadcast...)
***/ 

twitterApp.controller('twittsTimelineController',
	['$scope', '$location', 'twitterAPIFactory', 'blockedUsersFilter',
	function($scope, $location, twitterAPIFactory, blockedUsersFilter) {
		var self = this;

		this.init = function() {
			self.title = 'Timeline';
			twitterAPIFactory.getTimeline(10).then(function(timeline) {
				self.twitts = timeline;
				self.filteredTwitts = blockedUsersFilter(self.twitts);
			});
		};	

		this.showTwittDetails =  function(twitt) {
			var index = self.twitts.indexOf(twitt);
			$location.path('/timeline/' + index);
		};

		this.init();
	}
]);