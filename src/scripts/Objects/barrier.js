class Barrier  {
  constructor(start, end) {
    this.start = start,
    this.end = end,
    this.size = this.setSize();
    this.path = this.setPath();
    this.color = 'darkgray';
  }

  setSize() {
    let width = this.end.x - this.start.x
    let height = this.end.y - this.start.y
    return {
      w: width,
      h: height
    }
  }

  setPath() {
    let path = new Path2D();
    path.rect(this.start.x, this.start.y, this.size.w, this.size.h);
    return path;
  }
}

export default Barrier;