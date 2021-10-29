import PhysObject from "./scripts/phys_object";
import Wall from "./scripts/wall";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("app_page");
  const shield = document.getElementById("shield_game");
  const objOptions = PhysObject.setOptions(10,10);
  console.log(objOptions);
  const newObj = new PhysObject(shield, objOptions);
  const wallOptions = PhysObject.setOptions(50,50,50,50);
  const endPos = {x: 70, y: 20};
  const wallObj1 = new Wall(shield, wallOptions, endPos);
  wallObj1.drawDiagonal()
  const wallObj2 = new Wall(shield, wallOptions)
  const wallObj3 = new Wall(shield, wallOptions)
  wallObj2.drawHorizonal();
  wallObj3.drawVertical();
  newObj.draw();
})