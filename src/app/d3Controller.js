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

  console.log(_.flatten($scope.stepValues));

  $scope.myData = [
      {name: 'AngularJS', count: 300},
      {name: 'D3.JS', count: 150},
      {name: 'jQuery', count: 400},
      {name: 'Backbone.js', count: 300},
      {name: 'Ember.js', count: 100}
  ];

  console.log('hello')





}]);