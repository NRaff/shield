import ArcType from "../Utils/ArcType";
import Defaults from "../Utils/Defaults";

class Fireball {
  constructor(canvas, startPos, vector, color) {
    this.canvas = canvas;
    this.color = color || 'orange'
    this.ctx = this.canvas.getContext('2d');
    this.pos = {x: startPos.x, y: startPos.y};
    this.path;
    this.vector = vector;
    this.speed = 5;
    this.hitWall = false;
  }

  setPath() {
    let fireball = new Path2D();
    fireball.arc(
      this.pos.x,
      this.pos.y,
      Defaults.fireballSize(),
      0,
      ArcType.full(),
      true
    );
    fireball.closePath();
    this.path = fireball;
    this.ctx.fillStyle = this.color;
    // this.ctx.fill(fireball)
  }

  draw() {
    this.ctx.fill(this.path);
  }

  move() {
    this.pos.x += this.vector.x;
    this.pos.y += this.vector.y;
    this.collidesWithBound();
    this.setPath();
  }

  collidesWithBound(){
    if(this.pos.x >= this.canvas.width ||
      this.pos.x < 0 ||
      this.pos.y > this.canvas.height ||
      this.pos.y < 0) {
        this.color = 'purple';
        this.hitWall = true;
      }
  }
}

export default Fireball;