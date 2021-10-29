import PhysObject from "./phys_object";

class Wall extends PhysObject {
  //Essentially the same as PhysObject, but overwrites the color to 
  //always be constructed as dark gray
  constructor(ctx, options) {
    super(ctx, options);
    this.color = 'darkgray'
  }
}

export default Wall;