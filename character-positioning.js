/************************************************
Character Positioning Assignment

Goal: Create a function that takes in a string and return the locations
of each unique character.

ToDo:
*Very simular to previous assignment, base off of it
*Instead of adding to a letter counter, create an array for each new
  letter, and push new indexes as they appear.
**************************************************/

console.log(countLetters("This is a test"));

function countLetters(input){

  var lowerCaseInput = input.toLowerCase();
  var letters = {};

  for (var i = 0; i < input.length; i ++){
    var currentChar = lowerCaseInput[i];
    if (currentChar.match(/[a-z]/) && !(letters.hasOwnProperty(currentChar))){
      letters[currentChar] = [i];
    } else if (currentChar.match(/[a-z]/) && (letters.hasOwnProperty(currentChar))){
      letters[currentChar].push(i);
    } else {continue;}
  }

  return letters;

};