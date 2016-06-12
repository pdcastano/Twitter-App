twitterApp.controller("twittDetailsController", 
	['$scope', '$routeParams', 'twitterAPIFactory', 
	function($scope, $routeParams, twitterAPIFactory) {
		
		$scope.init = function(){
			$scope.twittId = parseInt($routeParams.id);
			this.getTwittDetails();
		};

		$scope.getTwittDetails = function(){
			twitterAPIFactory.getTwittDetails(this.twittId).then( function(response) {
		    	$scope.twitt = response;
			});
		};

	    $scope.init();
}]);