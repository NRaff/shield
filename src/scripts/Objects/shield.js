import ArcType from '../Utils/ArcType'
import Defaults from '../Utils/Defaults';

class Shield {
  constructor(ctx, parentPos, color, arcType, parentSize) {
    this.ctx = ctx;
    this.parentPos = parentPos;
    this.pos = this.offset();
    this.color = color
    this.arcType = arcType() || ArcType.eighth();
    this.arcStart = arcType() || ArcType.eighth();
    this.arcEnd = this.arcStart;
    this.parentSize = parentSize;
    this.path;
  }
  // draw() {
  //   let ctx = this.ctx;
  //   let shield = new Path2D();
  //   shield.arc(
  //     this.pos.x,
  //     this.pos.y,
  //     this.getRadius(),
  //     this.arcStart, 
  //     -this.arcEnd,
  //     true
  //   );
  //   shield.lineWidth = Defaults.shieldLineWidth();
  //   this.path = shield;
  //   ctx.strokeStyle = this.color;
  //   ctx.stroke(shield)
  // }

  setPath() {
    let shield = new Path2D();
    shield.arc(
      this.pos.x,
      this.pos.y,
      this.getRadius(),
      this.arcStart,
      -this.arcEnd,
      true
    );
    shield.lineWidth = Defaults.shieldLineWidth();
    shield.closePath();
    this.path = shield;
  }

  newAngle(angle) {
    // set the shields arc start to half the mouse angle
    // set the sheilds arc end to the start angle + 90
    this.arcStart = angle + ArcType.eighth();
    this.arcEnd = -this.arcStart + ArcType.quarter();
  }

  offset(){
    return {
      x: this.parentPos.x + Defaults.shieldOffset(),
      y: this.parentPos.y + Defaults.shieldOffset()
    };
  }

  updatePos(){
    this.pos.x = this.parentPos.x + Defaults.shieldOffset(),
    this.pos.y = this.parentPos.y + Defaults.shieldOffset()
  }

  getRadius() {
    return Math.sqrt(this.parentSize.w * this.parentSize.h);
  }

}

export default Shield;