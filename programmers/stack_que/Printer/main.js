function solution(priorities, location) {
  var answer = 0;
  let tmpArr = [0,0,0,0];
  len = priorities.length;
  for (let i = 0; i < priorities.length; i++) {
    
    while (tmpArr.length > 0) {
      tmpArr = priorities.filter(a => a > priorities[0]); 
      //console.log(`tmpArr : ${tmpArr}`);
      if (tmpArr.length!==0) {
        let tmp = priorities.shift();
        priorities.push(tmp); 
        location = (location === i) ? len - 1 : location - 1;
        console.log("right",i, priorities, location);
      }
      else {
        priorities.shift();
        console.log("wrong",i, priorities, location);
        //location = (location === i) ? len - 1 : location - 1;
        break;
      }
      
    }
    tmpArr = [0,0,0,0];
    
  }
  // 1 9 1 1 1 1 location : 6
  
  console.log(priorities);
  return location+1;
}

let an = solution([1,2,3,4,5],1);


console.log(an);

let max;
let cnt = 0;
let i = 5/max;
max = 5;
console.log(i);