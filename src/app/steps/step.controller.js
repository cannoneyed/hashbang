'use strict';

angular.module('hashBang.controllers')

.controller('StepController', [
         '$scope', 'hashFunctions', '$location', '$stateParams', '$famous', 
function ($scope,   hashFunctions,   $location,   $stateParams,   $famous) {


  hashFunctions.createHash('A Test');
  $scope.step = $stateParams.name * 1;
  $scope.stepData = hashFunctions.steps[0];
  $scope.stepValues = $scope.stepData.value;
  console.log($scope.stepValues);


  var Transitionable = $famous['famous/transitions/Transitionable']
  $scope.number = 6;
  $scope.offset = 100;
  $scope.boxes = [];
  $scope.selected = 0;

  $scope.$watch('number', function (num) {
    var arr = [];
    for (var i = 0; i < $scope.stepValues.length; i++) {
      var trans = new Transitionable([$scope.offset, 50 * i, 1]);
      arr.push(
        {bg_color: '#333', 
        color: '#ccc', 
        trans: trans, 
        index: i, 
        text: $scope.stepValues[i]
      });
    }
    $scope.boxes = arr;
  });

  $scope.click = function (box) {
    box.trans.set([$scope.offset - 100, 50 * box.index, 1], {duration: 1000, curve: 'easeOut'})
    console.log('clicked', box.index, 'deselect', $scope.selected);
    $scope.selected = box.index;
  };




}]);