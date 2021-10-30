import ArcType from "./ArcType";
import ArrayUtil from "./ArrayUtil";
import Wall from "./wall";

class GameMap {
  constructor(canvas, level) {
    this.canvas = canvas
    this.height = this.canvas.height;
    this.width = this.canvas.width;
    this.level = level;
    this.ctx = this.canvas.getContext('2d');
    this.walls = []; // need to keep track of all objects on the page
    this.bounds = {
      xLeft: 30,
      xRight: this.width - 30
    }

  }

  // Draws the start and end areas of the map
  drawPortals(x, y) {
    this.drawPortal(0,this.height / 2);
    this.drawPortal(this.width, this.height / 2);
  }

  //draws a single portal at the x,y position
  //will draw a full circle, and can therefore be place anywhere
  drawPortal(x, y) {
    let ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, ArcType.full());
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // Draws barriers for the map. Barriers may be corners, slots, or walls
  drawBarriers() {
    // while (this.walls.length < this.level) {

    // }
  }

  // draws two walls that intersect to form a 90 degree angle
  drawCorner() {
    const options = Wall.setOptions(60,60,20,20)
    const wall = new Wall(this.canvas, options);
    wall.drawVertical();
    wall.drawHorizontal();
  }

  // draws two walls that intersect like a V
  drawSlot() {
    const options = Wall.setOptions(100, 100, 20, 20)
    let endPos = { x: options.pos.x + 10, y: options.pos.y + 10 }
    let wall = new Wall(this.canvas, options, endPos);
    wall.drawDiagonal();
    wall.endPos = { x: options.pos.x + 10, y: options.pos.y - 10 }
    
    wall.drawDiagonal();
  }

  // draws a flat while either horizontally or vertically (random)
  drawWall() {
    const options = Wall.setOptions(60, 60, 20, 20)
    let endPos = { x: options.pos.x + 10, y: options.pos.y + 10 }
    const wall = new Wall(this.canvas, options, endPos);
    wall.randomWall();
  }

  inBounds(object){
    if (this.startPosBetweenGoals(object) && this.startPosInsideY(object) && 
        this.endPosBetweenGoals(object) && this.endPosInsideY(object)) {
        return true;  
      }
    return false;
  }

  startPosBetweenGoals(object) {
    return (object.pos.x > this.bounds.xLeft && object.pos.x < this.bounds.xRight)
  }

  startPosInsideY(object) {
    return (object.pos.y > 0 && object.pos.y < this.height);
  }

  endPosBetweenGoals(object) {
    return (object.endPos.x > this.bounds.xLeft && object.endPos.x < this.bounds.xRight)
  }

  endPosInsideY(object) {
    return (object.endPos.y > 0 && object.endPos.y < this.height);
  }
}

export default GameMap;