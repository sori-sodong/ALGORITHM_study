var matrixReshape = function(mat, r, c) {
  let arr, answer = [];
  arr = mat.flat();
  console.log(arr.length, r*c);
  if (arr.length === r * c){
    let tmt= [];
    for(let i = 0, j = 0; i < arr.length; i++) {
      tmt.push(arr[i]);
      if((i+1)%c === 0) { 
        answer.push(tmt);
        tmt = [];
        j++;
      }
    }
    console.log("here");
    return answer;
  } else {
    console.log("else");
    return mat;
  }
};

mat1 = [[1,2], [3,4]];
let an = matrixReshape(mat1, 4, 1);
console.log(an);