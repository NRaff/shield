import GameMap from "../game_map";
import PlayerEvents from "../Utils/PlayerEvents";

class GameManager {
  constructor() {
    this.pageCols = document.getElementById('all-content');
    this.gameCanvas = document.getElementById('shield_game');
    this.navigationArea = document.getElementById('navigation-area')
    this.startBtn = document.getElementById('start');
    this.instBtn = document.getElementById('instructions');
    this.setGameOpListeners();
    this.gameMap;
    this.playerMovesKeyFn;
    this.playerMovesMouseFn;
    this.instructions = this.instructions || this.createInstructions();
  }

  setGameOpListeners() {
    this.startBtn.addEventListener('click', this.startClicked.bind(this));
    this.instBtn.addEventListener('mouseenter', this.instMouseEnter.bind(this));
    this.instBtn.addEventListener('mouseleave', this.instMouseLeave.bind(this));
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
      this.gameCanvas.focus();
    } else {
      e.target.innerText = 'Start';
      clearInterval(this.gameMap.moveFireballs);
      clearInterval(this.gameMap.firing)
      this.removeInGameListeners(this.gameMap);
      this.gameCanvas.getContext('2d').clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
    } 
  }

  instMouseEnter() {
    console.log('mouseEntered');
    console.log(this.createInstructions())
    this.navigationArea.appendChild(this.instructions);
  }

  instMouseLeave(){
    this.navigationArea.removeChild(this.navigationArea.lastChild);
  }

  createInstructions(){
    let subDiv = document.createElement('div');
    subDiv.id = 'instructions-display';
    let subUl = document.createElement('ul');
    let controlsMove = document.createElement('li');
    controlsMove.innerText = 'Use WASD or Arrow Keys to move';
    let controlsShield = document.createElement('li');
    controlsShield.innerText = 'Move your mouse over the game map to redirect your shield';
    let winInstruction = document.createElement('li');
    winInstruction.innerText = 'Win by successfully moving the tank from one portal to another without getting hit'
    subUl.appendChild(controlsMove);
    subUl.appendChild(controlsShield);
    subUl.appendChild(winInstruction);
    subDiv.appendChild(subUl);
    return subDiv;
  }

  dynamicCanvasCreation() {
    // let game_area = document.createElement('div');
    // game_area.id = 'game-area';
    // this.gameCanvas = document.createElement('canvas');
    // this.gameCanvas.id = 'shield_game';
    // game_area.appendChild(this.gameCanvas);
    // this.pageCols.appendChild(game_area);
  }
}

export default GameManager;