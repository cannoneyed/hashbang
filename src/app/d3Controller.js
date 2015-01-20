'use strict';

angular.module('hashBang.controllers')

.controller('d3Controller', [
         '$scope', 'hashFunctions', '$location', '$stateParams', '$timeout', 
function ($scope,   hashFunctions,   $location,   $stateParams,   $timeout) {


  if (!hashFunctions.steps.created) {
    hashFunctions.createHash('A Test');
  }
  $scope.step = 3;
  $scope.stepData = hashFunctions.steps[$scope.step - 1];
  $scope.stepValues = $scope.stepData.value;
  $scope.stepValues = _.flatten($scope.stepValues);

  $scope.scopeData = {
    values: $scope.stepValues,
    rowWidth: 8,
    size: 40,
    center: 400
  }



}]);