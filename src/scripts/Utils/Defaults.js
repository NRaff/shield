const Defaults = {
  wallLengths () {
    return [10, 20, 30, 40];
  },

  centerYOffset () {
    return -5;
  },

  tankSize() {
    return {
      w: 10,
      h: 10
    }
  },

  canvasOffset() {
    return -70;
  },

  portalLineWidth() {
    return 2;
  },

  portalRadius() {
    return 30;
  },

  shieldLineWidth() {
    return 1;
  },

  shieldOffset() {
    return 5;
  },

  wallWidth() {
    return 10;
  },

  fireballSize(){
    return 2;
  }
}

export default Defaults;