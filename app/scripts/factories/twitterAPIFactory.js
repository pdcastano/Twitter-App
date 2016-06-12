twitterApp.factory('twitterAPIFactory',
	['$http','$q', 'timelineStorage', 'topicStorage', 'twittsTopicStorage',
	function($http, $q, timelineStorage, topicStorage, twittsTopicStorage) {

	var serverUrl = "http://localhost:3000/";

	var twitterAPI = {

		getTimeline: function(count){
			var deferred = $q.defer();
			
			$http.get(serverUrl + "timeline?count=" + count).success(function(response){
				timelineStorage.saveData(response);
				deferred.resolve(response);
			},function(error){
				deferred.reject(error);
			});

			return deferred.promise;
		},

		getTwittDetails: function(id) {
			var deferred = $q.defer();
			var storage = timelineStorage.getData();

			if (storage) {
				if (storage.length > id) {
					deferred.resolve(storage[id]);
				} else {
					deferred.reject(null);
				}
			} else {
				deferred.reject(null);
			}

			return deferred.promise;
		},

		getClosestTopics: function(lat,long){
			var deferred = $q.defer();
			
			$http.get(serverUrl + "myplace?lat=" + lat + "&long=" + long).success(function(response){
				deferred.resolve(response);
			},function(error){
				deferred.reject(error);
			});

			return deferred.promise;
		},

		getTrendingTopics: function(id){
			var deferred = $q.defer();
			
			$http.get(serverUrl + "trends?id=" + id).success(function(response){
				topicStorage.saveData(response[0].trends);
				deferred.resolve(response[0].trends);
			},function(error){
				deferred.reject(error);
			});

			return deferred.promise;
		},

		searchTrendingTopics: function(text){
			var deferred = $q.defer();
			
			$http.get(serverUrl + "search?q=" + text).success(function(response){
				twittsTopicStorage.saveData(response.statuses);
				deferred.resolve(response.statuses);
			},function(error){
				deferred.reject(error);
			});

			return deferred.promise;
		}
	};

	return twitterAPI;
}]);