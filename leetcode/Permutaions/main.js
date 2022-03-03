var permute = function(nums) {
  const n = nums.length;
  let ch = Array.from({length: n}, ()=>0);
  let answer = [];
  let tmp = Array.from({length : n}, () => 0);
  let ind = 0;
  function DFS(L) {
    if(L === n) {
      answer.push(tmp.slice());
    }
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = nums[i];
          DFS(L+1);
          ch[i]=0;
        }
        
      }
    }
    DFS(0);
    return answer;
}


const arr = [1,2,3];
let an = permute(arr);
console.log(an);