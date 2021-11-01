import Enemy from "./Objects/enemy";
import Tank from "./Objects/tank";
import ArcType from "./Utils/ArcType";
import PlayerEvents from "./Utils/PlayerEvents";
import Wall from "./Objects/wall";
import Defaults from "./Utils/Defaults";
import Portal from "./Objects/portal";

class GameMap {
  constructor(canvas, level) {
    this.canvas = canvas
    this.height = this.canvas.height;
    this.width = this.canvas.width;
    this.level = level;
    this.ctx = this.canvas.getContext('2d');
    this.walls = [];
    this.enemies = [];
    this.portals = [];
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
    this.redrawPortals();
    this.redrawBarriers();
    this.redrawEnemies();
    // this.detectCollision();
  }

  startMap() {
    this.tank.drawTank();
    this.portals = Portal.drawPortals.call(this)
    this.enemies = Enemy.drawEnemies.call(this, this.level);
    this.walls = Wall.drawWalls.call(this, this.level);
    this.canvas.addEventListener('keydown',PlayerEvents.moveKey.bind(this));
    this.canvas.addEventListener('mousemove', PlayerEvents.moveMouse.bind(this));
    // this.detectCollision();
  }

  mouseAngle() {
    let mouseDist = this.mousePos.x - this.tank.pos.x
    let mouseHeight = this.mousePos.y - this.tank.pos.y
    let angle = Math.atan2(mouseHeight, mouseDist);
    return angle;
  }

  setMousePos(e) {
    // see stack overflow --> https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas
    let boundOffset = this.canvas.getBoundingClientRect();
    let scaleX = this.canvas.width / boundOffset.width;
    let scaleY = this.canvas.width / boundOffset.height;
    let mouseX = (e.clientX - boundOffset.left) * scaleX;
    let mouseY = (e.clientY - boundOffset.top) * scaleY + Defaults.canvasOffset();
    this.mousePos = {
      x: mouseX,
      y: mouseY
    }
  }

  setupTank(){
    let options = Tank.setOptions(this.getStartPos(), Defaults.tankSize().w, Defaults.tankSize().h, 'darkgreen', this.getStartPos());
    let tank = new Tank(this.canvas, options)
    return tank;
  }

  getStartPos() {
    return {
      x: 5,
      y: this.height / 2 + Defaults.centerYOffset()
    }
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

  redrawPortals() {
    this.portals.forEach((portal) => {
      portal.draw();
    })
  }

  detectCollision() {
    let tankCorners = {
      tl: {x: this.tank.pos.x, y: this.tank.pos.y},
      tr: {x: this.tank.pos.x + Defaults.tankSize().w, y: this.tank.pos.y},
      bl: {x: this.tank.pos.x, y: this.tank.pos.y + Defaults.tankSize().h},
      br: {x: this.tank.pos.x + Defaults.tankSize().w, y: this.tank.pos.y + Defaults.tankSize().h}
    }

    let allObjects = this.portals.concat(this.walls, this.enemies)
    for (let obj of allObjects) {
      Object.keys(tankCorners).some((key) => {
        let corner = tankCorners[key]
        if (this.ctx.isPointInPath(obj.path, corner.x, corner.y)) {
          console.log(`There was a collision with between corner: ${key} and a ${obj.constructor.name}`);
        }
      })
      
    }
  }
}


export default GameMap;