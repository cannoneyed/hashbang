
angular.module( 'hashBang.directives')

.directive( 'hashbangHeader', [
  function () {
    return {
      restrict: 'E',
      templateUrl: 'app/header/header.html',
      // link: function($scope, $stateParams, element, attrs) {
      //   console.log($stateParams);
      // }
      controller: "HeaderCtrl"
    };
  }
]);