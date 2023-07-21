import { add, division, multiply, subtract } from "../calculator";

test("adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtracts two numbers correctly", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("multiply two numbers correctly", () => {
  expect(multiply(2, 2)).toBe(4);
})

test("division of two numbers correctly", () => {
  expect(division(8, 2)).toBe(4);
})