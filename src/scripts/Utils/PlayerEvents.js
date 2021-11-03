import TankControlsUtil from "./TankControlsUtil"

// all events should be bound to the game_map
const PlayerEvents = {
  moveKey(keyEvent) {
    let keyPressed = keyEvent.key
    if (Object.keys(this.tank.controls).includes(keyPressed)) {
      this.tank.controls[keyPressed]()
      if (!this.tankCollisionDetected()) {
        TankControlsUtil.move.apply(this.tank);
        this.tank.shield.newAngle(this.mouseAngle());
      } else {
        this.tank.nextPos = {...this.tank.pos};
      }
      
    }
    window.requestAnimationFrame(this.redrawMap.bind(this));
    if (!this.win) {
      this.winDetected();
    }
    // when player wins
    if (this.gameOver && this.win) {
      this.manager.currentLevel += 1;
      if (this.manager.currentLevel <= Object.keys(this.manager.levels).length) {
        this.manager.nextLevel();
      } else {
        this.manager.endGame('win');
      }
    }
  },

  moveMouse(e) {
    this.setMousePos(e)
    this.tank.shield.newAngle(this.mouseAngle());
    window.requestAnimationFrame(this.redrawMap.bind(this));
  }
}

export default PlayerEvents;