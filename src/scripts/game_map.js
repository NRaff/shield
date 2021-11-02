import Enemy from "./Objects/enemy";
import Tank from "./Objects/tank";
import ArcType from "./Utils/ArcType";
import PlayerEvents from "./Utils/PlayerEvents";
import Wall from "./Objects/wall";
import Defaults from "./Utils/Defaults";
import Portal from "./Objects/portal";
import TankControlsUtil from "./Utils/TankControlsUtil";

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
  }

  startMap() {
    this.tank.drawTank();
    this.portals = Portal.drawPortals.call(this)
    this.enemies = Enemy.drawEnemies.call(this, this.level);
    this.enemies[0].setVector(this);
    this.enemies[0].shootsFireball();
    this.walls = Wall.drawWalls.call(this, this.level);
    this.canvas.addEventListener('keydown',PlayerEvents.moveKey.bind(this));
    this.canvas.addEventListener('mousemove', PlayerEvents.moveMouse.bind(this));
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

  //determine if the tank collided with another object
  collisionDetected() {
    let tankCorners = TankControlsUtil.getTankCorners.apply(this.tank);
    let allObjects = this.walls.concat(this.enemies);
    for (let obj of allObjects) {
      let collisions = Object.keys(tankCorners).filter((key) => {
        let corner = tankCorners[key]
        return this.ctx.isPointInPath(obj.path, corner.x, corner.y)
      })
      if (collisions.length !== 0) return true;
    }
    return false;
  }
}


export default GameMap;