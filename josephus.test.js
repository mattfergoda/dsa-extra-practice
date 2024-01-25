const { findSurvivor } = require("./josephus");

describe("findSurvivor", function() {
  it("finds survivor", function() {
    expect(findSurvivor(10, 3)).toEqual(4)
  });
})
