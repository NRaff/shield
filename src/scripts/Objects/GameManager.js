import GameMap from "../game_map";
import LevelsUtil from "../Utils/LevelsUtil";
import PlayerEvents from "../Utils/PlayerEvents";
import WinLossMessage from "../Utils/WinLossMessage";

class GameManager {
  constructor() {
    this.pageCols = document.getElementById('all-content');
    this.gameCanvas; //set on game start button
    this.navigationArea = document.getElementById('navigation-area')
    this.startBtn = document.getElementById('start');
    this.instBtn = document.getElementById('instructions');
    this.setGameOpListeners();
    this.gameMap;
    this.playerMovesKeyFn;
    this.playerMovesMouseFn;
    this.instructions = this.instructions || this.createInstructions();
    this.currentLevel = 1;
    this.levels = this.setLevels();
  }
  //! Game play management timers
  beginFiring() {
    this.gameMap.addFireballs();

    this.gameMap.moveFireballs = setInterval(() => {
      this.gameMap.fireballs.forEach((fireball) => {
        fireball.move();
        this.gameMap.redrawMap();
      })
      this.gameMap.fireballs = this.gameMap.fireballs.filter((fireball) => {
        return fireball.hitWall === false;
      })
      if (this.gameMap.gameOver && this.gameMap.win === false) {
        // debugger
        this.endGame('loss');
      }
    }, 20)
  }

  keepFiring() {
    this.gameMap.firing = setInterval(() => {
      this.gameMap.addFireballs();
    }, 500)
  }

  //! Game Operations setup
  setGameOpListeners() {
    this.startBtn.addEventListener('click', this.startClicked.bind(this));
  }

  setInGameListeners(gameMap) {
    this.playerMovesKeyFn = PlayerEvents.moveKey.bind(gameMap);
    this.playerMovesMouseFn = PlayerEvents.moveMouse.bind(gameMap);
    this.gameCanvas.addEventListener('keydown', this.playerMovesKeyFn);
    this.gameCanvas.addEventListener('mousemove', this.playerMovesMouseFn);
  }

  removeInGameListeners() {
    this.gameCanvas.removeEventListener('keydown', this.playerMovesKeyFn);
    this.gameCanvas.removeEventListener('mousemove', this.playerMovesMouseFn);
  }

  // ! Level Management
  setLevels() {
    return {
      1: LevelsUtil.levelOne.bind(this),
      2: LevelsUtil.levelTwo.bind(this),
      3: LevelsUtil.levelThree.bind(this),
      4: LevelsUtil.levelFour.bind(this)
    }
  }

  //! Callbacks
  startClicked(e) {
    if (e.target.innerText === 'Start') {
      this.startGame(e)
    } else {
      this.resetGame(e);
    } 
  }

  startGame(e) {
    this.dynamicCanvasCreation();
    this.gameCanvas = document.getElementById('shield_game');
    e.target.innerText = 'Reset';
    this.currentLevel = 1;
    this.gameMap = new GameMap(this, this.gameCanvas, this.levels[this.currentLevel]());
    this.setInGameListeners(this.gameMap)
    this.gameCanvas.focus();
    this.addInstructionsPop();
    this.hideNewGameDialogue();
    this.beginFiring();
    this.keepFiring();
  }

  nextLevel() {
    this.dynamicRemoveCanvas();
    this.dynamicCanvasCreation();
    this.stopIntervals();
    this.gameCanvas = document.getElementById('shield_game');
    this.gameMap = new GameMap(this, this.gameCanvas, this.levels[this.currentLevel]());
    this.setInGameListeners(this.gameMap)
    this.gameCanvas.focus();
    this.beginFiring();
    this.keepFiring();
  }

  resetGame(e) {
    e.target.innerText = 'Start';
    this.stopIntervals();
    this.removeInGameListeners(this.gameMap);
    this.dynamicRemoveCanvas();
    this.hideInstructionsPop();
    this.hideGameOverDialogue();
    this.showNewGameDialogue();
    this.gameCanvas.getContext('2d').clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
  }

  endGame(winLoss) {
    this.removeInGameListeners(this.gameMap);
    this.showGameOverDialogue(winLoss);
  }

  instMouseEnter() {
    this.navigationArea.appendChild(this.instructions);
  }

  instMouseLeave(){
    this.navigationArea.removeChild(this.navigationArea.lastChild);
  }

  stopIntervals() {
    clearInterval(this.gameMap.moveFireballs);
    clearInterval(this.gameMap.firing)
  }

  // ! View Presentation
  hideNewGameDialogue() {
    let newGame = document.getElementsByClassName('new-game')[0];
    this.pageCols.removeChild(newGame)
  }

  showNewGameDialogue() {
    this.pageCols.appendChild(this.createNewGameDialogue());
  }

  createNewGameDialogue() {
    let newGame = document.createElement('div');
    newGame.classList.add('new-game');
    newGame.appendChild(this.instructions);
    return newGame;
  }

  showGameOverDialogue(winOrLoss) {
    let dialogue = this.dynamicCreateGameOverDialogue(winOrLoss);
    this.pageCols.appendChild(dialogue);
  }

  hideGameOverDialogue() {
    let dialogue = document.getElementsByClassName('game-over')[0];
    if (dialogue) { this.pageCols.removeChild(dialogue) };
  }

  dynamicCreateGameOverDialogue(winOrLoss) {
    let gameOverDiv = document.createElement('div');
    gameOverDiv.classList.add('game-over')
    let header = document.createElement('h1');
    header.innerText = WinLossMessage[winOrLoss].header;
    let message = document.createElement('h3');
    message.innerText = WinLossMessage[winOrLoss].message;
    gameOverDiv.appendChild(header);
    gameOverDiv.appendChild(message);
    return gameOverDiv;
  }

  addInstructionsListener() {
    this.instBtn.addEventListener('mouseenter', this.instMouseEnter.bind(this));
    this.instBtn.addEventListener('mouseleave', this.instMouseLeave.bind(this));
  }

  hideInstructionsPop() {
    let instructions = document.getElementById('instructions');
    this.navigationArea.removeChild(instructions);
  }

  addInstructionsPop() {
    let instructions = document.createElement('a')
    instructions.id = 'instructions';
    instructions.innerText = 'Instructions';
    this.navigationArea.appendChild(instructions);
    this.instBtn = instructions;
    this.addInstructionsListener();
  }

  createInstructions(){
    let subDiv = document.createElement('div');
    subDiv.id = 'instructions-display';
    let header = document.createElement('h1');
    header.innerText = "Tap 'Start' to begin!"
    subDiv.appendChild(header);
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
    let game_area = document.createElement('div');
    game_area.id = 'game-area';
    this.gameCanvas = document.createElement('canvas');
    this.gameCanvas.tabIndex = 1;
    this.gameCanvas.focus();
    this.gameCanvas.id = 'shield_game';
    game_area.appendChild(this.gameCanvas);
    this.pageCols.appendChild(game_area);
  }

  dynamicRemoveCanvas() {
    let testGame = document.getElementById('game-area');
    this.pageCols.removeChild(testGame);
  }
}

export default GameManager;