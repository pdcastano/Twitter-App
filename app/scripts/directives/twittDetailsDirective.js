twitterApp.directive('twittDetails', function(){
	
	var TwittDetailsDirective = {
		replace: true,
		transclude: false,
		templateUrl: "../templates/twitt-details.html",
		link: function($scope,element,attrs){
			//TODO
		}
	};

	return TwittDetailsDirective;
});