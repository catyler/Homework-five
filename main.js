//////EXERCISE 1

///The below function does not work. The variable twoPlusTwo gets set to undefined. Refactor the function to make it work.

var twoPlusTwo = function addNumbers(numberA, numberB) {
  return numberA + numberB;
}

console.log(twoPlusTwo(2,2)); // 4


////EXERCISE 2

///Write a function called yell that logs out an uppercase version of a string.
///Write a function called yell10 that uses your yell function to log out an uppercase version of a string 10 times.
function yell (string){
    return string.toUpperCase();
}
console.log(yell ('orange'));

function yell10 (){
  function yell (string){
    return string.toUpperCase();
  }
}

console.log(yell10('orange'));

///EXERCISE 3

///Write a function called longest that returns the longest of two input strings or arrays.function max(a, b){
var dog = {
  hobbies: ['play ball', 'chase tail', 'roll in dirt', 'bark at squirrels'],
  food: ['peanutbutter sandwiches', 'cheese', 'human food'],
}

function max (a,b){
  var longest;
  if (a > b) {
    longest = a;
  } else {
    longest = b;
  }
  return longest;
}

console.log(max(dog.hobbies, dog.food));



///EXERCISE 4

///Write a function called isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, uppercase or lowercase. The function should return false if the character is not a vowel.

function isVowel (string){
  var vowels;
  if (string === ('a'||'e'||'i'||'o'||'u')){
    vowels = true;
  }else {
    vowels = false;
  }
  return vowels;
}

console.log(isVowel ('a'));
