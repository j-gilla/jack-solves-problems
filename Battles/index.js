function battle(x, y) {

  let chars ={"A":1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8, "I": 9, "J": 10, "K": 11,
  "L": 12, "M": 13, "N": 14, "O": 15, "P": 16, "Q": 17, "R": 18,
  "S": 19, "T": 20, "U": 21, "V": 22, "W": 23, "X": 24, "Y": 25,
  "Z": 26}

  let singleX = x.replace( /[^A-Z]/g, '' ).split("");
  let singleY= y.replace( /[^A-Z]/g, '' ).split("");

  let xRes = 0; let yRes = 0;

  singleX.map((el) =>{xRes += chars[el];
    return xRes;
  });
  singleY.map((el) =>{yRes += chars[el];
    return yRes;
  });

  if(xRes > yRes) return x;
  if(yRes > xRes) return y;
  if(xRes === yRes) return 'Tie!'

}

module.exports=battle;
