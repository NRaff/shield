class PhysObject {
  constructor(parent) {
    this.canvas = parent
    this.context = this.canvas.getContext('2d');
  }

  draw(objDraw) {
    if (objDraw) {
      objDraw();
    } else {
      this.defaultObj();
    }
  }

  defaultObj() {
    this.context.fillStyle = "red";
    this.context.fillRect(10, 10, 50, 50);
  }
}

export default PhysObject;