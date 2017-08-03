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

if(typeof module !== undefined) {
  module.exports = invert;
}
