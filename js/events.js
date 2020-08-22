var key1

function getIt(){
  alert("Hey!")
}//define functions here

function frameIt() {
  $('img').addClass("tasty")
}

function pressIt() {
  if (key1.which == "71") {
    alert('G was pressed');
  }
}

$(document).ready(function() {
  $('p').on('click',getIt());
  $('img').on('load',frameIt());
  $('input').on('keydown',function(key){
    key1 = key
    pressIt()
  });
});
