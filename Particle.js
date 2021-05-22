class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 1));
    this.acc = createVector(0, 0);
    this.r = 50
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
  
    this.lifeTime -= 7
    if (this.r > 0) {
      this.r -= 1.5
    }
  }

  show(img) {
    // tint(this.lifeTime);
    // imageMode(CENTER);
    // image(img, this.pos.x, this.pos.y, this.r, this.r);
    // fill(255, this.lifeTime)
    ellipse(this.pos.x, this.pos.y, this.r)
  }
}