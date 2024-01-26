const OPEN_BRACKETS = ["{", "[", "("];
const CLOSED_BRACKETS = [")", "]", "}"];

function balancedBrackets(input) {

  function _findMatch(input, index, brackets) {

    if (index === input.length) return brackets.length === 0;

    const thisChar = input[index];

    if (!OPEN_BRACKETS.includes(thisChar) && !CLOSED_BRACKETS.includes(thisChar)) {
      return _findMatch(input, index + 1, brackets);
    }

    if (OPEN_BRACKETS.includes(thisChar)) {
      brackets.push(thisChar);
      return _findMatch(input, index + 1, brackets);
    } 

    const bracket = brackets[brackets.length - 1];

    if (bracket === '{') {
      if (thisChar === '}') {
        brackets.pop();
        return _findMatch(input, index + 1, brackets);

      }
      return _findMatch(input, index + 1, brackets);
    }

    if (bracket === '[') {
      if (thisChar === ']') {
        brackets.pop();
        return _findMatch(input, index + 1, brackets);

      }
      return _findMatch(input, index + 1, brackets);
    }

    if (bracket === '(') {
      if (thisChar === ')') {
        brackets.pop();
        return _findMatch(input, index + 1, brackets);

      }
      return _findMatch(input, index + 1, brackets);
    }

    if (CLOSED_BRACKETS.includes(thisChar)) {
      return false;
    } 
  }

  return _findMatch(input, 0, []);

}

module.exports = { balancedBrackets };

