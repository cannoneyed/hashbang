'use strict';

angular.module('hashBang.controllers')

.controller('StepController', [
         '$scope', 'hashFunctions', '$location', '$stateParams', '$timeout', 
function ($scope,   hashFunctions,   $location,   $stateParams,   $timeout) {

  $scope.binaryClass = function (digit) {
    // console.log(digit);
    if (digit === 0) {
      return 'zero';
    } else {
      return 'one';
    }
  }
  $scope.animationTime = 50;

  if (!hashFunctions.steps.created) {
    hashFunctions.createHash('A Test');
  }
  $scope.step = $stateParams.name * 1;
  $scope.stepData = hashFunctions.steps[$scope.step - 1];
  $scope.stepValues = $scope.stepData.value;
  // console.log($scope.stepValues);


  if ($scope.step === 1) {
    for (var i = 0; i < $scope.stepValues.length; i++) {
      if ($scope.stepValues[i] === ' ') {
        $scope.stepValues[i] = "_";
      }
    }
  }




  if ($scope.step === 4) {
    for (var i = 0; i < $scope.stepValues.length; i++) {
      (function (index) {
          $timeout(function () {
            // console.log(index);
          }, $scope.animationTime * index);
      })(i);
    };
  }









  $scope.previous = function () {
    if ($scope.step === 1) {
      $location.path('/home');
    } else {
      $location.path('/step/' + ($scope.step * 1 - 1));
    }
  }

  $scope.next = function () {
    console.log('/step/' + ($scope.step * 1 + 1));
    $location.path('/step/' + ($scope.step * 1 + 1));
  }


}]);