'use strict';

angular.module('hashBang.controllers')
  .controller('HeaderCtrl', function ($scope, $stateParams) {

     var state = $stateParams.name;


     if (state === undefined) {
       $scope.message = 'Welcome to HashBang: a narrated step-by-step visualization of the SHA-1 hash algorithm';
     } else if (state === '1') {
       $scope.message = 'Split the message to be hashed into individual characters.';
     } else if (state === '2') {
       $scope.message = 'Convert each character into ASCII code.';
     } else if (state === '3') {
       $scope.message = 'Convert each ASCII value into an 8-bit binary number.';
     } else if (state === '4') {
       $scope.message = 'Put the binary numbers together and add 1 to the end.';
     } else if (state === '5') {
       $scope.message = 'Append enough zeros to the end so that the length of the message is equal to 64 less than a multiple of 512, in our case 448.';
     } else if (state === '6') {
      //TODO - ADD MORE COMMENTS ABOUT THIS
       $scope.message = 'Append the 64 bit representation of the original message length, in binary. The message length should now be an exact multiple of 512.';
     } else if (state === '7') {
       $scope.message = 'Break the message into 512-bit chunks. Since the original size of the message was restrictd to 55 characters, we\'ll only have one 512-bit chunk.';
     } else if (state === '8') {
       $scope.message = 'Break the message into 32-bit \'words\'.';
     } else if (state === '9') {
       $scope.message = 'Now comes the crazy part - We extend the list into 80 words, using a loop.';
     } else if (state === '10') {
       $scope.message = 'Each round of the loop is represented by the variable i, iterating from 16 to 79. We select four words: (i-3), (1-8), (1-14), and (1-16).';
     } else if (state === '11') {
       $scope.message = 'We then perform an exclusive OR operation (XOR) on the four words sequentially, and left shift the product. We then append the product to the list and continue until our list is 80 words long.';
     } else if (state === '12') {
       $scope.message = 'We then perform an exclusive OR operation (XOR) on the four words sequentially, and left shift the product. We then append the product to the list and continue until our list is 80 words long.';
     } 


  });
