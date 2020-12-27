console.log("connected?");
var canvas = document.querySelector("canvas");
canvas.width =500;
canvas.height=500;


// magic c variable it's a super object it has tons of methods and functions that allows to do all the stuffs in canvas. 
var c = canvas.getContext('2d');

c.fillRect(50,50,80,80);
c.fillRect(140,150,80,80);
c.fillRect(230,50,80,80);
c.fillRect(320,150,80,80);
c.fillRect(410,50,80,80);
c.fillRect(0,0,400,400);

c.moveTo(0,0);
c.lineTo(500,500);
c.strokeStyle = "red";
c.stroke();