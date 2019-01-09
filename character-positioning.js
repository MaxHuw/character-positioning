console.log(letterPositions("this is a test"));

function letterPositions(input){

  var letters = {};

  for (var i = 0; i < input.length; i ++){
    if (input[i].match(/[a-z]/) && !(letters.hasOwnProperty(input[i]))){
      letters[input[i]] = [i];
    } else if (input[i].match(/[a-z]/) && (letters.hasOwnProperty(input[i]))){
      letters[input[i]].push(i);
    } else {continue;}
  }

  console.log(letters);

  return letters;

};