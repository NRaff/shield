import Enemy from "./enemy";
import Tank from "./tank";
import ArcType from "./Utils/ArcType";
import PlayerEvents from "./Utils/PlayerEvents";
import Wall from "./wall";

class GameMap {
  constructor(canvas, level) {
    this.canvas = canvas
    this.height = this.canvas.height;
    this.width = this.canvas.width;
    this.level = level;
    this.ctx = this.canvas.getContext('2d');
    this.walls = []; // need to keep track of all objects on the page
    this.enemies = [];
    this.tank = this.setupTank();
    this.startMap();
    this.mousePos = {
      x: 0,
      y: 0
    }
  }

  redrawMap() {
    this.ctx.clearRect(0,0,this.width,this.height);
    this.tank.drawTank();
    this.drawPortals();
    this.redrawBarriers();
    this.redrawEnemies();
  }

  startMap() {
    this.tank.drawTank();
    this.drawPortals();
    this.enemies = Enemy.drawEnemies.call(this, this.level);
    this.walls = Wall.drawWalls.call(this, this.level);
    this.canvas.addEventListener('keydown',PlayerEvents.moveKey.bind(this));
    this.canvas.addEventListener('mousemove', PlayerEvents.moveMouse.bind(this));
  }

  mouseAngle() {
    let mouseDist = this.mousePos.x - this.tank.pos.x//this.tank.pos.x - mouseX;
    let mouseHeight = this.mousePos.y - this.tank.pos.y//this.tank.pos.y - mouseY;
    let angle = Math.atan2(mouseHeight, mouseDist);
    return angle;
  }

  setMousePos(e) {
    // see stack overflow --> https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas
    let boundOffset = this.canvas.getBoundingClientRect();
    let scaleX = this.canvas.width / boundOffset.width;
    let scaleY = this.canvas.width / boundOffset.height;
    let mouseX = (e.clientX - boundOffset.left) * scaleX;
    let mouseY = (e.clientY - boundOffset.top) * scaleY - 70;
    this.mousePos = {
      x: mouseX,
      y: mouseY
    }
  }

  setupTank(){
    let options = Tank.setOptions(this.getStartPos(), 10, 10, 'darkgreen', this.getStartPos());
    let tank = new Tank(this.canvas, options)
    return tank;
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

  redrawBarriers() {
    this.walls.forEach((wall) => {
      this.ctx.fillStyle = wall.color;
      this.ctx.fill(wall.path);
    })
  }

  redrawEnemies() {
    this.enemies.forEach((enemy) => {
      this.ctx.fillStyle = enemy.color;
      this.ctx.fill(enemy.path);
    })
  }
}

export default GameMap;