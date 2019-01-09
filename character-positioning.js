console.log(letterPositions("this is a test"));

function letterPositions(input){

  var letters = {};

  for (var i = 0; i < input.length; i ++){
    if (input[i].match(/[a-z]/) && !(input[i] in letters)){
      letters[input[i]] = [i];
    } else if (input[i].match(/[a-z]/) && (input[i] in letters)){
      letters[input[i]].push(i);
    } else {continue;}
  }

  console.log(letters);

  return letters;

};