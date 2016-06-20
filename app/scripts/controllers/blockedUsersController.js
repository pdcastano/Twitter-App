twitterApp.controller('blockedUsersController',
	['$scope', 'blockedUserStorage', 
	function($scope, blockedUserStorage) {
		var self = this;

		this.init = function() {
			self.title = "Blocked Users";
			self.userName = "";
			self.getBlockedUsers();
		};

		this.getBlockedUsers = function() {
			self.usersBlocked = blockedUserStorage.getBlockedUsers();
		};

		this.blockUser = function (userName) {
			blockedUserStorage.addBlockedUser(userName);
			self.userName = "";
			self.getBlockedUsers();		
		};

		this.unBlockUser = function(userName) {
			blockedUserStorage.removeBlockedUser(userName);
			self.getBlockedUsers();
		};

		//init scope
		this.init();
	}
]);