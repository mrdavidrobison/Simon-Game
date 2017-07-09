$(document).ready(function(){

  var colorWheel = [];
  var random = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

  $("#lightGreen").hide();
  $("#lightRed").hide();
  $("#lightBlue").hide();
  $("#lightYellow").hide();

  $("#reset").click(function(){
    var colorWheel = [];
  })

  $("#start").click(function(){
    colorWheel.push(random);
    if (colorWheel[colorWheel.length - 1] = 1){
      $("#red").fadeOut(400);
      $("#lightRed").fadeIn(400);
      $("#lightRed").fadeOut(400);
      $("#red").fadeIn();
    } else if (colorWheel[colorWheel.length - 1] = 2) {
      $("#blue").fadeOut(400);
      $("#lightBlue").fadeIn(400);
      $("#lightBlue").fadeOut(400);
      $("#blue").fadeIn();
    } else if (colorWheel[colorWheel.length - 1] = 3) {
      $("#yellow").fadeOut(400);
      $("#lightYellow").fadeIn(400);
      $("#lightYellow").fadeOut(400);
      $("#yellow").fadeIn();
    } else if (colorWheel[colorWheel.length - 1] = 4) {
      $("#green").fadeOut(400);
      $("#lightGreen").fadeIn(400);
      $("#lightGreen").fadeOut(400);
      $("#green").fadeIn();
    }

  })

})