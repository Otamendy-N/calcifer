let img = null
let clust = []
let x = 200
let y = 200
let velocity = 10

function preload() {
  img = loadImage('./texture32.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  clear();
  background(40);
  blendMode(ADD);

  if (keyIsDown(LEFT_ARROW)) {
    x -= velocity;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += velocity;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= velocity;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += velocity;
  }

  for(let i = 0; i < 1; i++) {
    let particle = new Particle(x, y)
    clust.push(particle)
  }

  for (let i = 0; i < clust.length; i++) {
    clust[i].applyForce(createVector(0, -0.3))
    clust[i].update()
    clust[i].show(img)
    if (clust[i].lifeTime <= 50) {
      clust.splice(i, 1)
    }
  }
}