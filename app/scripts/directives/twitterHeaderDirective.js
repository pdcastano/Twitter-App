twitterApp.directive('twitterHeader', function() {
	return {
		replace: true,
		transclude: false,
		templateUrl: 'templates/header.html'
	}
});