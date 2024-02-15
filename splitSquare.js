function dump(square) {
  if (typeof(square) === "number") {
    console.log(square);
    return;
  }

  if (square.length) {
    for (let num of square) dump(num);
  }
}

function validate(square) {
  if (square === 1 || square === 0) return true;

  if (square.length !== 4) return false;

  if (square.length) {
    for (let item of square) {
      if (!validate(item)) return false;
    }
    return true;
  }
}

function simplify(square) {
  if (square === 0 || square === 1) return square;

  let simplifiedSquare = []

  for (let s of square) {
    simplifiedSquare.push(simplify(s));
  }

  if (simplifiedSquare.filter(s => s === 0).length === 4) return 0;
  if (simplifiedSquare.filter(s => s === 1).length === 4) return 1;

  return simplifiedSquare;
}

function add(sq1, sq2) {
  if (!sq1.length && !sq2.length) return sq1 || sq2;

  if (!sq1.length && sq2.length) {
    if (sq1 === 1) return add(sq2, [1,1,1,1]); 
    return sq2;
  }

  if (sq1.length && !sq2.length) {
    if (sq2 === 1) return add(sq1, [1,1,1,1]);
    return sq1;
  }

  if (sq1.length && sq2.length) {
    let addedSquare = [];

    for (let i=0; i<4; i++) {
      addedSquare.push(add(sq1[i], sq2[i]));
    }
    return addedSquare;
  }
}