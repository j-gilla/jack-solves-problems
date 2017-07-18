function battle(x, y) {
  //create an object of letters  name and values props
  let chars ={"A":1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8, "I": 9, "J": 10, "K": 11,
  "L": 12, "M": 13, "N": 14, "O": 15, "P": 16, "Q": 17, "R": 18,
  "S": 19, "T": 20, "U": 21, "V": 22, "W": 23, "X": 24, "Y": 25,
  "Z": 26}




  //split down x and y into indvidual characters & remove any lowercase
  let singleX = x.replace( /[^A-Z]/g, '' ).split("");
  let singleY= y.replace( /[^A-Z]/g, '' ).split("");

  console.log(typeof singleX)
  let result = 0;
  //loop through x and y variables and return property from chars
  singleX.forEach((el, i, char) =>{
    console.log(el);
    for(let key in chars){
      if(key ===chars[el]){
        result += el;
        return result[i];
      }
    }
  });

  return result;
}



console.log(battle("OnE",'TWO'));

module.exports=battle;
