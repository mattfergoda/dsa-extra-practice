const { findSurvivor } = require("./josephus");

describe("findSurvivor", function() {
  it("finds survivor", function() {
    expect(findSurvivor(10, 3)).toBe(4);
    expect(findSurvivor(5, 10)).toBe(4);
    expect(findSurvivor(1, 1)).toBe(1);
    expect(findSurvivor(2, 2)).toBe(1);
  });
})
