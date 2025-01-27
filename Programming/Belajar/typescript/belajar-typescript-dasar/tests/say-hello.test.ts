import { sayHello } from "../src/say-hello";

describe("sayHello", () => {
  it("should return Hello Rafi", () => {
    expect(sayHello("Rafi")).toBe("Hello Rafi");
  });
});
