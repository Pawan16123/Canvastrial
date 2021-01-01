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

var ran = Math.floor(Math.random()*400 + 60);
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
    // c.strokeStyle = "#"+color1+color;
    // c.strokeStyle = 'rgba('+r+','+ g+','+ b+','+ '1)';
    c.strokeStyle ="magenta";
    c.stroke();

    if(rany>466 || rany<34){
        dy = -dy;
    }
    if(ran>466 || ran<34){
        dx = -dx;
    }
    requestAnimationFrame(animate);
    rany+= dy;
    ran+= dx;
    // if(circles<100-1){

    //     requestAnimationFrame(animate);
    //     circles++
    // }
    
}


animate();