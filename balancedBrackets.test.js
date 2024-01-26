const { balancedBrackets } = require("./balancedBrackets");

describe("balancedBrackets", function() {
  it("identifies balanced brackets", function() {
    expect(balancedBrackets("hello")).toBe(true);
    expect(balancedBrackets("(hi) [there]")).toBe(true);
    expect(balancedBrackets("(hi [there])")).toBe(true);
    expect(balancedBrackets("(((hi)))")).toBe(true);
  });

  it("identifies unbalanced brackets", function() {
    expect(balancedBrackets("(hello")).toBe(false);
    expect(balancedBrackets("(nope]")).toBe(false);
    expect(balancedBrackets("((ok) (nope])")).toBe(false);
  })
})
