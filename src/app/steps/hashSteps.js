'use strict';

angular.module('hashBang.services')

.factory('hashSteps', function () {

  var steps = {
    '01' : {
      name: 'stringToCharacters',
      text: 'Split the message to be hashed into individual characters.'
    },
    '02' : {
      name: 'charactersToASCII',
      text: 'Convert each character into ASCII code.'
    },
    '03' : {
      name: 'ASCIItoBinary',
      text: 'Convert each ASCII value into an 8-bit binary number.'
    },
    '04' : {
      name: 'concatenateAndAddOne',
      text: 'Put the binary numbers together and add 1 to the end.'    
    },
    '05' : {
      name: 'appendZeros',
      text: 'Append enough zeros to the end so that the length of the message is equal to 64 less than a multiple of 512.'   
    },
    '06' : {
      name: 'appendMessageLength',
      text: 'Append the 64 bit representation of the original message length, in binary. The message length should now be an exact multiple of 512.'
    },
    '07' : {
      name: 'breakIntoChunks',
      text: 'Break the message into 512-bit chunks. Since the original size of the message was restrictd to 55 characters, we\'ll only have one 512-bit chunk.'
    },
    '08' : {
      name: 'breakIntoWords',
      text: 'Break the message into 512-bit chunks. Since the original size of the message was restrictd to 55 characters, we\'ll only have one 512-bit chunk.'
    }
  };

  return steps;

});