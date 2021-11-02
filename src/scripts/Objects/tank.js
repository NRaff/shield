import ArcType from "../Utils/ArcType";
import PhysObject from "./phys_object";
import Shield from "./shield";
import TankControlsUtil from "../Utils/TankControlsUtil";

class Tank extends PhysObject {
  constructor(ctx, options) {
    super(ctx, options);
    this.color = 'darkgreen';
    this.shield = new Shield(this.context, this.pos,'cyan',ArcType.eighth,this.size);
    this.speed = {x: 5, y: 5};
    this.controls = this.setControls();
    this.nextPos = {...this.pos};
  }

  drawTank() {
    this.shield.updatePos();
    this.setPath();
    this.shield.setPath();
    this.path.addPath(this.shield.path)
    this.draw();
  }

  setControls() {
    return {
      'w': TankControlsUtil.checkUp.bind(this),
      'a': TankControlsUtil.checkLeft.bind(this),
      's': TankControlsUtil.checkDown.bind(this),
      'd': TankControlsUtil.checkRight.bind(this),
      'ArrowUp': TankControlsUtil.checkUp.bind(this),
      'ArrowLeft': TankControlsUtil.checkLeft.bind(this),
      'ArrowDown': TankControlsUtil.checkDown.bind(this),
      'ArrowRight': TankControlsUtil.checkRight.bind(this)
    }
  }

  

}

export default Tank;