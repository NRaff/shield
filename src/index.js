import PhysObject from "./scripts/phys_object";
import Wall from "./scripts/wall";
import Enemy from "./scripts/enemy";
import Shield from "./scripts/shield";
import ArcType from "./scripts/ArcType";
import Tank from "./scripts/tank";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("app_page");
  const shield = document.getElementById("shield_game");
  const objOptions = PhysObject.setOptions(10,10);
  console.log(objOptions);
  const newObj = new PhysObject(shield, objOptions);
  const newShield = new Shield(newObj.context,newObj.pos,'yellow',ArcType.quarter,newObj.size);


  const wallOptions = PhysObject.setOptions(50,50,50,50);
  const endPos = {x: 70, y: 20};
  const wallObj1 = new Wall(shield, wallOptions, endPos);
  wallObj1.drawDiagonal()
  const wallObj2 = new Wall(shield, wallOptions)
  const wallObj3 = new Wall(shield, wallOptions)
  const emyOptions = Enemy.setOptions(200, 50, 20, 20)
  const enemy = new Enemy(shield, emyOptions)
  enemy.draw();
  wallObj2.drawHorizonal();
  wallObj3.drawVertical();
  // newObj.draw();
  // newShield.draw();

  const tankOptions = Tank.setOptions(60,100,10,10);
  const newTank = new Tank(shield);
  newTank.drawTank();
})