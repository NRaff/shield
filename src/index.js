import PhysObject from "./scripts/phys_object";
import Test from "./scripts/phys_object"

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("app_page");
  const shield = document.getElementById("shield_game");
  const newObj = new PhysObject(shield);
  newObj.draw();
})