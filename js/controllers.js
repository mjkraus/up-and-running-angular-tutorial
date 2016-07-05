// this is the myApp module
// dependencies go in [], but don't need them for this application
// myApp has all the code for the application - this is an EX of namespacing. 
//Namespacing protects the app code, so no other script interfers with our application code
var artistControllers = angular.module('artistControllers', []);

//controller use variable scope - super variable to use to pass from JS to application and template
//first letter of a controller should be in caps
artistControllers.controller('ListController', ['$scope', '$http', function ($scope, $http){

	//this is our model. We created our data manually. To use it in our template we put it in the scope variable.
	//anything in this scope variable will be available in this controller
	$http.get('js/data.json').success(function(data){
		$scope.artists = data;
		//name will be automatically prepopulated in the dropdown filter
		$scope.artistOrder = 'name';		
	});
}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams){
	$http.get('js/data.json').success(function(data){
		$scope.artists = data;
		$scope.whichItem = $routeParams.itemId;

		if($routeParams.itemId > 0){
			$scope.prevItem = Number($routeParams.itemId)-1;
		} else {
			$scope.prevItem = $scope.artists.length-1;
		}

		if($routeParams.itemId < $scope.artists.length-1){
			$scope.nextItem = Number($routeParams.itemId)+1;
		} else {
			$scope.nextItem = 0;
		}					

	});
}]);