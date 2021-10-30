import ArcType from "./Utils/ArcType";
import PhysObject from "./phys_object";
import Shield from "./shield";

class Tank extends PhysObject {
  constructor(ctx, options) {
    super(ctx, options);
    this.color = 'darkgreen';
    this.shield = new Shield(this.context, this.pos,'cyan',ArcType.quarter,this.size);
  }

  drawTank() {
    this.draw();
    this.shield.draw();
  }

}

export default Tank;