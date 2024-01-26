function calc(input) {
  if (input.length === 0) return 0;

  const inputs = input.split(" ");
  let result = +inputs.pop();

  while (inputs.length > 0) {
    const num = +inputs.pop();
    const operation = inputs.pop();
    result = operate(num, result, operation)
  }

  return result;
}

function operate(num1, num2, operation) {
  if (operation === "+") return num1 + num2;
  if (operation === "-") return num1 - num2;
  if (operation === "*") return num1 * num2;
  if (operation === "/") return num1 / num2;
  return 0;
}

module.exports = { calc }