// import utils from './canvas-boilerplate/src/js/utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight - 5;

// variables
const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}
var gravity = 1;
var friction = 0.98;
const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
});

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Objects
class Object {
  constructor(x, y, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dy= dy;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    // c.fillStyle = this.color;
    // c.strokeStyle = this.color;
    c.fill();
    c.fillStyle = this.color;
    c.strokeStyle = "pale";
    c.stroke();
    c.closePath()
  }

  update() {
    if(this.y+this.radius+this.dy > canvas.height-10){
      this.dy = -this.dy*friction;
      // this.dy -= 1;
      // console.log("time to reverse");
    }else{
      this.dy += gravity;
      // console.log(this.dy);
      // this.dy +=2;
      // console.log("free fall");
    }
    this.y += this.dy;
    this.draw();

  }
}

// Implementation
let objects;
var firstCircle;
let color;
function init() {
objects = [];

  for (let i = 0; i < 100; i++) {
    var radius = 20;
    var xVal = Math.random()*(canvas.width-radius);
    var yVal = Math.random()*(canvas.height-radius);
    color = Math.floor(Math.random()*colors.length);
    firstCircle = new Object(xVal, yVal, 2, radius, colors[color]);
    objects.push(firstCircle);
  }
  
console.log(objects);
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height);

  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y);
  // c.arc(canvas.width/2, canvas.height/2, 30, 0, 2*Math.PI, false);
  // c.stroke();
  
  // firstCircle.update();

  objects.forEach(object => {
   object.update();
  })
}

init();
animate();
