twitterApp.factory('timelineStorage', function(){
	
	var storageName = "twitterTimeline";

	var TimelineStorage = {

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

	return TimelineStorage;

});