// console.log("connected?");
var canvas = document.querySelector("canvas");
canvas.width =innerWidth-20;
canvas.height=innerHeight-20;


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
var radius =  Math.floor(Math.random()*25+1);

var ran = Math.floor(Math.random()*400 + 60);
var ran1 = Math.floor(Math.random()*130+370);
var ran2 = Math.floor(Math.random()*400 + 60);
console.log(ran,ran1,ran2);
// var rany = Math.floor(Math.random()*400);
var rany = 200;

function animate(){
    // var ran = Math.random()*500;
    var r =Math.floor(Math.random()*255);
    var g =Math.floor(Math.random()*255);
    var b =Math.floor(Math.random()*255);
    // c.clearRect(0,0,500,500);

    c.fillRect(150,150,200,200);

    c.beginPath();
    c.arc(ran,rany, radius, 0, 6.48,false);
    c.stroke();
    c.beginPath();
    c.arc(ran1,rany, radius, 0, 6.48,false);
    c.stroke();
    c.beginPath();
    c.arc(ran2,rany, radius, 0, 6.48,false);
    // c.strokeStyle = "#"+color1+color;
    // c.strokeStyle = 'rgba('+r+','+ g+','+ b+','+ '1)';
    c.strokeStyle ="magenta";
    c.stroke();

    if(rany>500-radius || rany<(0+radius)){
        dy = -dy;
    }
    if(ran1>500-radius || ran1<(150+radius) || ran1<(350+radius)){
        dxx = -dxx;
    }
    if(ran2>500-radius  || ran2<(0+radius)){
        dx2 = -dx2;
    }
    if(ran>500-radius || ran<(0+radius)){
        dx = -dx;
    }
    rany+= dy;
    ran+= dx;
    ran1+= dxx;
    ran2+= dx2;
    // radius +=dx;
    requestAnimationFrame(animate);

}


// animate();

var dy22 = 2;
var dx22 = 5;
// var dxx= 2;
// var dx2 = 1;
var radius =  Math.floor(Math.random()*25+1);

var ran22 = Math.floor(Math.random()*50 + 300);
var rany22 = 150+radius;

function animate2(){

    c.beginPath();
    c.arc(ran22,rany22, radius, 0, 6.48,false);
    c.stroke();
    c.strokeStyle ="red";
    c.stroke();

    if(rany22>350-radius || rany22<(150+radius)){
        dy22 = -dy22;
    }
    
    if(ran22>350-radius || ran22<(150+radius)){
        dx22 = -dx22;
    }
    rany22+= dy22;
    ran22+= dx22;
    requestAnimationFrame(animate2);
    
}


// animate2();

var mouse = {
    x:0,
    y:0
}
canvas.addEventListener("mousemove",function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse);
});

var minRadii = 10,
    maxRadii = 50;

function Newcir(a,b,da,db,radius,fillme){
    this.a = a;
    this.b = b;
    this.da = da;
    this.db = db;
    this.radius = radius;
    this.minRadius = radius;

    this.drawn = function(){
        c.beginPath();
        c.arc(this.a,this.b,this.radius,0,Math.PI*2,false);
        c.strokeStyle = 'orange';
        c.stroke();
        c.fill();
        c.fillStyle = fillme;
        // console.log(c);
    }
    this.update = function(){
        if(this.a+this.radius>canvas.width || this.a - this.radius<0){
            this.da = -this.da;
        }
        
        if(this.b+this.radius>canvas.height|| this.b - this.radius<0){
            this.db = -this.db;
        }
        
        this.a+= this.da;
        this.b+= this.db;

        // Interaction with the mouse.
        if(mouse.x - this.a < 50 && mouse.x - this.a>-50 && mouse.y - this.b < 50 && mouse.y - this.b > -50 ){
            console.log("smaller than");
            if(this.radius<maxRadii){
                this.radius ++;
            }
        }else if(this.radius>this.minRadius){
            console.log("Greater than");
            // if(this.radius>8){

                this.radius--;
            // }
        }

        this.drawn();
    }


}


// var a = Math.floor(Math.random()*450+20);
// var b = Math.floor(Math.random()*450+20);
// var firstCircle = new Newcir(a,b,2,3,20);
var cirArray = [];
for(var i=0; i<=600; i++){
    
     var radius = Math.random()*8+1;
     var a = Math.random()*(500-radius*2)+radius,
     b = Math.random()*(canvas.height-radius*2)+radius,
    //  var a = Math.floor(Math.random()*469+radius),
    //  b = Math.floor(Math.random()*469+radius),
     da = (Math.random()-0.5)*7,
     db = (Math.random()-0.5)*7;

     var r =Math.floor(Math.random()*255);
     var g =Math.floor(Math.random()*255);
     var bb =Math.floor(Math.random()*255);
     var aa =Math.random()+0.2;

     fillme= 'rgba('+r+','+ g+','+ bb+','+ aa +')';
     console.log(fillme);
     
     firstCircle1 = new Newcir(a,b,da,db,radius,fillme);
     cirArray.push(firstCircle1);
}
console.log(cirArray);


function animate5(){
    requestAnimationFrame(animate5);

    // var a =  Math.floor(Math.random()*400+50);
    // var b =  Math.floor(Math.random()*400+50);
    // c.clearRect(0,0,canvas.width,canvas.height);
    c.clearRect(0,0,canvas.width/2,canvas.height);
    
    // firstCircle.update();
    for(var i=0; i<cirArray.length; i++){
    
        cirArray[i].update();
   }

}

animate5();


// c.arc(50,50,48,0,6.48,false);
// c.stroke()


