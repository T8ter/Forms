function popularity(fage,ffollow){
  return ffollow/fage;
}



$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var ageInput = $("input#age").val();
    var ethnicityInput= $("input#ethnicity").val();
    var followersInput = $("input#followers").val();
    var beardInput = $("select#beard").val();
    var singleInput = $("input#single").val();
    var pAge = parseInt(ageInput);
    var pFollowers = parseInt(followersInput);


    $(".name").text(nameInput);
    $(".age").text(pAge);
    $(".ethnicity").text(ethnicityInput);
    $(".followers").text(pFollowers);
    $(".beard").text(beardInput);
    $(".single").text(singleInput);

    $("#story").show();
    event.preventDefault();

    var pop = popularity (pAge,pFollowers);


    $(".pop").text(pop);

  });



});
