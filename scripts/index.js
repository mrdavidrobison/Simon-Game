$(document).ready(function(){

  $("#lightRed, #lightBlue, #lightYellow, #lightGreen").hide();
  $("#red").click(function(){
    $("#red").hide();
    $("#lightRed").show();
  })

})