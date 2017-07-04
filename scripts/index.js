$(document).ready(function(){

  var count = 0;
  var colorWheel = [];

  function getRandomArbitrary(min, count) {
    return Math.random() * (count - min) + min;
  }

  $("#start").click(function(){
    count++;
    getRandomArbitrary()

  })

})