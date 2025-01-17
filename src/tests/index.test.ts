import { sum, multiply } from "../index";
import { describe, expect, it } from "@jest/globals";

describe("sum", () => {
  it("should be able to add two positive numbers", () => {
    const ans = sum(2, 3);
    expect(ans).toBe(5);
  });

  it("should be able to add two negative numbers", () => {
    const ans = sum(-2, -3);
    expect(ans).toBe(-5);
  });

  it("should be able to add two 0s", () => {
    const ans = sum(0, 0);
    expect(ans).toBe(0);
  });
});

describe("multiply", () => {
  it("should be able to multiply two positive numbers", () => {
    const ans = multiply(2, 3);
    expect(ans).toBe(6);
  });

  it("should be able to multiply two negative numbers", () => {
    const ans = multiply(-2, -3);
    expect(ans).toBe(6);
  });

  it("should be able to multiply two 0s", () => {
    const ans = multiply(0, 0);
    expect(ans).toBe(0);
  });
});
