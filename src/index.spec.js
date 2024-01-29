const { describe, expect, it } = require("@jest/globals");

describe("Symbol", () => {
  it("should define a dispose property", () => {
    expect(Symbol.dispose).not.toBeUndefined();
  });

  it("should define an asyncDispose property", () => {
    expect(Symbol.asyncDispose).not.toBeUndefined();
  });
});
