function solution(clothes) {
  var answer = 1;
  let com = new Map();
  for (let i of clothes) {
    if (com.has(i[1])) {
      com.set(i[1], com.get(i[1])+1);
    } else {
      com.set(i[1],1);
    }
  }
  for (let [value, key] of com) {
    answer *= key + 1;
  }
  answer -= 1;
  return answer;
}

let clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];
solution(clothes);