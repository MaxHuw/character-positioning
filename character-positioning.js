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