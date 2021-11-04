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
      this.manager.nextLevel();
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
    window.requestAnimationFrame(this.redrawMap.bind(this));
  },

  playerDrags(e) {
    if (this.currentBuildWall) {
      this.setMousePos(e);
      console.log(this.currentBuildWall.start)
      let newBarrier = new Barrier(this.currentBuildWall.start, this.mousePos);
      this.currentBuildWall = newBarrier;
      window.requestAnimationFrame(this.redrawMap.bind(this));
    }
  },

  playerSets(e) {
    if (this.currentBuildWall) {
      this.setMousePos(e);
      let newBarrier = new Barrier(this.currentBuildWall.start, this.mousePos);
      this.barriers.push(newBarrier);
      this.currentBuildWall = null;
      window.requestAnimationFrame(this.redrawMap.bind(this));
      if (this.barriers.length === Math.ceil(this.manager.currentLevel / 2)) {
        this.manager.removeBuildListeners();
        let startBtn = document.getElementById('start');
        startBtn.style.backgroundColor = 'green';
      }
    }
  },

  undoBuild(keyEvent) {
    if (keyEvent.key === 'z') {
      this.barriers.pop();
      let startBtn = document.getElementById('start');
      if (startBtn.style.backgroundColor === 'green') {
        startBtn.style.backgroundColor = 'whitesmoke';
        this.manager.setBuildListeners(this);
      }
      window.requestAnimationFrame(this.redrawMap.bind(this));
    }
  }
}

export default PlayerEvents;