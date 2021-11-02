import ArcType from "../Utils/ArcType";
import Defaults from "../Utils/Defaults";

class Fireball {
  constructor(canvas, startPos, firedDir, color) {
    this.canvas = canvas;
    this.color = color || 'orange'
    this.ctx = this.canvas.getContext('2d');
    this.pos = {x: startPos.x, y: startPos.y};
    this.path;
    this.firedDir = firedDir;
    this.speed = 5;
  }

  setPath() {
    let fireball = new Path2D();
    fireball.arc(
      this.pos.x,
      this.pos.y,
      Defaults.fireballSize(),
      ArcType.eighth(),
      -ArcType.eighth(),
      true
    );
    fireball.closePath();
    this.path = fireball;
    this.ctx.fillStyle = this.color;
    this.ctx.fill(fireball)
  }
}

export default Fireball;