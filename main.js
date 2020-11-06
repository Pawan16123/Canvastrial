// Taks 
// 1. Create a circle 
// 2. create circle and measure it's circumference.
// 3. Create circle using radians formula.
// 4. Experiments


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

// creating ling
c.beginPath();
c.moveTo(50,50);
c.lineTo(100,100);
c.lineTo(200,200);
c.lineTo(500,200);
c.lineTo(500,400);
c.strokeStyle="magenta";
c.stroke();

// creating arc

c.beginPath()
c.arc(150,550, 30, 0, Math.PI*3, false );
c.stroke();