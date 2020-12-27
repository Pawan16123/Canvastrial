console.log("connected?");
var canvas = document.querySelector("canvas");
canvas.width =500;
canvas.height=400;


// magic c variable it's a super object it has tons of methods and functions that allows to do all the stuffs in canvas. 
var c = canvas.getContext('2d');

c.fillRect(50,50,80,80);