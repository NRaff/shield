import Barrier from "../Objects/barrier";
import Wall from "../Objects/wall";
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
        this.manager.endGame('beatGame');
      }
    }
  },

  moveMouse(e) {
    this.setMousePos(e)
    this.tank.shield.newAngle(this.mouseAngle());
    window.requestAnimationFrame(this.redrawMap.bind(this));
  },

  playerClicks(e) {
    this.setMousePos(e);
    let barrier = new Barrier(this.mousePos,this.mousePos)
    this.currentBuildWall = barrier;
    this.ctx.fill(barrier)
    console.log('player clicked');
  },

  playerDrags(e) {
    if (this.currentBuildWall) {
      this.setMousePos(e);
      let newBarrier = new Barrier(this.currentBuildWall.start, this.mousePos);
      this.currentBuildWall = newBarrier;
      this.ctx.fill(this.currentBuildWall.path);
    }
  }
}

export default PlayerEvents;