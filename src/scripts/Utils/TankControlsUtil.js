// tank controls are bound when the tank is first drawn...'this' is interpreted as 
// the tank object
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
  }
}

export default TankControlsUtil;