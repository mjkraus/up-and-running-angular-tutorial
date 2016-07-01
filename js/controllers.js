// this is the myApp module
// dependencies go in [], but don't need them for this application
// myApp has all the code for the application - this is an EX of namespacing. 
//Namespacing protects the app code, so no other script interfers with our application code
var myApp = angular.module('myApp', []);

//controller use variable scope - super variable to use to pass from JS to application and template
myApp.controller('myController', function myController($scope){

	//this is our model. We created our data manually. To use it in our template we put it in the scope variable.
	//anything in this scope variable will be available in this controller
	$scope.author = {
		'name'		: 'Molly K',
		'title'		: 'Developer',
		'company'	: 'Lynda.com'
	}

});