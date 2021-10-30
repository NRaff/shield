import ArcType from './Utils/ArcType'

class Shield {
  constructor(ctx, parentPos, color, arcType, parentSize) {
    this.ctx = ctx;
    this.parentPos = parentPos;
    this.pos = this.offset();
    this.color = color
    this.arcType = arcType || ArcType.eighth;
    this.parentSize = parentSize
  }
  draw() {
    let ctx = this.ctx;
    ctx.beginPath();
    console.log(this.arcType)
    ctx.arc(this.pos.x, this.pos.y, this.getRadius(),this.arcType(),-this.arcType(),true);
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