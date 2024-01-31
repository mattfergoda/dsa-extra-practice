const OPEN_TO_CLOSE = {
  "(" : ")",
  "[" : "]",
  "{" : "}",
  "<" : ">"
};

const ALL = Object.keys(OPEN_TO_CLOSE).concat(Object.values(OPEN_TO_CLOSE));

function isBalanced(s) {

  function _balanced(input, index, seeking=null) {
    while (index < input.length) {
      const thisChar = input[index];
      if (thisChar === seeking) { // Base case: found what we're seeking.
        index++;
        return { newIndex: index, isBalanced: true };
      } else if (!ALL.includes(thisChar)) { // Not a bracket, go to next char.
        index++;
      } else if (Object.keys(OPEN_TO_CLOSE).includes(thisChar)) { 
        // This is an opening bracket. Find its match.
        index++;
        let {newIndex, isBalanced} = _balanced(
          input, 
          index, 
          OPEN_TO_CLOSE[thisChar]
        )
        if (!isBalanced) { // Not a balanced bracket, return false
          return { newIndex: index, isBalanced: false };
        } else {
          index = newIndex;
        }
      } else { // Base case: reached the end and didn't find a match
        return {newIndex: index, isBalanced: false};
      }
    }
    // Ultimately if seeking is null, we're balanced.
    return {newIndex: index, isBalanced: seeking === null};
  }

  return _balanced(s, 0)["isBalanced"];

}

const YES = [
  "",
  "<>",
  "<<[{}]>>",
]

const NO = [
  "<",
  ">",
  "<<>",
  "<}",
]

for (let y of YES){
  if (!isBalanced(y)) console.log(`ERR ${y} should be true`)
}
  

for (let n of NO){
  if (isBalanced(n)) console.log(`ERR ${n} should be false`)
}