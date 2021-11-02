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
    // let fireball = new Fireball(this.canvas, this.pos, this.vector);
    let fireball = new Fireball(this.canvas, this.pos, this.vector, gameMap);
    fireball.setPath()
    fireball.draw();
    return fireball
  }
  
  setVector(game_map) {
    let xVector = game_map.tank.pos.x - this.pos.x;
    let yVector = game_map.tank.pos.y - this.pos.y;
    let yReduce = yVector / Math.abs(yVector);
    let xReduce = xVector / Math.abs(yVector);
    // let gcf = FactorUtil.gcf(xVector, yVector);
    // debugger
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