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
  $scope.digitClass = function (digit) {
    var str = '';
    if (digit.value === 0) { str = 'zero'} 
    else { str = 'one' }
    if (!digit.shown) { str += ' invisible' }
    else { str += ' visible' }
    return str;
  }

  if (!hashFunctions.steps.created) {
    hashFunctions.createHash('A Test');
  }
  $scope.step = $stateParams.name * 1;
  $scope.stepData = hashFunctions.steps[$scope.step - 1];
  $scope.stepValues = $scope.stepData.value;


  if ($scope.step === 1) {
    var animationTime = 50;
    for (var i = 0; i < $scope.stepValues.length; i++) {
      if ($scope.stepValues[i].value === ' ') {
        $scope.stepValues[i].value = "_";
      }
    }
    for (var i = 0; i < $scope.stepValues.length; i++) {
      (function (index) {
          $timeout(function () {
            $scope.stepValues[index].shown = true;
          }, animationTime * index);
      })(i);
    };
  }

  if ($scope.step === 2) {
    var animationTime = 50;
    for (var i = 0; i < $scope.stepValues.length; i++) {
      (function (index) {
          $timeout(function () {
            $scope.stepValues[index].shown = true;
          }, animationTime * index);
      })(i);
    };
  }

  if ($scope.step === 3) {
    var animationTime = 20;
    for (var i = 0; i < $scope.stepValues.length; i++) {
      for (var j = 0; j < $scope.stepValues[i].length; j++) {
        $scope.stepValues[i][j].shown = false;
        (function (index, jndex) {
            $timeout(function () {
            $scope.stepValues[index][jndex].shown = true;
            }, animationTime * (index * $scope.stepValues.length + jndex));
        })(i, j);
      };
    };
  }


  if ($scope.step === 4) {
    var animationTime = 20;
    console.log($scope.stepValues);
    for (var i = 0; i < $scope.stepValues.length; i++) {
      $scope.stepValues[i].shown = false;
      (function (index) {
          $timeout(function () {
            $scope.stepValues[index].shown = true;
          }, animationTime * index);
      })(i);
    };
  }

  if ($scope.step === 5) {
    var animationTime = 10;
    console.log($scope.stepValues);
    for (var i = 0; i < $scope.stepValues.length; i++) {
      $scope.stepValues[i].shown = false;
      (function (index) {
          $timeout(function () {
            $scope.stepValues[index].shown = true;
          }, animationTime * index);
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