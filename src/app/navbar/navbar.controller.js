'use strict';

angular.module('hashBang.controllers')
  .controller('NavbarCtrl', function ($scope, $stateParams) {
    

    $scope.step = $stateParams.name * 1;

    $scope.previous = function (e) {
      e.preventDefault();
      console.log('')
      if ($scope.step === 1) {
        $location.path('/home');
      } else {
        $location.path('/step/' + $scope.step - 1);
      }
    }

    $scope.next = function () {
      console.log('/step/' + $scope.step + 1);
      // $location.path('/step/' + $scope.step + 1);
    }


  });
