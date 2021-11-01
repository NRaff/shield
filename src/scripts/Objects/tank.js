import ArcType from "../Utils/ArcType";
import PhysObject from "./phys_object";
import Shield from "./shield";
import TankControlsUtil from "../Utils/TankControlsUtil";

class Tank extends PhysObject {
  constructor(ctx, options) {
    super(ctx, options);
    this.color = 'darkgreen';
    this.shield = new Shield(this.context, this.pos,'cyan',ArcType.eighth,this.size);
    this.speed = {x: 10, y: 10};
    this.controls = this.setControls();

  }

  drawTank() {
    this.shield.updatePos();
    this.draw();
    this.shield.draw();
  }

  setControls() {
    return {
      'w': TankControlsUtil.moveUp.bind(this),
      'a': TankControlsUtil.moveLeft.bind(this),
      's': TankControlsUtil.moveDown.bind(this),
      'd': TankControlsUtil.moveRight.bind(this),
      'ArrowUp': TankControlsUtil.moveUp.bind(this),
      'ArrowLeft': TankControlsUtil.moveLeft.bind(this),
      'ArrowDown': TankControlsUtil.moveDown.bind(this),
      'ArrowRight': TankControlsUtil.moveRight.bind(this)
    }
  }

}

export default Tank;