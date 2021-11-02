const ArcType = {
  full() {
    return Math.PI * 2;
  },

  half() {
    return Math.PI;
  },

  third() {
    return Math.PI * 2 / 3;
  },

  quarter() {
    return Math.PI / 2;
  },

  sixth() {
    return Math.PI * 2 / 6;
  },

  eighth() {
    return Math.PI / 2 / 2;
  },

  ninth() {
    return Math.PI * 2 / 9
  }
}

export default ArcType;