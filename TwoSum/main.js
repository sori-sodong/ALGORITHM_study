const twoSum = function(nums, target) {
  
  let answer = [];
  for (let i = 0 ; i < nums.length; i++) {
      let sum = 0;
      sum = target - nums[i];
      if(nums.indexOf(sum)!==i && nums.indexOf(sum) > -1) {
        answer.push(nums.indexOf(sum));
        answer.push(parseInt(i));
        
        return answer;
      }
      
  }
};

const nums = [3,3];
const target = 6;

console.log(twoSum(nums,target));
