var combine = function(n, k) {
  let tmp = Array.from({length:k}, ()=>0);
  let answer = [];
  
  function DFS(l,s) {
    if (l === k) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <=n; i++){
        tmp[l] = i;
        DFS(l+1, i+1);
      }
    }
  }
};