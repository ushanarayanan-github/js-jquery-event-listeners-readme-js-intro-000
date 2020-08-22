function getIt(){
  alert("Hey!")
}//define functions here

function frameIt() {
  $('img').addClass("tasty")
}

$(document).ready(function() {
  $('p').on('click',getIt());
  $('img').on('load',frameIt());
});
