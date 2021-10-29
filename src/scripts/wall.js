import PhysObject from "./phys_object";

class Wall extends PhysObject {
  //Provides functions to draw walls vertically, horizontally, and diagonally
  constructor(ctx, options, endPos) {
    super(ctx, options);
    this.color = 'darkgray'
    this.endPos = endPos
  }

  //Draws a vertical wall when passed into the draw function
  drawVertical() {
    this.context.fillRect(this.pos.x, this.pos.y,5,this.size.h)
  }

  //Draws a horizontal wall when passed into the draw function
  drawHorizonal() {
    this.context.fillRect(this.pos.x, this.pos.y, this.size.w, 5)
  }

  //Draws a diagonal wall
  //a^2 + b^2 = c^2
  drawDiagonal() {
    let ctx = this.context;
    ctx.beginPath();
    ctx.moveTo(this.pos.x,this.pos.y); //set the start position from the wall
    ctx.lineTo(this.pos.x - 5, this.pos.y); //add width to the line
    ctx.lineTo(this.endPos.x, this.endPos.y);
    ctx.lineTo(this.endPos.x + 5, this.endPos.y);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export default Wall;