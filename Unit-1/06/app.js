var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope){
  $scope.name = "Severus Snape";
});
app.controller("ExercisesController", function($scope){
  $scope.FavColor = "Grey";
  $scope.secondsInACentury = 60 * 60 * 365 * 100;
  $scope.rightNow = new Date();
});