//file where magic start :)

var twitterApp = angular.module('twitterApp',[
	'ngRoute',
	'ngSanitize',
	'ngLodash'
	]);

twitterApp.config(['$routeProvider','$locationProvider',
	function($routeProvider,$locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: 'templates/timeline.html',
			controller: 'timelineController',
			controllerAs: 'timeline'
		}).when('/timeline',{
			redirectTo: "/"
		}).when('/timeline/:id', {
			templateUrl: 'templates/timeline-twitt-details.html',
			controller: 'twittDetailsController',
			controllerAs: 'twittDetails'
		}).when("/blocked", {
			templateUrl: 'templates/blocked.html',
			controller: 'blockedController',
			controllerAs: 'blocked'
		}).when("/trends", {
			templateUrl: 'templates/trends.html',
			controller: 'trendsController',
			controllerAs: 'trends'
		}).when("/trends/:id", {
			templateUrl: 'templates/trends-list.html',
			controller: 'trendsListController',
			controllerAs: 'trendsList'
		}).when("/trends/:id/:twittId", {
			templateUrl: 'templates/trends-twitt-details.html',
			controller: 'trendsTwittsController',
			controllerAs: 'trendsTwittDetails'
		}).otherwise({
			redirectTo: "/"
		});

}]);

