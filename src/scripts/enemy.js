import PhysObject from "./phys_object";

class Enemy extends PhysObject {
  constructor(ctx, options) {
    super(ctx, options)
    this.color = 'red'
  }

  static drawEnemy() {
    let enemy = new Enemy(this.canvas);
    enemy.setRandomStartEnd();
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
}

export default Enemy;