'use strict';

angular.module('hashBang', [
  // 'famous.angular',
  'ngAnimate', 
  'ngCookies', 
  'ngTouch', 
  'ngSanitize', 
  'ngResource',
  'hashBang.controllers',
  'hashBang.services', 
  // 'hashBang.graphics.controllers',
  'ui.router', 
  'ui.bootstrap',
  // 'ts.sheets'
  'hashBang.directives'
])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })

      .state('step/:name', {
        url: '/step/:name',
        templateUrl: function ($stateParams) {
          var step = $stateParams.name;
          if (step < 10) {
            step = '0' + step;
          } else {
            step = '' + step;
          }
          return '/app/steps/html/step' + step + '.html';
          },
         controller: 'StepController'
       });

    $urlRouterProvider.otherwise('/');
  });