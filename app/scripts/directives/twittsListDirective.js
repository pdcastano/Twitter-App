twitterApp.directive('twittsList', 
	['blockedUsersFilter',
	function(blockedUsersFilter) {
	
	var TwittsListDirective = {
		replace: true,
		transclude: false,
		templateUrl: "../templates/twitts-list.html",
		scope: {
			twitts: "=",
			filteredTwitts: "=",
			showTwittDetails: "&"
		},
		controller: ['$scope', function($scope){
			//TODO
		}],
		link: function(scope,element,attrs,controller,transcludeFn){
			//TODO
		}
	};

	return TwittsListDirective;
}]);