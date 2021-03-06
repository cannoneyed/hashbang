'use strict';

angular.module('hashBang.controllers')

.controller('StepController', [
         '$scope', 'hashFunctions', '$location', '$stateParams', '$timeout', 
function ($scope,   hashFunctions,   $location,   $stateParams,   $timeout) {

  $scope.binaryClass = function (digit) {
    // console.log(digit);
    if (digit === 0) {
      return 'zero';
    } else {
      return 'one';
    }
  }

  $scope.pointer1 = {
    top: 35,
    left: 340
  }

  $scope.pointer2 = {
    top: 55,
    left: 340
  }
  $scope.pointer3 = {
    top: 108,
    left: 340
  }
  $scope.pointer4 = {
    top: 145,
    left: 340
  }

  $scope.digitClass = function (digit) {
    var str = '';
    if (digit.value === 0) { str = 'zero'} 
    else { str = 'one' }
    if (!digit.shown) { str += ' invisible' }
    else { str += ' visible' }
    return str;
  }
  $scope.width = 1100;
  $scope.bitWidth = 27;
  $scope.gapWidth = 7;
  $scope.setPosition = function (index, rowSize, x, y) {
    if (x === undefined) { x = 0; }
    if (y === undefined) { y = 0; }
    var row = Math.floor(index / rowSize);
    var col = index % rowSize;
      return {
        position: 'absolute',
        top : (y +((($scope.bitWidth + $scope.gapWidth) * row))+'px'),
        left : (x + ((($scope.bitWidth + $scope.gapWidth)) * col)+'px'),
        "width": $scope.bitWidth + 'px',
        "height": $scope.bitWidth + 'px'
      }
  };

  $scope.setWordPosition = function (index, rowSize, x, y) {
    var bitWidth = 15;
    var gapWidth = 7;
    var row = Math.floor(index / rowSize);
    var col = index % rowSize;
      return {
        position: 'absolute',
        top : (y + (((bitWidth + gapWidth) * row))+'px'),
        left : (x + (((bitWidth + gapWidth) * col))+'px'),
        "width": bitWidth + 'px',
        "height": bitWidth + 'px'
      }
  };

  var stepToFetch = [0,1,2,3,4,5,5,5,5,7,7,7,8,8,8,8,8,8,8,8]

  if (!hashFunctions.steps.created) {
    hashFunctions.createHash('A Test');
  }
  $scope.step = $stateParams.name * 1;
  $scope.stepData = hashFunctions.steps[stepToFetch[$scope.step - 1]];
  $scope.stepValues = $scope.stepData.value;
  $scope.animating = false;


  if ($scope.step === 1) {
    $scope.stepValues = hashFunctions.steps[0].value;
    var animationTime = 50;

    for (var i = 0; i < $scope.stepValues.length; i++) {
      if ($scope.stepValues[i].value === ' ') {
        $scope.stepValues[i].value = "_";
      }
    }
    for (var i = 0; i < $scope.stepValues.length; i++) {
      (function (index) {
          $timeout(function () {
            $scope.stepValues[index].shown = true;
          }, animationTime * index);
      })(i);
    };
  }

  if ($scope.step === 2) {
    $scope.stepValues = hashFunctions.steps[1].value;
    var animationTime = 50;

    for (var i = 0; i < $scope.stepValues.length; i++) {
      (function (index) {
          $timeout(function () {
            $scope.stepValues[index].shown = true;
          }, animationTime * index);
      })(i);
    };
  }

  if ($scope.step === 3) {
    $scope.stepValues = hashFunctions.steps[2].value;
    var animationTime = 20;

    $scope.animating = true;
    for (var i = 0; i < $scope.stepValues.length; i++) {
      for (var j = 0; j < $scope.stepValues[i].length; j++) {
        $scope.stepValues[i][j].shown = false;
        (function (index, jndex) {
            $timeout(function () {
            if (index >= $scope.stepValues.length - 1) {
              console.log('done'); 
              $scope.animating = false 
            }
            $scope.stepValues[index][jndex].shown = true;
            }, animationTime * (index * $scope.stepValues.length + jndex));
        })(i, j);
      };
    };
  }


  if ($scope.step === 4) {
    $scope.stepValues = hashFunctions.steps[3].value;
    var animationTime = 20;

    $scope.animating = true;
    for (var i = 0; i < $scope.stepValues.length; i++) {
      $scope.stepValues[i].shown = false;
      (function (index) {
          $timeout(function () {
            $scope.stepValues[index].shown = true;
            if (index = $scope.stepValues.length - 1) { $scope.animating = false }
          }, animationTime * index);
      })(i);
    };
  }

  if ($scope.step === 5) {
    $scope.stepValues = hashFunctions.steps[4].value;
    var animationTime = 7;

    $scope.animating = true;
    for (var i = 0; i < $scope.stepValues.length; i++) {
      $scope.stepValues[i].shown = false;
      (function (index) {
          $timeout(function () {
            $scope.stepValues[index].shown = true;
            if (index = $scope.stepValues.length - 1) { $scope.animating = false }
          }, animationTime * index);
      })(i);
    };
  }

  if ($scope.step === 6) {
    $scope.stepValues = hashFunctions.steps[5].value;
    var animationTime = 7;
    $scope.animating = true;
    for (var i = 0; i < 448; i++) {
      $scope.stepValues[i].shown = true;
    }
    for (var i = 448; i < $scope.stepValues.length; i++) {
      (function (index) {
          $timeout(function () {
            $scope.stepValues[index].shown = true;
            if (index = $scope.stepValues.length - 1) { $scope.animating = false }
          }, animationTime * (448 - index));
      })(i);
    };
  }

  if ($scope.step === 7) {
    $scope.stepValues = hashFunctions.steps[5].value;
    var animationTime = 7;

    $scope.animating = true;
    for (var i = 0; i < 448; i++) {
      $scope.stepValues[i].shown = true;
    }
    for (var i = 448; i < $scope.stepValues.length; i++) {
      (function (index) {
          $timeout(function () {
            $scope.stepValues[index].shown = true;
            if (index = $scope.stepValues.length - 1) { $scope.animating = false }
          }, animationTime * (448 - index));
      })(i);
    };
  }


  if ($scope.step === 8) {
    $scope.step7Lines = [1,2,3,4,5,6,7,8];
    $scope.stepValues = hashFunctions.steps[5].value;
    $scope.setHighlightPosition = function (index) {
      return {
              position: 'absolute',
              top : ((index - 1) * 2.51 *  $scope.bitWidth - (2*$scope.gapWidth) +'px'),
              left: -10 + 'px'
      }
    }
    var animationTime = 7;
    for (var i = 0; i < $scope.stepValues.length; i++) {
      (function (index) {
          $timeout(function () {
            $scope.stepValues[index].shown = true;
          }, animationTime * index);
      })(i);
    };
  }

  if ($scope.step === 9) {
    $scope.stepValues = hashFunctions.steps[5].value;
    $scope.stepValues = _.flatten($scope.stepValues);
    $scope.stepValues
    var animationTime = 7;

    $scope.bitWidth = 4;
    $scope.gapWidth = 5;

    for (var i = 0; i < $scope.stepValues.length; i++) {
      $scope.stepValues[i].shown = true;
    };
  }

  if ($scope.step === 10) {


    $scope.stepValues = hashFunctions.steps[7].value;


    $scope.counter = 16;

    $scope.word1 = $scope.stepValues[$scope.counter - 16];
    $scope.word2 = $scope.stepValues[$scope.counter - 14];
    $scope.word3 = $scope.stepValues[$scope.counter - 8];
    $scope.word4 = $scope.stepValues[$scope.counter - 3];

    $scope.stepValues = _.flatten($scope.stepValues);
    $scope.stepValues
    var animationTime = 7;

    $scope.bitWidth = 4;
    $scope.gapWidth = 5;

    for (var i = 0; i < $scope.stepValues.length; i++) {
      $scope.stepValues[i].shown = true;
    };
  }


  if ($scope.step === 11) {

    $scope.stepValues = hashFunctions.steps[7].value;

    $scope.counter = 16;

    $scope.word1 = $scope.stepValues[$scope.counter - 16];
    $scope.word2 = $scope.stepValues[$scope.counter - 14];
    $scope.word3 = $scope.stepValues[$scope.counter - 8];
    $scope.word4 = $scope.stepValues[$scope.counter - 3];

    $scope.stepValues = _.flatten($scope.stepValues);
    var animationTime = 7;

    $scope.bitWidth = 4;
    $scope.gapWidth = 5;

    for (var i = 0; i < $scope.stepValues.length; i++) {
      $scope.stepValues[i].shown = true;
    };

    // $scope.result1 = $scope.
  }

  if ($scope.step === 12) {

    var animationTime = 20;
    var animationSchedule = 0;

    var hideAll = function (array) {
      for (var i = 0; i < array.length; i++) {
        array[i].shown = false;
      };
    }

    var animateAll = function (array) {
      for (var i = 0; i < array.length; i++) {
        animationSchedule += animationTime;
        (function (index) {
            $timeout(function () {
              array[index].shown = true;
               // animationSchedule += animationTime;
            }, animationSchedule);
        })(i);
      };
    }

    $scope.stepValues = hashFunctions.steps[7].value;

    $scope.counter = 16;

    $scope.word1 = $scope.stepValues[$scope.counter - 16].slice();
    $scope.word2 = $scope.stepValues[$scope.counter - 14].slice();
    $scope.word3 = $scope.stepValues[$scope.counter - 8].slice();
    $scope.word4 = $scope.stepValues[$scope.counter - 3].slice();

    $scope.stepValues = _.flatten($scope.stepValues);

    $scope.bitWidth = 4;
    $scope.gapWidth = 5;


    for (var i = 0; i < $scope.stepValues.length; i++) {
      $scope.stepValues[i].shown = true;
    };

    var iterate = function () {


      $scope.result1 = hashFunctions.XOR($scope.word1, $scope.word2);
      $scope.result2 = hashFunctions.XOR($scope.result1, $scope.word3);
      $scope.result3 = hashFunctions.XOR($scope.result2, $scope.word4);
      
      animationSchedule += animationTime;
      // hideAll($scope.result1);
      animateAll($scope.result1);

      animationSchedule += animationTime;
      // hideAll($scope.result2);
      animateAll($scope.result2);

      animationSchedule += animationTime;
      // hideAll($scope.result3);
      animateAll($scope.result3);

      animationSchedule += 15 * animationTime;
      $timeout(function () {
        $scope.result3 = hashFunctions.leftShift($scope.result3);
      }, animationSchedule);

      animationSchedule += 15 * animationTime;
      $timeout(function () {
        for (var i = 0; i < $scope.result3.length; i++) {
          $scope.stepValues.push({
            value: $scope.result3[i].value,
            shown: true
          })
        }
        $scope.counter++;
      }, animationSchedule);

      animationSchedule += 5 * animationTime;
      $timeout(function () {
        hideAll($scope.result1);
        hideAll($scope.result2);
        hideAll($scope.result3);
      }, animationSchedule);

      animationSchedule += 5 * animationTime;
      $timeout(function () {
        $scope.pointer1.top += 9.5;
        $scope.pointer2.top += 9.5;
        $scope.pointer3.top += 9.5;
        $scope.pointer4.top += 9.5;
      }, animationSchedule);

      animationSchedule += 5 * animationTime;
      $timeout(function () {
        $scope.word1 = $scope.stepValues.slice(($scope.counter - 16) * 32,($scope.counter - 16) * 32 + 32);
        $scope.word2 = $scope.stepValues.slice(($scope.counter - 14) * 32,($scope.counter - 14) * 32 + 32);
        $scope.word3 = $scope.stepValues.slice(($scope.counter - 8) * 32,($scope.counter - 8) * 32 + 32);
        $scope.word4 = $scope.stepValues.slice(($scope.counter - 3) * 32,($scope.counter - 3) * 32 + 32);

        if ($scope.counter < 80) {
          $timeout(function () {
            animationSchedule = 0;
            iterate();
          }, 1000);
        }
      }, animationSchedule);

      animationSchedule += 10 * animationTime;
    }

    iterate();

  }

  if ($scope.step === 13) {

    $scope.stepValues = hashFunctions.steps[8].value;

    $scope.counter = 16;

    $scope.word1 = $scope.stepValues[$scope.counter - 16];
    $scope.word2 = $scope.stepValues[$scope.counter - 14];
    $scope.word3 = $scope.stepValues[$scope.counter - 8];
    $scope.word4 = $scope.stepValues[$scope.counter - 3];

    $scope.stepValues = _.flatten($scope.stepValues);
    var animationTime = 7;

    $scope.bitWidth = 3;
    $scope.gapWidth = 3;

    for (var i = 0; i < $scope.stepValues.length; i++) {
      $scope.stepValues[i].shown = true;
    };

    // $scope.result1 = $scope.
  }

  if ($scope.step === 14) {

    $scope.stepValues = hashFunctions.steps[8].value;


    $scope.stepValues = _.flatten($scope.stepValues);
    $scope.quadrant1 = $scope.stepValues.slice(0, 640);
    $scope.quadrant2 = $scope.stepValues.slice(640, 1280);
    $scope.quadrant3 = $scope.stepValues.slice(1280, 1920);
    $scope.quadrant4 = $scope.stepValues.slice(1920, 2560);

    $scope.bitWidth = 10;
    $scope.gapWidth = 2;

    for (var i = 0; i < $scope.stepValues.length; i++) {
      $scope.stepValues[i].shown = true;
    };

    // $scope.result1 = $scope.
  }
  var h = hashFunctions.h;
  $scope.A = _.map(h[0], function (item) {
    return { value: item, shown: true }
  });
  $scope.B = _.map(h[1], function (item) {
    return { value: item, shown: true }
  });
  $scope.C = _.map(h[2], function (item) {
    return { value: item, shown: true }
  });
  $scope.D = _.map(h[3], function (item) {
    return { value: item, shown: true }
  });
  $scope.E= _.map(h[3], function (item) {
    return { value: item, shown: true }
  });

  if ($scope.step === 15) {

    $scope.stepValues = hashFunctions.steps[8].value;

    // $scope.result1 = $scope.
  }

  if ($scope.step === 16) {

    $scope.stepValues = hashFunctions.steps[8].value.slice(0, 640);

    // $scope.result1 = $scope.
  }

  if ($scope.step === 17) {
    var animationTime = 20;
    var animationSchedule = 0;

    var hideAll = function (array) {
      for (var i = 0; i < array.length; i++) {
        array[i].shown = false;
      };
    }

    var animateAll = function (array) {
      for (var i = 0; i < array.length; i++) {
        animationSchedule += animationTime;
        (function (index) {
            $timeout(function () {
              array[index].shown = true;
               // animationSchedule += animationTime;
            }, animationSchedule);
        })(i);
      };
    }

    $scope.stepValues = hashFunctions.steps[8].value.slice(0, 640);
    $scope.notB = _.map($scope.B, function (item) {
      return { value: item.value === 1 ? 0 : 1, shown: true };
    });
    $scope.k1 = _.map('01011010100000100111100110011001'.split(''), function (item) {
      return { value: item * 1, shown: true };
    });


    $scope.result1 = hashFunctions.AND($scope.B, $scope.C);
    $scope.result2 = hashFunctions.AND($scope.notB, $scope.D);
    $scope.result3 = hashFunctions.OR($scope.result1, $scope.result2);

    hideAll($scope.result1);
    hideAll($scope.result2);
    hideAll($scope.result3);

    animateAll($scope.result1);
    animateAll($scope.result2);
    animateAll($scope.result3);
  }

  if ($scope.step === 18) {
    var animationTime = 20;
    var animationSchedule = 0;

    var hideAll = function (array) {
      for (var i = 0; i < array.length; i++) {
        array[i].shown = false;
      };
    }

    var animateAll = function (array) {
      for (var i = 0; i < array.length; i++) {
        animationSchedule += animationTime;
        (function (index) {
            $timeout(function () {
              array[index].shown = true;
               // animationSchedule += animationTime;
            }, animationSchedule);
        })(i);
      };
    }

    $scope.stepValues = hashFunctions.steps[8].value.slice(0, 640);
    $scope.notB = _.map($scope.B, function (item) {
      return { value: item.value === 1 ? 0 : 1, shown: true };
    });
    $scope.k1 = _.map('01101110110110011110101110100001'.split(''), function (item) {
      return { value: item * 1, shown: true };
    });


    $scope.result1 = hashFunctions.XOR($scope.B, $scope.C);
    $scope.result2 = hashFunctions.XOR($scope.result1, $scope.D);

    hideAll($scope.result1);
    hideAll($scope.result2);

    animateAll($scope.result1);
    animateAll($scope.result2);
  }

  if ($scope.step === 19) {
    var animationTime = 20;
    var animationSchedule = 0;

    var hideAll = function (array) {
      for (var i = 0; i < array.length; i++) {
        array[i].shown = false;
      };
    }

    var animateAll = function (array) {
      for (var i = 0; i < array.length; i++) {
        animationSchedule += animationTime;
        (function (index) {
            $timeout(function () {
              array[index].shown = true;
               // animationSchedule += animationTime;
            }, animationSchedule);
        })(i);
      };
    }

    $scope.stepValues = hashFunctions.steps[8].value.slice(0, 640);
    $scope.notB = _.map($scope.B, function (item) {
      return { value: item.value === 1 ? 0 : 1, shown: true };
    });
    $scope.k1 = _.map('10001111000110111011110011011100'.split(''), function (item) {
      return { value: item * 1, shown: true };
    });


    $scope.result1 = hashFunctions.AND($scope.B, $scope.C);
    $scope.result2 = hashFunctions.AND($scope.B, $scope.D);
    $scope.result3 = hashFunctions.AND($scope.C, $scope.D);
    $scope.result4 = hashFunctions.OR($scope.result1, $scope.result2);
    $scope.result5 = hashFunctions.OR($scope.result3, $scope.result4);

    hideAll($scope.result1);
    hideAll($scope.result2);
    hideAll($scope.result3);
    hideAll($scope.result4);

    animateAll($scope.result1);
    animateAll($scope.result2);
    animateAll($scope.result3);
    animateAll($scope.result4);
  }

  if ($scope.step === 20) {
    var animationTime = 20;
    var animationSchedule = 0;

    var hideAll = function (array) {
      for (var i = 0; i < array.length; i++) {
        array[i].shown = false;
      };
    }

    var animateAll = function (array) {
      for (var i = 0; i < array.length; i++) {
        animationSchedule += animationTime;
        (function (index) {
            $timeout(function () {
              array[index].shown = true;
               // animationSchedule += animationTime;
            }, animationSchedule);
        })(i);
      };
    }

    $scope.stepValues = hashFunctions.steps[8].value.slice(0, 640);
    $scope.notB = _.map($scope.B, function (item) {
      return { value: item.value === 1 ? 0 : 1, shown: true };
    });
    $scope.k1 = _.map('01011010100000100111100110011001'.split(''), function (item) {
      return { value: item * 1, shown: true };
    });


    $scope.result1 = hashFunctions.AND($scope.B, $scope.C);
    $scope.result2 = hashFunctions.AND($scope.notB, $scope.D);
    $scope.result3 = hashFunctions.OR($scope.result1, $scope.result2);

    hideAll($scope.result1);
    hideAll($scope.result2);
    hideAll($scope.result3);

    animateAll($scope.result1);
    animateAll($scope.result2);
    animateAll($scope.result3);
  }




  $scope.previous = function () {
    if (!$scope.animating) {
      if ($scope.step === 1) {
        $location.path('/home');
      } else {
        $location.path('/step/' + ($scope.step * 1 - 1));
      }
    }
  }

  $scope.next = function () {
    if (!$scope.animating) {
      $location.path('/step/' + ($scope.step * 1 + 1));
    }
  }


}]);