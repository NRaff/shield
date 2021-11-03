import Enemy from "../Objects/enemy"
import Wall from "../Objects/wall"

// should be called from the GameManager context
const LevelsUtil = {
  levelOne() {
    // create walls
    let wallOptions = Wall.setOptions(
      {x: this.gameCanvas.width / 2 - 10, y: this.gameCanvas.height / 2},
      10,
      10,
      'darkgray',
      {x: this.gameCanvas.width / 2 + 10, y: this.gameCanvas.height / 2}
    )
    // console.log(wallOptions)
    let wall = new Wall(this.gameCanvas,wallOptions)
    wall.drawHorizon();
    // create enemies
    let enemyOptions = Enemy.setOptions(
      {x: this.gameCanvas.width / 2 - 5, y: this.gameCanvas.height / 6},
      10,
      10,
      'red',
      {x: this.gameCanvas.width / 2 + 5, y: this.gameCanvas.height / 6}
    )
    let enemy = new Enemy(this.gameCanvas, enemyOptions)
    enemy.setPath();
    // return a dictionary of both
    return {
      walls: [wall],
      enemies: [enemy]
    }
  },

  levelTwo() {

  },

  levelThree() {

  },

  levelFour() {

  }
}

export default LevelsUtil;