var isPalindrome = function(x) {
  x = x.toString().split('');
  let y = x.toString().split(',').reverse();
  if(x.toString() === y.toString()) {
    return true;
  } else {
    return false;
  }
};

let x =-111;
isPalindrome(x);

