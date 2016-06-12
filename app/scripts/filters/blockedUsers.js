twitterApp.filter('blockedUsers', ['blockedUserStorage', function(blockedUserStorage) {

	//Filter function
	function filterFn(twitts) {
		var twittsUnblocked = []
		var screenName = "";
		var blockedUsers = blockedUserStorage.getBlockedUsers();

		if (twitts.length && blockedUsers.length) {
			twitts.forEach(function(twitt,index) {
				screenName = "@" + twitt.user.screen_name;
				blockedUsers.forEach(function(blockedUser,index2) {
					if (screenName == blockedUser) {
						return;
					}
					twittsUnblocked.push(twitt);
				});
			});
		}else{
			twittsUnblocked = twitts;
		}

		return twittsUnblocked;
	};

	//return filfer function
	return filterFn;

}]);