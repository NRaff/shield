import PhysObject from "./phys_object";

class Enemy extends PhysObject {
  constructor(ctx, options) {
    super(ctx, options)
    this.color = 'red'
  }
}

export default Enemy;