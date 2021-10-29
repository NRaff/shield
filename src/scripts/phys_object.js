class PhysObject {
  constructor(parent, options) {
    this.canvas = parent
    this.context = this.canvas.getContext('2d');
    this.color = options.color;
    this.pos = options.pos;
    this.size = options.size;
  }
  static setOptions(x, y, w, h, color) {
    return {
      color: color || 'darkgray',
      pos: {
        x: x,
        y: y
      },
      size: {
        w: w || 10,
        h: h || 10
      }
    }
  }
  //Draws either the set object described by the parameters, 
  //or draws an object according to the passed in function
  draw(fn_objDraw) {
    if (fn_objDraw) {
      fn_objDraw();
    } else {
      this.setObj();
    }
  }

  //Draws the set object
  setObj() {
    this.context.fillStyle = this.color;
    this.context.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h);
  }
}

export default PhysObject;