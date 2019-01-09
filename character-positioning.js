console.log(countLetters("this is a test"));

function countLetters(input){

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