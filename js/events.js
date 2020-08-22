function getIt(){
  alert("Hey!")
}//define functions here

function frameIt() {
  $('img').addClass("tasty")
}

function pressIt() {
  if ($( "input" ).val() === "71") {
    alert('d now');
  }
}

$(document).ready(function() {
  $('p').on('click',getIt());
  $('img').on('load',frameIt());
  $('form').on('keydown',pressIt());
});
