'use strict';

angular.module('hashBang.services', [])

.factory('hashFunctions', function (hashSteps) {


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

  function createHash(string) {
    var args = string;

    _.each(steps, function(step, index) {
      step.fn = hashFunctions[index];
      step.args = args;
      var nextArgs = step.fn(args);
      step.value = nextArgs;

      args = nextArgs.slice();
    });
  }

  function printStep (step, index) {
    console.log('step ' + index + ': ' + step.name);

    if ( Array.isArray(step.value) ) {
      if ( Array.isArray(step.value[0]) ) {
        _.each(step.value, function (item) {
          console.log(item.join(''));
        });
      } else if (index < 3) {
        console.log(step.value.join(',')); 
      } else {
        console.log(step.value.join(''));
      }
    }
    console.log('-----------------------');
  }

  var steps = hashSteps.steps;

  var hashFunctions = [
    function stringToCharacters (string) {
      return string.split('');
    },

    function charactersToASCII (array) {
      return _.map(array, function (character) {
        return character.charCodeAt(0);
      });
    },

    function ASCIItoBinary (array) {
      return _.map(array, function (value) {
        var bits = (value).toString(2).split('');
        bits = _.map(bits, function(value) {
          return value * 1;
        });
        while (bits.length < 8) {
          bits.unshift(0);
        }
        return bits;
      })
    },

    function concatenateAndAddOne (array) {
      var results = [];
      for (var i = 0; i < array.length; i++) {
        results = results.concat(array[i]);
      }
      return results.concat([1]);
    },

    function appendZeros (array) {
      while (array.length < 448) {
        array.push(0);
      }
      return array;
    },

    function appendMessageLength (array) {
      var messageLength = steps[2].value.length * 8;
      var messageLengthBinary = 
      messageLengthBinary = _.map(messageLength.toString(2).split(''), 
        function (value) {
          return value * 1;
      });
      while (messageLengthBinary.length < 64) {
        messageLengthBinary.unshift(0)
      }
      return array.concat(messageLengthBinary);
    },

    function breakIntoChunks (array) {
      return array;
    },

    function breakIntoWords (array) {
      var results = [];
      while (array.length > 0) {
        results.push(array.splice(0,32));
      }
      return results;
    },

    function extendWords (array) {
      for (var i = 16; i < 80; i ++) {
        var word1 = array[i-3];
        var word2 = array[i-8];
        var word3 = array[i-14];
        var word4 = array[i-16];


        var word = XOR(word1, word2);
        word = XOR(word, word3);
        word = XOR(word, word4);

        array.push( leftShift(word) );
      }

      return array;
    },

    function splitIntoFour (array) {
      var groups = [];
      for (var i = 0; i < 4; i++) {
        groups[i] = array.splice(0,20);
      }

      return groups;
    }

    // function group1 (array) {
    //   var A = h[0];
    //   var B = h[1];
    //   var C = h[2];
    //   var D = h[3];
    //   var E = h[4];

    //   return 10;
    // }
  ];


  function XOR (word1, word2) {
    var result = [];
    for (var i = 0; i < word1.length; i++) {
      result.push(word1[i] ^ word2[i]);
    }
    return result;
  }

  function leftShift (word) {
    var result = word.slice();
    var x = result.shift()
    result.push(x);
    return result;
  }
 


  return {
    steps : steps,
    createHash : createHash
  };


});
