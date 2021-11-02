import Fireball from "./fireball";
import PhysObject from "./phys_object";

class Enemy extends PhysObject {
  constructor(ctx, options) {
    super(ctx, options)
    this.color = 'red'
  }

  static drawEnemy() {
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

  shootsFireball() {
    console.log(this.pos)
    let fireball = new Fireball(this.canvas, this.pos);
    fireball.setPath()
  }
  
  setVector(game_map) {
    let xVector = game_map.tank.pos.x - this.pos.x;
    let yVector = game_map.tank.pos.y - this.pos.y;
    let moveX = xVector / Math.abs(xVector);
    let moveY = yVector / Math.abs(yVector);
    return {
      x: moveX,
      y: moveY
    }
  }
}

export default Enemy;