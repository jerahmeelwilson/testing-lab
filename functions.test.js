const { returnTwo, greeting, add } = require("./functions");

describe("returnTwo test", () => {
  test("returnTwo should return 2", () => expect(returnTwo()).toBe(2));
});

describe("greeting test", () => {
  test("greeting should return Hello, James.", () => {
    expect(greeting("James")).toBe("Hello, James.");
  });
  test("greeting should return Hello, Jill.", () => {
    expect(greeting("Jill")).toBe("Hello, Jill.");
  });
});

describe("add test", () => {
  test("add should return sum of 1 and 2, 3", () => {
    expect(add(1, 2)).toBe(3);
  });
  test("add should return sum of 5 and 9, 14", () => {
    expect(add(5, 9)).toBe(14);
  });
});
