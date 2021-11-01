import Enemy from "./enemy";
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
    this.drawBarriers();
    this.drawEnemies();
    // add keyboard controls listener
    this.canvas.addEventListener('keydown', (keyEvent) => {
      let keyPressed = keyEvent.key
      if (Object.keys(this.tank.controls).includes(keyPressed)) {
        this.tank.controls[keyPressed]()
        this.tank.shield.newAngle(this.mouseAngle())
      }
      window.requestAnimationFrame(this.redrawMap.bind(this));
    })

    // add mouse controls listener
    this.canvas.addEventListener('mousemove', (e) => {
      this.setMousePos(e)
      this.tank.shield.newAngle(this.mouseAngle());
      window.requestAnimationFrame(this.redrawMap.bind(this));
    })
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
    console.log(this.height)
    console.log(this.width)
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

  redrawBarriers() {
    this.walls.forEach((wall) => {
      this.ctx.fillStyle = wall.color;
      this.ctx.fill(wall.path);
    })
  }

  // draws a flat while either horizontally or vertically (random)
  drawWall() {
    const options = Wall.setDefaults();
    const wall = new Wall(this.canvas, options);
    wall.randomWall();
    return wall;
  }

  redrawEnemies() {
    this.enemies.forEach((enemy) => {
      this.ctx.fillStyle = enemy.color;
      this.ctx.fill(enemy.path);
    })
  }

  drawEnemies() {
    while (this.enemies.length < this.level) {
      this.enemies.push(this.drawEnemy());
    }
  }

  drawEnemy() {
    let enemy = new Enemy(this.canvas);
    enemy.setRandomStartEnd();
    enemy.draw();
    return enemy;
  }
}

export default GameMap;