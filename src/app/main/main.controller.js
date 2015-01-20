'use strict';

angular.module('hashBang.controllers', [
])

.controller('MainController', [
         '$scope', 'hashFunctions', '$location', 
function ($scope,   hashFunctions,   $location) {

  $scope.hashString;


  $scope.startHash = function() {

      hashFunctions.createHash($scope.hashString);
      $location.path('/step/1');
  }

  // $scope.startHash();


}]);
