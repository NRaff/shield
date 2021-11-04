import ArcType from '../Utils/ArcType'
import Defaults from '../Utils/Defaults';

class Shield {
  constructor(ctx, parentPos, color, arcType, parentSize) {
    this.ctx = ctx;
    this.parentPos = parentPos;
    this.pos = this.offset();
    this.color = color
    this.arcType = arcType || Defaults.shieldSize();
    this.arcStart = arcType || Defaults.shieldSize();
    this.arcEnd = this.arcStart;
    this.parentSize = parentSize;
    this.path;
  }

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

  draw() {
    this.ctx.fillStyle = 'cyan';
    this.ctx.fill(this.path)
  }

  newAngle(angle) {
    // set the shields arc start to half the mouse angle
    // set the sheilds arc end to the start angle + 90

    this.arcStart = angle + ArcType.eighth();
    this.arcEnd = -this.arcStart + ArcType.quarter();
    // this.ricochetAngle();
  }

  ricochetAngle() {
    let arcDegrees = this.arcStart * 57.2958
    if (arcDegrees > 315 || arcDegrees <= 45) { console.log('Up') };
    // if (arcDegrees > 45 || arcDegrees <= 135) { console.log('Right') };
    if (arcDegrees > 135 || arcDegrees <= 225) { console.log('Down') };
    // if (arcDegrees > 225 || arcDegrees <= 315) { console.log('Left') };

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
    return Math.sqrt(this.parentSize.w * this.parentSize.h) + Defaults.shieldRadiusAdustment();
  }

}

export default Shield;