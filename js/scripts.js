//business time
var addWay = function(word) {
  var letters = word.split("");
  if (letters[0] === "a" || letters[0] === "e" || letters[0] === "i" || letters[0] === "o" || letters[0] === "u") {
    var joined = letters.join("");
    var final = "";
    final = final.concat(joined, "way");
    console.log(final);
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
