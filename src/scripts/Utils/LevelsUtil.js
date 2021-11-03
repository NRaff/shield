import Enemy from "../Objects/enemy"
import Wall from "../Objects/wall"

// should be called from the GameManager context
const LevelsUtil = {
  levelOne() {
    // create walls
    let wallOptions = Wall.setOptions(
      {x: this.gameCanvas.width / 2 - 40, y: this.gameCanvas.height / 2},
      10,
      10,
      'darkgray',
      {x: this.gameCanvas.width / 2 + 40, y: this.gameCanvas.height / 2}
    )
    let wall = new Wall(this.gameCanvas,wallOptions)
    wall.drawHorizon();
    let enemyOptions = Enemy.setOptions(
      {x: this.gameCanvas.width / 2 - 5, y: this.gameCanvas.height / 6},
      10,
      10,
      'red',
      {x: this.gameCanvas.width / 2 + 5, y: this.gameCanvas.height / 6}
    )
    // create enemys
    let enemy = new Enemy(this.gameCanvas, enemyOptions)
    enemy.setPath();
    return {
      walls: [wall],
      enemies: [enemy]
    }
  },

  levelTwo() {
    // create walls
    let wallOptions = Wall.setOptions(
      { x: this.gameCanvas.width / 2 - 40, y: this.gameCanvas.height / 2 },
      10,
      10,
      'darkgray',
      { x: this.gameCanvas.width / 2 + 40, y: this.gameCanvas.height / 2 }
    )
    let wall = new Wall(this.gameCanvas, wallOptions)
    wall.drawHorizon();
    // create first enemy
    let enemyOptions = Enemy.setOptions(
      { x: this.gameCanvas.width / 4 - 5, y: this.gameCanvas.height / 6 },
      10,
      10,
      'red',
      { x: this.gameCanvas.width / 4 + 5, y: this.gameCanvas.height / 6 }
    )
    let enemy = new Enemy(this.gameCanvas, enemyOptions);
    enemy.setPath();
    let enemies = [enemy];
    // create second enemy
    enemyOptions = Enemy.setOptions(
      { x: this.gameCanvas.width / 4 * 3 - 5, y: this.gameCanvas.height / 6 * 5 },
      10,
      10,
      'red',
      { x: this.gameCanvas.width / 4 * 3 + 5, y: this.gameCanvas.height / 6 * 5 }
    )
    let enemy2 = new Enemy(this.gameCanvas, enemyOptions);
    enemy2.setPath();
    enemies.push(enemy2);
    return {
      walls: [wall],
      enemies: enemies
    }
  },

  levelThree() {

  },

  levelFour() {

  }
}

export default LevelsUtil;