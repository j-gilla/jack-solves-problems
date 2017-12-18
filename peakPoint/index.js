function sortGrades(lst){
  let res = [];
  lst.map((el, index) => {
    num = el.substr(1).split()
    res.push(num);
  });
  let merged = [].concat.apply([], res);
  return merged.sort();
}

console.log(sortGrades(["V7", "V12", "V1"]));

module.exports = sortGrades;
