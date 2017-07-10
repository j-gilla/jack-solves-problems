function sortGrades(lst){



  let stripped = lst.map((el,i,array) => {
  var result = stripped.forEach((el,i,array) => {
      console.log(el);
      console.log(array);

    })
     return result;
  });

  return stripped;
}

console.log((sortGrades(["V7", "V12", "V1"]), ["V1", "V7", "V12"]));

module.exports = sortGrades;
