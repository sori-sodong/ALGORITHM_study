function solution(answers) {
  var answer = [];

  let num1 = [1,2,3,4,5];
  let num2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let num3 = [3,3,1,1,2,2,4,4,5,5];
  let point = [0,0,0];

  let stu1 = Array.from(new Array(answers.length), (x,i) => num1[i%5]);
  let stu2 = Array.from(new Array(answers.length), (x,i) => num2[i%8]);
  let stu3 = Array.from(new Array(answers.length), (x,i) => num3[i%10]);

  for (let i in answers) {
    if(stu1[i] === answers[i]) {
      point[0]++;
    }
    if(stu2[i] === answers[i]) {
      point[1]++;
    }
    if(stu3[i] === answer[i]) {
      point[2]++;
    }
  }
  
  let max = Math.max(point[0], point[1], point[2]);
  for(let i =0; i<point.length; i++) {
    if(max == point[i]) {
      answer.push(i+1);
    }
  }
  
  console.log(answer);
  return answer;
}


let answers = [1,2,3,4,5,1,2,3,3,3,1,2,3,2,4,3,2,3,1,3,2,4,2];
solution(answers);