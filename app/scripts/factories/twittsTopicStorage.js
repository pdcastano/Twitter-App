twitterApp.factory('twittsTopicStorage', function(){
	
	var storageName = "twittsTopic";

	var TwittsTopicStorage = {
		
		saveData: function(data) {
			localStorage.setItem(storageName,JSON.stringify(data));
		},

		getData: function() {
			var data = localStorage.getItem(storageName);

			if (data) {
				return JSON.parse(data);
			} else {
				return null;
			}
		}
	};

	return TwittsTopicStorage;
});