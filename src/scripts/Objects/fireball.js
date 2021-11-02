import ArcType from "../Utils/ArcType";
import Defaults from "../Utils/Defaults";

class Fireball {
  constructor(canvas, startPos, vector, gameMap, color) {
    this.canvas = canvas;
    this.color = color || 'orange'
    this.ctx = this.canvas.getContext('2d');
    this.pos = {x: startPos.x, y: startPos.y};
    this.path;
    this.vector = vector;
    this.speed = 5;
    this.hitWall = false;
    this.gameMap = gameMap
    
  }

  setPath() {
    let fireball = new Path2D();
    fireball.arc(
      this.pos.x,
      this.pos.y,
      Defaults.fireballSize(),
      0,
      ArcType.full(),
      true
    );
    fireball.closePath();
    this.path = fireball;
    this.ctx.fillStyle = this.color;
    // this.ctx.fill(fireball)
  }

  draw() {
    this.ctx.fill(this.path);
  }

  move() {
    this.pos.x += this.vector.x;
    this.pos.y += this.vector.y;
    this.manageCollisions();
    this.setPath();
  }

  manageCollisions() {
    this.manageBoundCollision();
    this.managePortalCollision();
    this.manageShieldCollision();
    this.manageTankCollision();
    this.manageWallCollision();
  }

  manageTankCollision() {
    if (this.ctx.isPointInPath(this.gameMap.tank.path, this.pos.x, this.pos.y)){
      this.collisionOccured()
      clearInterval(this.gameMap.firing)
      this.gameMap.tank.color = 'purple';
      this.gameMap.gameOver = true;
      console.log(`Fireball collided with the Tank.`)
    }
  }

  manageShieldCollision() {
    let shield = this.gameMap.tank.shield;
    if (this.ctx.isPointInPath(shield.path, this.pos.x, this.pos.y)) {
      this.collisionOccured()
      console.log(`Fireball collided with the shield.`)
    }
  }

  managePortalCollision(){
    for (let portal of this.gameMap.portals) {
      if (this.ctx.isPointInPath(portal.path, this.pos.x, this.pos.y)) {
        this.collisionOccured()
        console.log(`Fireball collided with a portal.`)
      }
    }
  }

  manageWallCollision() {
    for (let wall of this.gameMap.walls) {
      if (this.ctx.isPointInPath(wall.path, this.pos.x, this.pos.y)) {
        this.collisionOccured()
        console.log(`Fireball collided with a wall.`)
      }
    }
  }

  manageBoundCollision() {
    if (this.pos.x >= this.canvas.width ||
      this.pos.x < 0 ||
      this.pos.y > this.canvas.height ||
      this.pos.y < 0) {
      this.collisionOccured();
    }
  }

  collisionOccured() {
    this.color = 'purple';
    this.hitWall = true;
  }

  collidesWithBound(){
    if(this.pos.x >= this.canvas.width ||
      this.pos.x < 0 ||
      this.pos.y > this.canvas.height ||
      this.pos.y < 0) {
        this.color = 'purple';
        this.hitWall = true;
      }
  }
}

export default Fireball;