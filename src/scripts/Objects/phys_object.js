import ArrayUtil from "../Utils/ArrayUtil";
import Defaults from "../Utils/Defaults";

class PhysObject {
  constructor(parent, options) {
    let goodOptions = options || PhysObject.setDefaults();
    this.canvas = parent
    this.context = this.canvas.getContext('2d');
    this.color = goodOptions.color;
    this.pos = goodOptions.pos;
    this.size = goodOptions.size;
    this.bounds = {
      xLeft: 30,
      xRight: this.canvas.width - 30
    }
    this.endPos = goodOptions.endPos;
    this.path;
  }
  static setOptions(startPos, w, h, color, endPos) {
    return {
      color: color || 'darkgray',
      pos: {
        x: startPos.x,
        y: startPos.y
      },
      endPos: {
        x: endPos.x || 0,
        y: endPos.y || 0
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
    // let obj = new Path2D();
    // obj.rect(this.pos.x,this.pos.y,this.size.w, this.size.h)
    this.context.fillStyle = this.color;
    this.context.fill(this.path);
    // this.path = obj;
  }

  setPath() {
    let obj = new Path2D();
    obj.rect(this.pos.x, this.pos.y, this.size.w, this.size.h)
    obj.closePath();
    this.path = obj;
  }

  static setDefaults() {
    return {
      color: 'darkgray',
      pos: {
        x: 10,
        y: 10
      },
      endPos: {
        x: 0,
        y: 0
      },
      size: {
        w: 10,
        h: 10
      }
    }
  }

  setRandomStartEnd() {
    let start = {
      x: Math.floor(Math.random() * this.bounds.xRight) + this.bounds.xLeft,
      y: Math.floor(Math.random() * this.canvas.height)
    }

    let direction = ArrayUtil.sample([-1, 1])
    let end = {
      x: start.x + direction * ArrayUtil.sample(Defaults.wallLengths()),
      y: start.y + direction * ArrayUtil.sample(Defaults.wallLengths())
    }
    this.pos = start
    this.endPos = end
  }

  // checks if a given object is inbounds using both the x an dy axis as well
  // as the start and end position
  inBounds() {
    if (this.startPosBetweenGoals() && this.startPosInsideY() &&
      this.endPosBetweenGoals() && this.endPosInsideY()) {
      return true;
    }
    return false;
  }

  startPosBetweenGoals() {
    return (this.pos.x > this.bounds.xLeft && this.pos.x < this.bounds.xRight)
  }

  startPosInsideY() {
    return (this.pos.y > 0 && this.pos.y < this.canvas.height);
  }

  endPosBetweenGoals() {
    return (this.endPos.x > this.bounds.xLeft && this.endPos.x < this.bounds.xRight)
  }

  endPosInsideY() {
    return (this.endPos.y > 0 && this.endPos.y < this.canvas.height);
  }
}

export default PhysObject;