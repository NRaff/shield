import ArrayUtil from "./Utils/ArrayUtil";
import Defaults from "./Utils/Defaults";

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
  }
  static setOptions(startPos, w, h, color, endPos) {
    return {
      color: color || 'darkgray',
      pos: {
        x: startPos.x,
        y: startPos.y
      },
      endPos: {
        x: endPos.x,
        y: endPos.y
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