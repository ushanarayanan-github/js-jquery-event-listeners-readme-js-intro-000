function getIt(){
  alert("Hey!")
}//define functions here

function frameIt() {
  $('img').addClass("tasty")
}

function pressIt() {
  if ($('input:first').val() == "G")
    alert('G was pressed');
  }

function submitIt() {
    alert("Your form is going to be submitted now.");
}

$(document).ready(function() {
  $('p').on('click',getIt());
  $('img').on('load',frameIt());
  $('input').on('keydown',pressIt());
  $('form').on('submit',submitIt());
});
