

var id = null;
function myMove() {
  var elem = document.getElementById("stars");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == 1000) {
      clearInterval(id);
    } else {
      pos++; 
    //   elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}