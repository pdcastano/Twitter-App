twitterApp.controller('blockedController',
	['$scope', 'blockedUserStorage', 
	function($scope, blockedUserStorage) {

	$scope.init = function() {
		$scope.title = "Blocked Users";
		$scope.userName = "";
		this.getBlockedUsers();
	};

	$scope.getBlockedUsers = function() {
		$scope.blockedUsers = blockedUserStorage.getBlockedUsers();
	};

	$scope.blockUser = function (userName) {
		blockedUserStorage.addBlockedUser(userName);
		$scope.userName = "";
		this.getBlockedUsers();		
	};

	$scope.unBlockUser = function(userName) {
		blockedUserStorage.removeBlockedUser(userName);
		this.getBlockedUsers();		
	};

	//init scope
	$scope.init();

}]);