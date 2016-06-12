twitterApp.factory('blockedUserStorage', ['$q', function($q) {
	
	var storageName = "blockedUsers";

	var BlockedUserStorage = {

		getBlockedUsers: function() {
			var blockedUsers = localStorage.getItem(storageName);

			if (blockedUsers) {
				return JSON.parse(blockedUsers);
			} 

			return null;
		},

		addBlockedUser: function(user) {
			var blockedUsers = localStorage.getItem(storageName);

			if (!user || (user.slice(0,1) != "@")) {
				return false;
			} else {
				if (!blockedUsers) {
					blockedUsers = [];
					blockedUsers.push(user);
					localStorage.setItem(storageName, JSON.stringify(blockedUsers));
				} else {
					blockedUsers = JSON.parse(blockedUsers);
					blockedUsers.push(user);
					localStorage.setItem(storageName, JSON.stringify(blockedUsers));
				}
			}
		},

		removeBlockedUser: function(user) {
			var blockedUsers = localStorage.getItem(storageName);

			if (!blockedUsers || !user) {
				return false;
			} else {
				blockedUsers = JSON.parse(blockedUsers);
				blockedUsers.forEach(function(userBloqued, index) {	
					if (user == userBloqued) {
						blockedUsers.splice(index,1);
					}
				});

				localStorage.setItem(storageName, JSON.stringify(blockedUsers));
			}
		}
	};

	return BlockedUserStorage;
}]);