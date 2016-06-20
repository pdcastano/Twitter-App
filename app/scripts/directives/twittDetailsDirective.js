twitterApp.directive('twittDetails', function(){
	
	var TwittDetailsDirective = {
		replace: true,
		transclude: false,
		templateUrl: "../templates/twitt-details.html",
		scope: {
			title: "=",
			twitt: "="
		},
		controller: ['$scope', function($scope){
			//TODO
		}],
		link: function($scope,element,attrs){
			//TODO
		}
	};

	return TwittDetailsDirective;
});