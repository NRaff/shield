import TankControlsUtil from "./TankControlsUtil"

// all events should be bound to the game_map
const PlayerEvents = {
  moveKey(keyEvent) {
    let keyPressed = keyEvent.key
    if (Object.keys(this.tank.controls).includes(keyPressed)) {
      this.tank.controls[keyPressed]()
      if (!this.collisionDetected()) {
        TankControlsUtil.move.apply(this.tank);
        this.tank.shield.newAngle(this.mouseAngle());
      } else {
        this.tank.nextPos = {...this.tank.pos};
      }
    }
    window.requestAnimationFrame(this.redrawMap.bind(this));
  },

  moveMouse(e) {
    this.setMousePos(e)
    this.tank.shield.newAngle(this.mouseAngle());
    window.requestAnimationFrame(this.redrawMap.bind(this));
  }
}

export default PlayerEvents;