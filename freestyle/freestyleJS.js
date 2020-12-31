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


var x =0;
var y = 0
function animate(){
//     console.log("wer r they");
    c.clearRect(160,160,80,80);
//     for(i=0; i<=100; i++){
    c.beginPath();
    c.arc(y,200, 30, 0, x,false);
    c.strokeStyle = "red";
    c.stroke();
//     }



if(x<=(Math.PI*2)&&y==200){
    //     console.log("done");
    x +=0.1;
}else{
    x -=0.1; 
    c.strokeStyle = "green";
    c.stroke();  
}

if(y<200){
    y++;
}
requestAnimationFrame(animate);

}
animate();