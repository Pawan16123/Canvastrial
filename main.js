console.log("whrer is this");
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
// c.fillStyle = 'rgba(0, 223, 22, 0.2';
c.fillStyle = "greenyellow";
c.fillRect(100,100,100,100);
c.fillRect(100,500,100,100);
c.strokeRect(400,100,100,100);
// console.log(canvas);