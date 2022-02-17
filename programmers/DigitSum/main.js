function solution(n)
{
    var answer = 0;

    let arr = [];
    arr = (n + '').split('');
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      answer += parseInt(arr[i]);
    }
    return answer;
}

let an = solution(123);
console.log(an);