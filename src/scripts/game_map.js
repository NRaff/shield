import Tank from "./tank";
import ArcType from "./Utils/ArcType";
import Wall from "./wall";

class GameMap {
  constructor(canvas, level) {
    this.canvas = canvas
    this.height = this.canvas.height;
    this.width = this.canvas.width;
    this.level = level;
    this.ctx = this.canvas.getContext('2d');
    this.walls = []; // need to keep track of all objects on the page
    this.drawPortals();
    this.startTank();
    this.drawBarriers();
  }

  // draws the tank at a given start position
  startTank() {
    let options = Tank.setOptions(this.getStartPos(), 10,10, 'darkgreen', this.getStartPos());
    let tank = new Tank(this.canvas, options)
    tank.drawTank();
  }

  getStartPos() {
    return {
      x: 5,
      y: this.height / 2 - 5 // -5 centers it since the size is an offset
    }
  }

  // Draws the start and end areas of the map
  drawPortals() {
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
    const wall = new Wall(this.canvas, options);
    wall.randomWall();
    return wall;
  }
}

export default GameMap;