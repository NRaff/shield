// tank controls are bound when the tank is first drawn...'this' is interpreted as 
// the tank object
import Defaults from "./Defaults";

const TankControlsUtil = {
  moveUp() {
    this.pos.y -= this.speed.y;
    this.shield.parentPos = this.pos
  },

  moveDown() {
    this.pos.y += this.speed.y;
    this.shield.parentPos = this.pos
  },

  moveLeft() {
    this.pos.x -= this.speed.x;
    this.shield.parentPos = this.pos
  },

  moveRight() {
    this.pos.x += this.speed.x;
    this.shield.parentPos = this.pos
  },

  //returns an x,y vector adjust incase of a collision
  checkUp(){
    this.nextPos.y = this.pos.y - this.speed.y;
    this.circleBack()
  },
  checkDown() {
    this.nextPos.y = this.pos.y + this.speed.y;
    this.circleBack()
  },
  checkLeft() {
    this.nextPos.x = this.pos.x - this.speed.x;
    this.circleBack()
  },
  checkRight() {
    this.nextPos.x = this.pos.x + this.speed.x;
    this.circleBack()
  },

  move() {
    this.pos = {...this.nextPos};
    this.shield.parentPos = this.pos
  },

  //returns a map of corners based on the potential next pos
  getTankCorners() {
    return {
      tl: { x: this.nextPos.x, y: this.nextPos.y },
      tr: { x: this.nextPos.x + Defaults.tankSize().w, y: this.nextPos.y },
      bl: { x: this.nextPos.x, y: this.nextPos.y + Defaults.tankSize().h },
      br: { x: this.nextPos.x + Defaults.tankSize().w, y: this.nextPos.y + Defaults.tankSize().h }
    }
  }
}

export default TankControlsUtil;