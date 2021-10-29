import PhysObject from "./phys_object";

class Tank extends PhysObject {
  constructor(ctx, options) {
    super(ctx, options)
    this.color = 'darkgreen'
  }

  
}

export default Tank;