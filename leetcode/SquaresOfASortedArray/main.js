var sortedSquares = function(nums) {
  nums.map((val,index) => nums[index] = val*val);
  return nums.sort((a,b) => a-b);
};
let nums = [-4,-1,0,3,10];
let an = sortedSquares(nums);
console.log(an);