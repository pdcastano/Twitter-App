twitterApp.service("geolocalization", ['$q', function($q){
	
	this.isGeoEnabled = function() {
		if ('geolocation' in navigator) {
			return true;
		}
		return false;
	};

	this.getMyPosition = function() {
		var deferred =  $q.defer();

		if (this.isGeoEnabled()) {
			navigator.geolocation.getCurrentPosition(function(position){
				deferred.resolve(position);
			});
		} else {
			deferred.reject(null);
		}

		return deferred.promise;
	};

}]);