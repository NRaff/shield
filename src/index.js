import GameMap from "./scripts/game_map";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("app_page");
  const shield = document.getElementById("shield_game");
  const gameMap = new GameMap(shield,3);
})