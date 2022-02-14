var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let min = n, left = 0, right = n-1;
    while (left <= right) {
      const mid = left + parseInt((right - left)/2);
      if(isBadVersion(mid + 1)) {
        min = Math.min(min,mid);
        right = mid - 1;
      } else left = mid + 1
    }
    return min + 1;
  };
};