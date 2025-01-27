"use strict";
describe("Union", () => {
    it("should support union", () => {
        let phone;
        phone = 628123456789;
        phone = "08123456789";
        expect(phone).toEqual("08123456789");
        console.info(phone);
    });
    function process(value) {
        if (typeof value === "number") {
            return value * value;
        }
        else if (typeof value === "string") {
            return value.toUpperCase();
        }
        else {
            return !value;
        }
    }
    expect(process(10)).toBe(100);
    expect(process("Rafi")).toBe("RAFI");
    expect(process(true)).toBe(false);
    console.info(process(10));
    console.info(process("Rafi"));
    console.info(process(true));
    //   it("should toEqual", () => {
    //     const obj1: { name: string; age: number } = {
    //       name: "Rafi",
    //       age: 20,
    //     } as any;
    //     const obj2: { name: string; age: number } = {
    //       name: "Akbar",
    //       age: 20,
    //     } as any;
    //     expect(obj1).toEqual(obj2);
    //   });
});
