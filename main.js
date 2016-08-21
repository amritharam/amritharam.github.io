var app = angular.module('personalWebsite', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
	.when("/aboutme", {templateUrl: "partials/aboutme.html", controller: "PageCtrl"})
	.when("/resume", {templateUrl: "partials/resume.html", controller: "PageCtrl"})
	.when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
	.otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"})
}]);

app.controller('PageCtrl', function() {
	console.log("Page controller activated");
	$('.carousel').carousel({
	interval: 5000
	});
})

$('.tooltip-social').tooltip({
	selector: "a[data-toggle=tooltip]"
	})