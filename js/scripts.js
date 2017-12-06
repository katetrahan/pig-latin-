var translateToPigLatin = function (sentence) {
    // var pigLatinArray = sentence.split("");

    var regex = /[^a-z]/;
    if (sentence.match(regex)) {
      return sentence;
    } else {
      return (sentence + "ay");
    }

}


//Front End
$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();

    var result = translateToPigLatin(sentence);

    $("#result").text(result);
  });
});
