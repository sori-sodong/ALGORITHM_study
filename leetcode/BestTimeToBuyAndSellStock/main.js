var maxProfit = function(prices) {
  let min = prices[0], max = 0;
  
  for(let i = 1; i < prices.length; i++){
      if(prices[i] - min > max){
          max = prices[i] - min;
      }
      
      if(prices[i] < min) min = prices[i]
  }
  /*
  prices[1] = 2 min = 7
  min = 2
  prices[2] = 5, min =7
  min
  */
  return max;
};

let prices = [7,2,5,3,1,6,4];
let an = maxProfit(prices);
console.log(an);