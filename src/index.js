import Tank from "./scripts/tank";
import GameMap from "./scripts/game_map";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("app_page");
  const shield = document.getElementById("shield_game");
  const newTank = new Tank(shield);
  newTank.drawTank();

  const gameMap = new GameMap(shield,3);
  gameMap.drawPortals();
  gameMap.drawBarriers();
  debugger
  gameMap.startTank()
})