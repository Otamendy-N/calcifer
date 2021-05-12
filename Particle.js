class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 1));
    this.acc = createVector(0, 0);
    this.r = random(mouseY/6 - 10)
    this.lifeTime = 255
  }

  finished() {
    return this.lifeTime <= 0
  }

  applyForce(force) {
    this.acc.add(force)
  }

  update() {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.set(0, 0)
  
    this.lifeTime -= 10
  }

  show(img) {
    tint(150, 50, 60, this.lifeTime);
    imageMode(CENTER);
    image(img, this.pos.x, this.pos.y, this.r, this.r);
  }
}