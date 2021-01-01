// console.log("connected?");
var canvas = document.querySelector("canvas");
canvas.width =500;
canvas.height=500;


// magic c variable it's a super object it has tons of methods and functions that allows to do all the stuffs in canvas. 
var c = canvas.getContext('2d');

c.fillRect(00,00,80,80);
c.fillRect(500,500,80,80);
c.fillRect(0,420,80,80);
c.fillRect(420,0,80,80);
c.fillRect(420,420,80,80);
// c.fillRect(0,0,400,400);

c.beginPath();
c.moveTo(0,0);  
c.lineTo(500,500);
c.strokeStyle = "blue";
c.stroke();

c.beginPath();
c.moveTo(90,100);
c.lineTo(90,300);
// c.strokeStyle = "orange";
c.stroke();

// c.beginPath();
c.lineTo(400,300);
c.strokeStyle = "red";
c.stroke();




// for(xy=0; xy<10; xy++){
var circles = 0;
var dy = 3;
var dx = 3;
var dxx= 2;
var dx2 = 1;

var ran = Math.floor(Math.random()*400 + 60);
var ran1 = Math.floor(Math.random()*400 + 60);
var ran2 = Math.floor(Math.random()*400 + 60);
console.log(ran,ran1,ran2);
// var rany = Math.floor(Math.random()*400);
var rany = 200;

function animate(){
    // var ran = Math.random()*500;
    var r =Math.floor(Math.random()*255);
    var g =Math.floor(Math.random()*255);
    var b =Math.floor(Math.random()*255);
    c.clearRect(0,0,500,500);

    c.beginPath();
    c.arc(ran,rany, 30, 0, 6.48,false);
    c.stroke();
    c.beginPath();
    c.arc(ran1,rany, 30, 0, 6.48,false);
    c.stroke();
    c.beginPath();
    c.arc(ran2,rany, 30, 0, 6.48,false);
    // c.strokeStyle = "#"+color1+color;
    // c.strokeStyle = 'rgba('+r+','+ g+','+ b+','+ '1)';
    c.strokeStyle ="magenta";
    c.stroke();

    if(rany>466 || rany<34){
        dy = -dy;
    }
    if(ran1>466 || ran1<34){
        dxx = -dxx;
    }
    if(ran2>466  || ran2<34){
        dx2 = -dx2;
    }
    if(ran>466 || ran<34){
        dx = -dx;
    }
    rany+= dy;
    ran+= dx;
    ran1+= dxx;
    ran2+= dx2;
    requestAnimationFrame(animate);
    // if(circles<100-1){

    //     requestAnimationFrame(animate);
    //     circles++
    // }
    
}


animate();