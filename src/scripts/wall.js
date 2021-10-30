import ArrayUtil from "./Utils/ArrayUtil";
import Defaults from "./Utils/Defaults";
import PhysObject from "./phys_object";

class Wall extends PhysObject {
  //Provides functions to draw walls vertically, horizontally, and diagonally
  constructor(ctx, options) {
    super(ctx, options);
    this.color = 'darkgray'
    // this.endPos = endPos
  }

  drawVert() {
    let ctx = this.context;
    ctx.beginPath();
    ctx.moveTo(this.pos.x, this.pos.y);
    ctx.lineTo(this.pos.x + 5, this.pos.y);
    ctx.lineTo(this.pos.x + 5, this.endPos.y);
    ctx.lineTo(this.pos.x, this.endPos.y);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  drawHorizon() {
    let ctx = this.context;
    ctx.beginPath();
    ctx.moveTo(this.pos.x, this.pos.y);
    ctx.lineTo(this.pos.x, this.pos.y + 5);
    ctx.lineTo(this.endPos.x, this.pos.y + 5);
    ctx.lineTo(this.endPos.x, this.pos.y);
    ctx.fillStyle = this.color;
    ctx.fill()
  }

  //Draws a diagonal wall
  drawDiagonal() {
    let ctx = this.context;
    let offset = ArrayUtil.sample([-5,5])
    ctx.beginPath();
    ctx.moveTo(this.pos.x,this.pos.y); //set the start position from the wall
    ctx.lineTo(this.pos.x + offset, this.pos.y); //add width to the line
    ctx.lineTo(this.endPos.x, this.endPos.y);
    ctx.lineTo(this.endPos.x + offset * -1, this.endPos.y);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  drawCorner() {
    this.drawHorizon();
    this.drawVert(); 
  }

  randomWall() {
    this.setRandomStartEnd();
    let types = [this.drawVert, this.drawHorizon, this.drawDiagonal, this.drawCorner]
    let wallType = ArrayUtil.sample(types);
    console.log(wallType)
    wallType.apply(this)
  }

  setRandomStartEnd() {
    let start = {
      x: Math.floor(Math.random() * this.bounds.xRight) + this.bounds.xLeft,
      y: Math.floor(Math.random() * this.canvas.height)
    }

    let direction = ArrayUtil.sample([-1,1])
    let end = {
      x: start.x + direction * ArrayUtil.sample(Defaults.wallLengths()),
      y: start.y + direction * ArrayUtil.sample(Defaults.wallLengths())
    }

    this.pos = start
    this.endPos = end

  }
}

export default Wall;