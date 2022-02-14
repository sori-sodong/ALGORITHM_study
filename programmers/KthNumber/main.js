function solution(array, commands) {
  var answer = [];

  for (let i of commands){
    let tmpArray = [];
    //console.log(i);
    tmpArray = array.slice(i[0]-1, i[1]);
    //console.log(tmpArray);
    tmpArray.sort();
    console.log(tmpArray);
    answer.push(tmpArray[i[2]-1]);
    console.log(answer);
  }

  return answer;
}
let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3],[7,7,1]];
solution(array, commands);




//   for (let i = 0; i<times; i++){
//     let tmpArray = [];
//     for (let j = commands[i][0]; j<=commands[i][1]; j++){
//       tmpArray.push(array[j-1]);
//     }
//     tmpArray.sort();
//     answer.push(tmpArray[commands[i][2]-1]);
//   }
//   console.log(answer);
//   return answer;
// }