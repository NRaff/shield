import ArcType from "../Utils/ArcType";
import Defaults from "../Utils/Defaults";

class Portal {
  constructor(canvas, color, side) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.color = color;
    this.side = side;
    this.path;
  }

  //must be called from game_map context
  static drawPortals(){
    let startPortal = new Portal(this.canvas, 'blue','start');
    startPortal.setPath();
    let endPortal = new Portal(this.canvas, 'blue', 'end');
    endPortal.setPath();
    let portals = [startPortal, endPortal];
    startPortal.draw();
    endPortal.draw();
    return portals;
  }
  
  draw() {
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = Defaults.portalLineWidth();
    this.ctx.stroke(this.path);
  }

  setPath() {
    let portal = new Path2D();
    let pos = this.side === 'start' ? this.getStartPos() : this.getEndPos();
    console.log(pos)
    portal.arc(
      pos.x,
      pos.y,
      Defaults.portalRadius(),
      0,
      ArcType.full()
    )
    this.path = portal;
  }

  getStartPos(){
    return {
      x: 0,
      y: this.canvas.height / 2
    }
  }

  getEndPos() {
    return {
      x: this.canvas.width,
      y: this.canvas.height / 2
    }
  }



}

export default Portal;