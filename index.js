

var id = null;
function myMove() {
  var elem = document.getElementById("stars");   
  var pos = 1800 ;

  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == 240) {
      clearInterval(id);
    } else {
      pos--; 
    //   elem.style.top = pos + 'px'; 
      elem.style.left = pos +'px'; 
    }
  }
}

var top = 0;
window.onkeydown = function (event) {
    var code = event.keyCode || event.charCode;
    if (code != 38 && code != 40)
        return;
    var prop = document.getElementById('galax');
    prop.style.top = prop.offsetTop+ (code == 38 ? -10 : 10) + 'px';
};





