const { calc } = require("./polishClac");

describe("polishCalc", function() {
  it("handles commutative operations", function() {
    expect(calc("+ 1 2")).toEqual(3)
    expect(calc("* 2 + 1 2")).toEqual(6)
    expect(calc("+ 9 * 2 3")).toEqual(15)
  });

  it("handles non-commutative operations", function() {
    expect(calc("- 1 2")).toEqual(-1)
    expect(calc("- 9 * 2 3")).toEqual(3)
    expect(calc("/ 6 - 4 2")).toEqual(3)
  });
})