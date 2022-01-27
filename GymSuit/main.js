function solution(n, lost, reserve) {
  var answer = 0;
  answer=n;
  lost = lost.sort((a,b) => a-b)
  reserve = reserve.sort((a,b) => a-b);
  console.log(lost, reserve);
  for (let x of lost) {
    for (let y of reserve) {
      if (x === y) {
        reserve = reserve.filter(number => number !== y);
        lost = lost.filter(number => number != x);
      }
    }
  }
  for (let x of lost){
    console.log(x);
    if (reserve.includes(x-1)){
      reserve = reserve.filter(number => number !== (x-1));
      console.log(`x-1 ${reserve}`);
    } else if (reserve.includes(x+1)) {
      reserve = reserve.filter(number => number !== (x+1));
      console.log(`x-2 ${reserve}`);
    } else {
      answer--;
    }
    console.log(answer);
    console.log("-------------")
    
  }
  console.log(answer);
  return answer;
}

let n=4; 
let lost =[3,1,2]; //1,4,5,6,7,15
let  reserve=[2,4,3];
solution(n,lost,reserve);