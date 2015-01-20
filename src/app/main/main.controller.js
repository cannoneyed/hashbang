'use strict';

angular.module('hashBang.controllers', [
])

.controller('MainController', [
         '$scope', 'hashFunctions', '$location', 
function ($scope,   hashFunctions,   $location) {

  $scope.startHash = function() {
    // if ($scope.hashString !== undefined) {
      // hashFunctions.createHash($scope.hashString);
      hashFunctions.createHash('A Test');
      // $location.path('/step/1');
    // }
  }


}]);
