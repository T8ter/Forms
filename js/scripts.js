$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var ageInput = $("input#age").val();
    var ethnicityInput= $("input#ethnicity").val();
    var followersInput = $("input#followers").val();
    var beardInput = $("input#beard").val();
    var singleInput = $("input#single").val();

    $(".name").text(nameInput);
    $(".age").text(ageInput);
    $(".ethnicity").text(ethnicityInput);
    $(".followers").text(followersInput);
    $(".beard").text(beardInput);
    $(".single").text("singleInput");

    $("#story").show();
    event.preventDefault();
  });
});
