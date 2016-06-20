twitterApp.controller("twittDetailsController", 
	['$scope', '$routeParams', 'twitterAPIFactory', 
	function($scope, $routeParams, twitterAPIFactory) {
		var self = this;

		this.init = function(){
			self.twittId = parseInt($routeParams.id);
			self.getTwittDetails();
		};

		this.getTwittDetails = function(){
			twitterAPIFactory.getTwittDetails(self.twittId).then( function(response) {
		    	self.twitt = response;
			});
		};

	    this.init();
	}
]);