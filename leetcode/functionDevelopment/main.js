function solution(progresses, speeds) {
  var answer = [];
  let days = [];
  //작업일 계산하기
  for (let i = 0; i < progresses.length; i++) {
    days[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
  }
  let count = 1;
  let tmp1 = days[0], tmp2;
  console.log(days);
  for (let i = 1; i < days.length; i++) {
    tmp2 = days[i];
    console.log(`i : ${i}, tmp1 : ${tmp1}, tmp2 : ${tmp2}`);
    if( tmp1 >= tmp2 ) {
      count++;
    } else {
      tmp1 = tmp2;
      answer.push(count);
      count = 1;
    }
  }
  answer.push(count);

  console.log(answer);
  return answer;
}

// function solution(progresses, speeds) {
//   let answer = [0];
//   let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
//   let maxDay = days[0];
//   for(let i = 0, j = 0; i< days.length; i++){
//       if(days[i] <= maxDay) {
//           answer[j] += 1;
//       } else {
//           maxDay = days[i];
//           answer[++j] = 1;
//       }
//   }

  return answer;
}



progresses = [55,60,65];
speed = [5,10,7];
solution(progresses, speed);