$(document).ready(function(){

  var count = 0;
  var colorWheel = [];
  var min = 1;
  var random = Math.random() * (4 - min) + min;

  $("#lightRed").hide();
  $("#lightBlue").hide();
  $("#lightYellow").hide();
  $("#lightGreen").hide();

  $("#replay").click(function(){
    var colorWheel = [];
  })

  $("#start").click(function(){
    count++;
    colorWheel.push(random);
    if (colorWheel[colorWheel.length - 1] = 1){
      $("#red").fadeOut(400);
      $("#lightRed").fadeIn(400);
      $("#lightRed").fadeOut(400);
      $("#red").fadeIn();
    } else if (colorWheel[colorWheel.length - 1] = 1) {
      $("#blue").fadeOut(400);
      $("#lightBlue").fadeIn(400);
      $("#lightBlue").fadeOut(400);
      $("#blue").fadeIn();
    } else if (colorWheel[colorWheel.length - 1] = 1) {
      $("#yellow").fadeOut(400);
      $("#lightYellow").fadeIn(400);
      $("#lightYellow").fadeOut(400);
      $("#yellow").fadeIn();
    } else if (colorWheel[colorWheel.length - 1] = 1) {
      $("#green").fadeOut(400);
      $("#lightGreen").fadeIn(400);
      $("#lightGreen").fadeOut(400);
      $("#green").fadeIn();
    }

  })

})