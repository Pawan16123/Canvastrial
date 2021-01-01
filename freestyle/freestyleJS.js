// console.log("connected?");
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
function animate(){

    var ran = Math.random()*500;
    var rany = Math.random()*500;

    c.beginPath();
    c.arc(ran,rany, 30, 0, 6.48,false);
    c.strokeStyle = "red";
    c.stroke();

    if(circles<1000-1){

        requestAnimationFrame(animate);
        circles++
    }
    
}


animate();