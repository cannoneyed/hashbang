'use strict';

angular.module('hashBang.services')

.factory('hashSteps', function () {

  var steps = {steps : [
    {
      index: 0,
      name: 'stringToCharacters',
      text: 'Split the message to be hashed into individual characters.'
    },
    {
      index: 1,
      name: 'charactersToASCII',
      text: 'Convert each character into ASCII code.'
    },
    {
      index: 2,
      name: 'ASCIItoBinary',
      text: 'Convert each ASCII value into an 8-bit binary number.'
    },
    {
      index: 3,
      name: 'concatenateAndAddOne',
      text: 'Put the binary numbers together and add 1 to the end.'    
    },
    {
      index: 4,
      name: 'appendZeros',
      text: 'Append enough zeros to the end so that the length of the message is equal to 64 less than a multiple of 512.'   
    },
    {
      index: 5,
      name: 'appendMessageLength',
      text: 'Append the 64 bit representation of the original message length, in binary. The message length should now be an exact multiple of 512.'
    },
    {
      index: 6,
      name: 'breakIntoChunks',
      text: 'Break the message into 512-bit chunks. Since the original size of the message was restrictd to 55 characters, we\'ll only have one 512-bit chunk.'
    },
    {
      index: 7,
      name: 'breakIntoWords',
      text: 'Break the message into 32-bit \'words\'.'
    },
    {
      index: 8,
      name: 'extendWords',
      text: 'Extend into 80 words, using a loop. Each round of the loop is represented by the variable i, iterating from 16 to 79. We select four words: (i-3), (1-8), (1-14), and (1-16). We then perform an exclusive OR operation (XOR) on the four words sequentially, and left shift the product. We then append the product to the list and continue until our list is 80 words long.'
    },
    {
      index: 9,
      name: 'splitIntoFour',
      text: 'Split the list of 80 words into four groups of 20. Each of the four groups will go to one of four functions. Define variables A, B, C, D, and E as h0, h1, h2, h3, and h4.'
    }

  ]};



  
  return steps;

});