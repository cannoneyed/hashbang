'use strict';

angular.module('hashBang.services', [])

.factory('hashFunctions', function () {


  // Initialize five h variables as properties of the h object
  var hStrings = ['01100111010001010010001100000001',
                  '11101111110011011010101110001001',
                  '10011000101110101101110011111110',
                  '00010000001100100101010001110110',
                  '11000011110100101110000111110000']

  var h = {};

  hStrings.forEach(function (string, index) {
    var arr = string.split('').map(function (character) {
      return character * 1;
    })
    h[index] = arr;
  });

  function stringToCharacters(string) {
    return string.split('');
  };
 
  var steps = {
    '1' : {
      name: 'stringToCharacters',
      fn: stringToCharacters
    }
  };

  return {
    steps : steps,
    stringToCharacters : stringToCharacters
  };


});
