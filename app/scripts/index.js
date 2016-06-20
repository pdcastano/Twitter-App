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
			controller: 'twittsTimelineController',
			controllerAs: 'twittsTimeline'
		}).when('/timeline',{
			redirectTo: "/"
		}).when('/timeline/:id', {
			templateUrl: 'templates/timeline-twitt-details.html',
			controller: 'twittDetailsController',
			controllerAs: 'twittDetails'
		}).when("/blocked", {
			templateUrl: 'templates/blocked.html',
			controller: 'blockedUsersController',
			controllerAs: 'blockedUsers'
		}).when("/trends", {
			templateUrl: 'templates/trends.html',
			controller: 'trendTopicsController',
			controllerAs: 'trendTopics'
		}).when("/trends/:id", {
			templateUrl: 'templates/trends-list.html',
			controller: 'trendsListController',
			controllerAs: 'trendsList'
		}).when("/trends/:id/:twittId", {
			templateUrl: 'templates/trends-twitt-details.html',
			controller: 'trendTwittDetailsController',
			controllerAs: 'trendTwittDetails'
		}).otherwise({
			redirectTo: "/"
		});

}]);

