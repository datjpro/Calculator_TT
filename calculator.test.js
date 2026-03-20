const { add, subtract, multiply, divide } = require("./calculator");

test("cong 2 + 3 = 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("tru 5 - 2 = 3", () => {
  expect(subtract(5, 2)).toBe(3);
});

test("nhan 4 * 3 = 12", () => {
  expect(multiply(4, 3)).toBe(12);
});

test("chia 8 / 2 = 4", () => {
  expect(divide(8, 2)).toBe(4);
});

test("chia cho 0 thi bao loi", () => {
  expect(() => divide(8, 0)).toThrow("Cannot divide by zero");
});
