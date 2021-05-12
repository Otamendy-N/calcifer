let img = null
let clust = []

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

  for(let i = 0; i < 1; i++) {
    let particle = new Particle(mouseX, mouseY)
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