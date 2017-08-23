function oddCubed(arr){
  var res = 0
  for(const value of arr){
    if(value !== Number){
      return undefined
    } else {
      res += value * 3
    }
    return  res;
  }
}

//console.log(100 - 28);
console.log(oddCubed([1,2,3,4]));

if(typeof module !== undefined){
  module.exports = oddCubed;
}
