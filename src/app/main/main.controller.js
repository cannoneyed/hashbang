'use strict';

angular.module('hashBang.controllers', [
])

.controller('MainController', ['$scope', 'hashFunctions', function ($scope, hashFunctions) {
  $scope.message = 'Hello';


  $scope.startHash = function() {
    console.log(hashFunctions.stringToCharacters($scope.hashString));
  }


}]);
