import ArrayUtil from "../Utils/ArrayUtil";
import Defaults from "../Utils/Defaults";
import PhysObject from "./phys_object";

class Wall extends PhysObject {
  //Provides functions to draw walls vertically, horizontally, and diagonally
  constructor(ctx, options) {
    super(ctx, options);
    this.color = 'darkgray';
  }

  drawVert() {
    let ctx = this.context;
    let vertical = new Path2D();
    ctx.beginPath();
    vertical.moveTo(this.pos.x, this.pos.y);
    vertical.lineTo(this.pos.x + Defaults.wallWidth(), this.pos.y);
    vertical.lineTo(this.pos.x + Defaults.wallWidth(), this.endPos.y);
    vertical.lineTo(this.pos.x, this.endPos.y);
    this.path = vertical;
    ctx.fillStyle = this.color;
    ctx.fill(vertical);
  }

  drawHorizon() {
    let ctx = this.context;
    let horizontal = new Path2D();
    ctx.beginPath();
    horizontal.moveTo(this.pos.x, this.pos.y);
    horizontal.lineTo(this.pos.x, this.pos.y + Defaults.wallWidth());
    horizontal.lineTo(this.endPos.x, this.pos.y + Defaults.wallWidth());
    horizontal.lineTo(this.endPos.x, this.pos.y);
    this.path = horizontal;
    ctx.fillStyle = this.color;
    ctx.fill(horizontal)
  }

  //Draws a diagonal wall
  drawDiagonal() {
    let ctx = this.context;
    let offset = ArrayUtil.sample([-5,5])
    let diagonal = new Path2D()
    ctx.beginPath();
    diagonal.moveTo(this.pos.x,this.pos.y); //set the start position from the wall
    diagonal.lineTo(this.pos.x + offset, this.pos.y); //add width to the line
    diagonal.lineTo(this.endPos.x, this.endPos.y);
    diagonal.lineTo(this.endPos.x + offset * -1, this.endPos.y);
    ctx.fillStyle = this.color;
    ctx.fill(diagonal);
  }

  drawTriangle() {
    let ctx = this.context;
    let triangle = new Path2D();
    ctx.beginPath();
    triangle.moveTo(this.pos.x, this.pos.y);
    triangle.lineTo(this.endPos.x, this.pos.y);
    triangle.lineTo(this.pos.x, this.endPos.y)
    this.path = triangle;
    ctx.fillStyle = this.color;
    ctx.fill(triangle);
  }

  drawCorner() {
    // -1 is a corner facing left
    // 1 is a corner facing right
    let direction = ArrayUtil.sample([-1, 1])
    let ctx = this.context
    let corner = new Path2D()
    ctx.beginPath();
    corner.moveTo(this.pos.x, this.pos.y);
    corner.lineTo(this.endPos.x, this.pos.y);
    corner.lineTo(this.endPos.x, this.pos.y + direction * Defaults.wallWidth());
    corner.lineTo(this.pos.x + direction * Defaults.wallWidth(), this.pos.y + direction * Defaults.wallWidth());
    corner.lineTo(this.pos.x + direction * Defaults.wallWidth(), this.endPos.y);
    corner.lineTo(this.pos.x, this.endPos.y);
    this.path = corner;
    ctx.fillStyle = this.color;
    ctx.fill(corner)
    return this;
  }

  static randomWall() {
    const options = Wall.setDefaults();
    const wall = new Wall(this.canvas, options);
    wall.setRandomStartEnd();
    while(!wall.inBounds()) {
      wall.setRandomStartEnd();
    }
    let types = [wall.drawVert, wall.drawHorizon, wall.drawTriangle, wall.drawCorner]
    let wallType = ArrayUtil.sample(types);
    wallType.apply(wall)
    return wall;
  }

  static drawWalls(num) {
    let walls = [];
    let drawFunc = Wall.randomWall.bind(this);
    while (walls.length < num) {
      walls.push(drawFunc());
    }
    return walls
  }
}

export default Wall;