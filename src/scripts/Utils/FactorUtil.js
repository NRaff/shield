const FactorUtil = {
  gcf(x, y) {
    let least = x > y ? y : x;
    let gc_factor = 1
    for(let i=2; i<least; i++) {
      if (x % i === 0 && y % i === 0) {
        gc_factor = i;
      }
    }
    return gc_factor;
  }
}

export default FactorUtil;