import GameMap from "../game_map";
import PlayerEvents from "../Utils/PlayerEvents";

class GameManager {
  constructor() {
    this.gameCanvas = document.getElementById('shield_game');
    this.startBtn = document.getElementById('start');
    this.instBtn = document.getElementById('instructions');
    this.setGameOpListeners();
    this.gameMap;
    this.playerMovesKeyFn;
    this.playerMovesMouseFn;
  }

  setGameOpListeners() {
    this.startBtn.addEventListener('click', this.startClicked.bind(this));
    // this.instBtn.addEventListener('mouseenter', callback);
    // this.instBtn.addEventListener('mouseleave', callback);
  }

  setInGameListeners(gameMap) {
    this.playerMovesKeyFn = PlayerEvents.moveKey.bind(gameMap);
    this.playerMovesMouseFn = PlayerEvents.moveMouse.bind(gameMap);
    this.gameCanvas.addEventListener('keydown', this.playerMovesKeyFn);
    this.gameCanvas.addEventListener('mousemove', this.playerMovesMouseFn);
  }

  removeInGameListeners(gameMap) {
    this.gameCanvas.removeEventListener('keydown', this.playerMovesKeyFn);
    this.gameCanvas.removeEventListener('mousemove', this.playerMovesMouseFn);
  }

  startClicked(e) {
    if (e.target.innerText === 'Start') {
      e.target.innerText = 'Stop';
      const gameMap = new GameMap(this.gameCanvas, 1);
      this.gameMap = gameMap;
      this.setInGameListeners(gameMap)
      console.log(this.inGameListeners);
    } else {
      e.target.innerText = 'Start';
      clearInterval(this.gameMap.moveFireballs);
      clearInterval(this.gameMap.firing)
      this.removeInGameListeners(this.gameMap);
      this.gameCanvas.getContext('2d').clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
    }
    
  }

  instMouseEnter() {

  }

  instMouseLeave(){

  }
}

export default GameManager;