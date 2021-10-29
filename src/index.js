import PhysObject from "./scripts/phys_object";
import Wall from "./scripts/wall";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("app_page");
  const shield = document.getElementById("shield_game");
  const objOptions = PhysObject.setOptions(10,10);
  console.log(objOptions);
  const newObj = new PhysObject(shield, objOptions);
  const wallOptions = PhysObject.setOptions(50,50,5,50);
  const wallObj = new Wall(shield, wallOptions);
  wallObj.draw();
  newObj.draw();
})