import ArcType from "./Utils/ArcType";
import ArrayUtil from "./Utils/ArrayUtil";
import Wall from "./wall";

class GameMap {
  constructor(canvas, level) {
    this.canvas = canvas
    this.height = this.canvas.height;
    this.width = this.canvas.width;
    this.level = level;
    this.ctx = this.canvas.getContext('2d');
    this.walls = []; // need to keep track of all objects on the page
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
    while (this.walls.length < this.level) {
      this.walls.push(this.drawWall());
    }
  }

  // draws a flat while either horizontally or vertically (random)
  drawWall() {
    const options = Wall.setDefaults();
    // let endPos = { x: options.pos.x + 10, y: options.pos.y + 10 }
    const wall = new Wall(this.canvas, options);
    wall.randomWall();
    return wall;
  }
}

export default GameMap;