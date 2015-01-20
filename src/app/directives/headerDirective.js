
angular.module( 'hashBang.directives')

.directive( 'hashbangHeader', ['$stateParams', function ($stateParams) {
    return {
      restrict: 'E',
      templateUrl: 'app/header/header.html',
      // link: function($scope, element, attrs) {
      //   // console.log($stateParams);
      //   $scope.message = "ANGULAR SUCKS"
      //   console.log($stateParams)
      // }

      controller: "HeaderCtrl"
    };
  }
]);