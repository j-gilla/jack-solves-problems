function invert(arr){
  let res =[]
  arr.map((el) => {
    if(el > 0){
    res.push(-Math.abs(el));
  } else{
    res.push(Math.abs(el))
  }
  });

  return res;
}

console.log(invert([1,2,3,4,5]))
console.log(invert([-1,-2,-3,-4,-5]))

if(typeof module !== undefined) {
  module.exports = invert;
}
