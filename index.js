const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
k=random(1,720)
console.log(random(1,10))

// var id = null;
// function myMove() {
//   // var elem = document.getElementById("stars");   
//   // var pos = 1800 ;

//   // clearInterval(id);
//   // id = setInterval(frame, 1);
//   // function frame() {
//   //   if (pos == 240) {
//   //     clearInterval(id);
//   //   } else {
//   //     pos--; 
//   //   //   elem.style.top = pos + 'px'; 
//   //     elem.style.left = pos +'px'; 
//   //   }
//   // }

// var boxElement = document.getElementById('stars');
// var animation = boxElement.animate([
//     {transform: 'translate(500)'},
//     {transform: `translate(-1600px, ${k}px) rotate(${k}deg)`}
// ], 10000);

// animation.addEventListener('finish', function() {
// boxElement.style.transform = `translate(-1600px, ${k}px) rotate(${k}deg)`;
// });
// }


var top = 0;
window.onkeydown = function (event) {
    var code = event.keyCode || event.charCode;
    if (code != 38 && code != 40)
      return;
    var prop = document.getElementById('galax');
    prop.style.top = prop.offsetTop+ (code == 38 ? -10 : 10) + 'px';
    

};






