var app = angular.module("firstApp", []);
  app.controller("MyFirstController", function($scope){
    $scope.number = 5;

    $scope.pickRandomNumber = function(){
      $scope.number = Math.floor(Math.random() * 10) + 1
    }

    $scope.wordReverse = function(word){
      var splat = word.split('');
      var hold = [];
      for(i=0;i<splat.length;i++){
        hold.unshift(splat[i]);
        var together = hold.join('');
        $scope.reverse = together;
      }
      return $scope.reverse;
    }

    $scope.overallScore = 0;
    $scope.oneScore = 0;
    $scope.twoScore = 0;
    $scope.serveOne = true;

    $scope.addScore = function(score){
      $scope.overallScore++;
      console.log($scope.overallScore);
      if($scope.overallScore % 4){
        $scope.serveOne = false;
      }
      if(score === 'one'){
        $scope.oneScore++;
      } else if (score === 'two'){
        $scope.twoScore++;
      }
    }

});