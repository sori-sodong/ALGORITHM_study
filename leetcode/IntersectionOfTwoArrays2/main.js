var intersect = function(nums1, nums2) {
  let answer = [];
  let map = new Map();
  for (let i of nums1) {
    if(map.has(i)) {
      map.set(i, map.get(i)+1);
    } else {
      map.set(i,1);
    }
  }console.log(map);
  for (let i of nums2) {
    if (map.has(i) && map.get(i) > 0) {
      answer.push(i);
      map.set(i, map.get(i) - 1);
    }
  }
  console.log(map);
  return answer;
}
let nums1 = [1,2,2,1,3,4];
let nums2 = [2,1,2,2];
let an = intersect(nums1, nums2);
console.log(an);