import ArcType from "./Utils/ArcType";
import PhysObject from "./phys_object";
import Shield from "./shield";
import TankControlsUtil from "./Utils/TankControlsUtil";

class Tank extends PhysObject {
  constructor(ctx, options) {
    super(ctx, options);
    this.color = 'darkgreen';
    this.shield = new Shield(this.context, this.pos,'cyan',ArcType.eighth,this.size);
    this.speed = {x: 15, y: 15};
    this.controls = this.setControls();

  }

  drawTank() {
    this.draw();
    this.shield.draw();
    this.canvas.addEventListener('keydown', (keyEvent) => {
      let keyPressed = keyEvent.key
      if (Object.keys(this.controls).includes(keyPressed)) { 
        this.clearAround()
        this.controls[keyPressed]()
      }
      window.requestAnimationFrame(this.redraw.bind(this));
    })
  }

  redraw() {
    this.shield.updatePos();
    this.draw();
    this.shield.draw()
  }
  clearAround() {
    this.context.clearRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    this.context.clearRect(this.pos.x, this.pos.y, -this.size.x, this.size.y);
    this.context.clearRect(this.pos.x, this.pos.y, this.size.x, -this.size.y);
    this.context.clearRect(this.pos.x, this.pos.y, -this.size.x, -this.size.y);
  }

  setControls() {
    return {
      'w': TankControlsUtil.moveUp.bind(this),
      'a': TankControlsUtil.moveLeft.bind(this),
      's': TankControlsUtil.moveDown.bind(this),
      'd': TankControlsUtil.moveRight.bind(this)
    }
  }

}

export default Tank;