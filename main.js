// Taks 
// 1. Create a circle 
// 2. create circle and measure it's circumference.
// 3. Create circle using radians formula.
// 4. Experiments


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

// c.beginPath()
// c.arc(150,550, 30, 0, Math.PI*3, false );
// c.stroke();

//Loop for 11 random circles on the canvas

// for( var i = 0; i<=10; i++){
//     var x = Math.random()*window.innerWidth;
//     var y = Math.random()*window.innerHeight;
//     c.beginPath()
//     c.arc(x, y, 30, 0, Math.PI*3, false );
//     c.stroke();
//     c.fillStyle = "#f45de0";
//     c.fill();

// }

// ANimating the circle using canvas properties

var y = 150, dy = 3;

function animate(){
    console.log("wer r they");
    c.clearRect(119,150,400,400);
    c.beginPath()
    // falling circle 
    c.arc(150, y , 30, 0, Math.PI*3, false );
    c.stroke();
    // if(y < 550){

        if(y > 550 || y <150){
            dy = -dy;
        }

        y += dy;  
        requestAnimationFrame(animate);
    // }

    

}
animate();

