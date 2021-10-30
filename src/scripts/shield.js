import ArcType from './ArcType'

class Shield {
  constructor(ctx, parentPos, color, arcType, parentSize) {
    this.ctx = ctx;
    this.parentPos = parentPos;
    this.pos = this.offset();
    this.color = color
    this.arcType = arcType || ArcType.quarter;
    this.parentSize = parentSize
  }
  draw() {
    let ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.getRadius(),0,this.arcType());
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  offset(){
    return {
      x: this.parentPos.x + 5,
      y: this.parentPos.y + 5
    };
  }

  getRadius() {
    return Math.sqrt(this.parentSize.w * this.parentSize.h);
  }

}

export default Shield;