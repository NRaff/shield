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