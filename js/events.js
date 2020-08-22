function getIt(){
  alert("Hey!")
}//define functions here

function frameIt() {
  $('img').addClass("tasty")
}

function pressIt(key) {
  if (key.which == "71") {
    alert('G was pressed');
  }
}

$(document).ready(function() {
  $('p').on('click',getIt());
  $('img').on('load',frameIt());
  $('input').on('keydown',function(key){
    pressIt(key)
  });
});
