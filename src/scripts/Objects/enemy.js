import FactorUtil from "../Utils/FactorUtil";
import Fireball from "./fireball";
import PhysObject from "./phys_object";

class Enemy extends PhysObject {
  constructor(ctx, options) {
    super(ctx, options)
    this.color = 'red'
    this.vector = {};
  }

  static drawEnemy(gamemap) {
    let enemy = new Enemy(this.canvas);
    enemy.setRandomStartEnd();
    enemy.setPath();
    enemy.draw();
    return enemy;
  }

  static drawEnemies(num) {
    let enemies = [];
    let drawFunc = Enemy.drawEnemy.bind(this)
    while (enemies.length < num) {
      enemies.push(drawFunc())
    }
    return enemies;
  }

  shootsFireball(gameMap) {
    let midEnemy = {x: this.pos.x + 5, y: this.pos.y + 5}
    let fireball = new Fireball(this.canvas, midEnemy, this.vector, gameMap);
    fireball.setPath()
    fireball.draw();
    return fireball
  }
  
  setVector(game_map) {
    let midEnemy = { x: this.pos.x + 5, y: this.pos.y + 5 }
    let xVector = game_map.tank.pos.x - midEnemy.x;
    let yVector = game_map.tank.pos.y - midEnemy.y;
    let yReduce = yVector / Math.abs(yVector);
    let xReduce = xVector / Math.abs(yVector);
    let moveX = xReduce//xVector / Math.abs(xVector);
    let moveY = yReduce//yVector / Math.abs(yVector);
    this.vector = {
      x: moveX,
      y: moveY
    }
    return {
      x: moveX,
      y: moveY
    }
  }
}

export default Enemy;