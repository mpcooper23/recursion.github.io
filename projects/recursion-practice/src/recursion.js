// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = n => {
  if (n === 1){
    return 1;
  } else {
    return n * factorial(n -1);
  }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  if (array.length === 0){
return 0; //base case: empty array
  } else {
return array[0] + sum(array.slice(1)); //recursive case
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
return array.reduce((sum, element) => {
  if (Array.isArray(element)){
    return sum + arraySum(element); //recursively sum nested arrays
  } else if (typeof element === 'number'){
    return sum + element; //add nums to the sum
  }
  return sum; //ignore non-number elements
}, 0);
};

// 4. Check if a number is even.
var isEven = function(n) {
  if(n % 2 === 0){
return true;
  }else if (n % 2 !== 0){
return false;
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) {
    return 0; // Base case: no numbers below 0
}
if (n > 0) {
    return (n - 1) + sumBelow(n - 1); // Recursive case for positive n
} else {
    return (n + 1) + sumBelow(n + 1); // Recursive case for negative n
}
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  if (x === y || x + 1 === y) {
    return []; // Base case: no integers between x and y
}
if (x < y) {
    return [x + 1].concat(range(x + 1, y)); // Recursive case for x < y
} else {
    return [x - 1].concat(range(x - 1, y)); // Recursive case for x > y
}
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1; // Base case: any number to the power of 0 is 1
}
if (exp > 0) {
    return base * exponent(base, exp - 1); // Recursive case for positive exponent
} else {
    return 1 / exponent(base, -exp); // Handle negative exponents
}
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true; // Base case: 1 is a power of two (2^0)
}
if (n < 1 || n % 2 !== 0) {
    return false; // Base case: numbers less than 1 or not divisible by 2 are not powers of two
}
return powerOfTwo(n / 2); // Recursive case
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if (str.length <= 1) {
    return str; // Base case: return the string if it's empty or has one character
}
return str[str.length - 1] + reverseString(str.slice(0, -1)); // Recursive case
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
   // Remove non-alphanumeric characters and convert to lowercase for uniformity
   str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

   if (str.length <= 1) {
       return true; // Base case: a single character or empty string is a palindrome
   }
   if (str[0] !== str[str.length - 1]) {
       return false; // If the first and last characters don't match, it's not a palindrome
   }
   return isPalindrome(str.slice(1, -1)); // Recursive case
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (x < y) {
    return x; // Base case: if x is less than y, x is the remainder
}
return modulo(x - y, y); // Recursive case: subtract y from x and recurse
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
  if (y < 0) {
    return -multiply(x, -y);
}
if (y === 0) {
    return 0; 
}
return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(dividend, divisor) {
    // Handle negative numbers and ensure divisor is not zero
    if (divisor === 0) {
        throw new Error("Division by zero is undefined");
    }
    
    const isNegative = (dividend < 0) !== (divisor < 0);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    if (dividend < divisor) {
        return 0; // Base case: if dividend is less than divisor, result is 0
    }

    const result = 1 + divide(dividend - divisor, divisor); // Recursive case
    return isNegative ? -result : result;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (y === 0) {
    return x; // Base case: if y is 0, gcd is x
}
return gcd(y, x % y); // Recursive case: gcd of y and the remainder of x divided by y
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true

  var compareStr = function(str1, str2) {
    // Base case: if both strings are empty, they are identical
    if (str1.length === 0 && str2.length === 0) {
        return true;
    }
    // Base case: if the first characters differ or lengths differ, they are not identical
    if (str1[0] !== str2[0] || str1.length !== str2.length) {
        return false;
    }
    // Recursive case: compare the rest of the strings
    return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  if (str.length === 0) {
    return []; // Base case: return an empty array for an empty string
}
return [str[0]].concat(stringToArray(str.slice(1))); // Recursive case
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  if (array.length <= 1) {
    return array; // Base case: return the array if it's empty or has one element
}
return [array[array.length - 1]].concat(reverseArr(array.slice(0, -1))); // Recursive case
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) {
    return []; // Base case: return an empty array if length is 0
}
return [value].concat(buildList(value, length - 1)); // Recursive case
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (list.length === 0) {
    return 0; // Base case: return 0 if the list is empty
}
const firstElementCount = list[0] === value ? 1 : 0;
return firstElementCount + countOccurrence(list.slice(1), value); // Recursive case
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) {
    return []; // Base case: return an empty array if the input array is empty
}
const mappedElement = func(array[0]);
return [mappedElement].concat(recursiveMap(array.slice(1), func)); // Recursive case
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, targetKey) {
  let count = 0;
    for (let key in obj) {
        if (key === targetKey) {
            count += 1;
        }
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            count += countKeyOccurrences(obj[key], targetKey);
        }
    }
    return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let count = 0;
    for (let key in obj) {
        if (obj[key] === value) {
            count += 1;
        }
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            count += countValueOccurrences(obj[key], value);
        }
    }
    return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  for (let key in obj) {
    if (key === oldKeyName) {
        obj[newKey] = obj[key];
        delete obj[key];
    }
    if (typeof obj[key] === 'object' && obj[key] !== null) {
        renameKeys(obj[key], oldKeyName, newKey);
    }
}
return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
    if (n === 0) {
        return []; // Base case: no Fibonacci numbers
    }
    if (n === 1) {
        return [1]; // Base case: first Fibonacci number (excluding 0)
    }
    if (n === 2) {
        return [1, 1]; // Base case: first two Fibonacci numbers
    }
    
    const fibs = fibonacci(n - 1); // Recursive case: get the first n-1 Fibonacci numbers
    const nextFib = fibs[fibs.length - 1] + fibs[fibs.length - 2];
    return fibs.concat(nextFib);
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n === 0) {
    return 0; // Base case: Fibonacci number at index 0 is 0
}
if (n === 1) {
    return 1; // Base case: Fibonacci number at index 1 is 1
}
return nthFibo(n - 1) + nthFibo(n - 2); // Recursive case
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  if (words.length === 0) {
    return []; // Base case: return an empty array if the input array is empty
}
const capitalizedWord = words[0].toUpperCase();
return [capitalizedWord].concat(capitalizedWords(words.slice(1))); // Recursive case
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  if (array.length === 0) {
    return []; // Base case: return an empty array if the input array is empty
}
const capitalizedWord = array[0][0].toUpperCase() + array[0].slice(1);
return [capitalizedWord].concat(capitalizeFirst(array.slice(1))); // Recursive case
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  let sum = 0;
  for (let key in obj) {
      if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
          sum += obj[key]; // Add even numbers to the sum
      }
      if (typeof obj[key] === 'object' && obj[key] !== null) {
          sum += nestedEvenSum(obj[key]); // Recursive case
      }
  }
  return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  let result = [];
  for (let element of arrays) {
      if (Array.isArray(element)) {
          result = result.concat(flatten(element)); // Recursive case: flatten nested arrays
      } else {
          result.push(element); // Add non-array elements to the result
      }
  }
  return result;
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  if (str.length === 0) {
    return tally; // Base case: return the tally object if the string is empty
}
const firstChar = str[0];
tally[firstChar] = (tally[firstChar] || 0) + 1; // Update the count for the first character
return letterTally(str.slice(1), tally); // Recursive case
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  if (list.length <= 1) {
    return list; // Base case: return the list if it's empty or has one element
}
if (list[0] === list[1]) {
    return compress(list.slice(1)); // Skip the first element if it's a duplicate
}
return [list[0]].concat(compress(list.slice(1))); // Include the first element
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (list.length === 0) {
    return []; // Base case: return an empty list if the input list is empty
}
const augmentedElement = list[0].concat(value);
return [augmentedElement].concat(augmentElements(list.slice(1), value)); // Recursive case
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (list.length <= 1) {
    return list; // Base case: return the list if it's empty or has one element
}
if (list[0] === 0 && list[1] === 0) {
    return minimizeZeroes(list.slice(1)); // Skip the first element if it's a duplicate zero
}
return [list[0]].concat(minimizeZeroes(list.slice(1))); // Include the first element
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) {
    return []; // Base case: return an empty array if the input array is empty
}
const currentNumber = Math.abs(array[0]) * (index % 2 === 0 ? 1 : -1);
return [currentNumber].concat(alternateSign(array.slice(1), index + 1)); // Recursive case
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    const digitWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    if (str.length === 0) {
        return ''; // Base case: return an empty string if the input string is empty
    }

    const firstChar = str[0];
    const restOfString = numToText(str.slice(1));

    if (/\d/.test(firstChar)) {
        return digitWords[parseInt(firstChar)] + restOfString; // Convert digit to word
    } else {
        return firstChar + restOfString; // Keep non-digit character
    }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  if (!node) {
    return 0; // Base case: return 0 if the node is null
}

let count = 0;
if (node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() === tagName.toLowerCase()) {
    count = 1; // Increment count if the node matches the tag
}

for (let child of node.childNodes) {
    count += countTagOccurrences(child, tagName); // Recursive case
}

return count;
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
  if (start > end) {
    return -1; // Base case: target not found
}

const mid = Math.floor((start + end) / 2);

if (array[mid] === target) {
    return mid; // Target found
} else if (array[mid] > target) {
    return binarySearch(array, target, start, mid - 1); // Search left half
} else {
    return binarySearch(array, target, mid + 1, end); // Search right half
}
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
    if (array.length <= 1) {
        return array; // Base case: array is already sorted
    }

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate remaining elements
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
