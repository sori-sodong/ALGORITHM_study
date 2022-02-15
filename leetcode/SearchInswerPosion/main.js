var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1, check = 0;
    let mid;
    while(left <= right) {
      mid = parseInt((left + right)/2);
      console.log(`nums : ${nums}, left : ${left}, right : ${right}, mid : ${mid}, nums[mid] : ${nums[mid]}`);
      if (target > nums[mid]) {
        left = mid + 1;
      }
      else if (target < nums[mid]) {
        right = mid - 1;
      } else if (target === nums[mid])  {
        return mid;
      }
      
    }
    
    return (target < nums[mid]) ? mid : mid + 1;
};

let answer = searchInsert([1,3,5,7,9], 0);
console.log(answer);
// console.log(searchInsert([1,3,5,7,9], 4));