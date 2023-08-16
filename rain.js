// Raindrop class
class Raindrop {
  constructor() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.size = Math.random() * 4 + 2;
    this.speedY = Math.random() * 3 + 2;
  }

  // Move the raindrop
  update() {
    this.y += this.speedY;
    if (this.y > window.innerHeight) {
      this.y = 0 - this.size;
      this.x = Math.random() * window.innerWidth;
    }
  }

  // Draw the raindrop
  draw() {
    const ctx = document.querySelector('canvas').getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Array to store multiple raindrops
let dropsArray = [];
for (let i = 0; i < 100; i++) {
  dropsArray.push(new Raindrop());
}

// Update and draw all raindrops
function animate() {
  const ctx = document.querySelector('canvas').getContext('2d');
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let i = 0; i < dropsArray.length; i++) {
    dropsArray[i].update();
    dropsArray[i].draw();
  }

  requestAnimationFrame(animate);
}

// Initialize the canvas and start the animation
function startRain() {
  let canvas = document.querySelector('canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
  }
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  animate();
}

startRain();