//business time
var addWay = function(word) {
  var letters = word.split("");
  var consecutiveConsonants = 0;
  var final;

  if (letters[0] === "a" || letters[0] === "e" || letters[0] === "i" || letters[0] === "o" || letters[0] === "u") {
    var joined = letters.join("");

    final = final.concat(joined, "way");

  } else {

    for (var i = 0; i < letters.length; i++) {

        if (letters[i] !== "a" && letters[i] !== "e" && letters[i] !== "i" && letters[i] !== "o" && letters[i] !== "u"){
          consecutiveConsonants++;
          //then its a consonant!
        }
        else{
          //found a vowel!
          break;
        }
    }

    var lastPart = letters.slice(consecutiveConsonants,letters.length).join('');
    var firstPart = letters.slice(0,consecutiveConsonants).join(''); //takes first letter up to the nth letter

    final = lastPart+firstPart+'ay';
  }
  return final;
}






//user interface
$(function(){

  $('form').submit(function(event){
    event.preventDefault();

    var userInput = $('#input').val();
    $('#output').text(addWay(userInput));
  });

});
