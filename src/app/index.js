'use strict';

angular.module('hashBang', [
  'famous.angular',
  'ngAnimate', 
  'ngCookies', 
  'ngTouch', 
  'ngSanitize', 
  'ngResource',
  'hashBang.controllers',
  'hashBang.services', 
  // 'hashBang.graphics.controllers',
  'ui.router', 
  'ui.bootstrap'
  // 'ts.sheets'
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
  })

// .run(function($rootScope, $media) {
//   $rootScope.isDesktop = function() {
//     return $media.$query('sm');
//   };
// })

// .config(function ($mediaProvider, $famousProvider) {
//   var $famous = $famousProvider.$get();
//   var Timer = $famous['famous/utilities/Timer'];

//   var FAMOUS_FIELD_HANDLERS = [
//       {
//         field: 'transform',
//         handlerFn: function(element, payloadFn){
//           var isolate = $famous.getIsolate(angular.element(element).scope());
//           isolate.modifier.transformFrom(payloadFn);
//         }
//       },
//       {
//         field: 'size',
//         handlerFn: function(element, payloadFn){
//           var isolate = $famous.getIsolate(angular.element(element).scope());
//           isolate.modifier.sizeFrom(payloadFn);
//         }
//       },
//       {
//         field: 'origin',
//         handlerFn: function(element, payloadFn){
//           var isolate = $famous.getIsolate(angular.element(element).scope());
//           isolate.modifier.originFrom(payloadFn);
//         }
//       },
//       {
//         field: 'align',
//         handlerFn: function(element, payloadFn){
//           var isolate = $famous.getIsolate(angular.element(element).scope());
//           isolate.modifier.alignFrom(payloadFn);
//         }
//       },
//       {
//         field: 'opacity',
//         handlerFn: function(element, payloadFn){
//           var isolate = $famous.getIsolate(angular.element(element).scope());
//           isolate.modifier.opacityFrom(payloadFn);
//         }
//       },
//       {
//         field: 'options',
//         handlerFn: function(element, payloadFn){
//           //TODO:  support
//           throw new Error('unimplemented: cannot yet set options through Sheets')
//           //we need to angular $watch this one, since
//           //options doesn't support functional assignment
//           //Need to make sure to clean up watchers when this gets re-called
//         }
//       },
//   ];

//   angular.forEach(FAMOUS_FIELD_HANDLERS, function(fieldHandler) {
//     $mediaProvider.$registerFieldHandler(fieldHandler.field, fieldHandler.handlerFn);
//   });


// });


