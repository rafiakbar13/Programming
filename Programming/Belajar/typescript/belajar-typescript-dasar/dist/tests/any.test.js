"use strict";
describe("Any", () => {
    it("should support in typescript", () => {
        const person = {
            id: 1,
            name: "Rafi",
            age: 20,
        };
        person.age = "20";
        person.address = "Jakarta";
        console.info(person);
    });
});
