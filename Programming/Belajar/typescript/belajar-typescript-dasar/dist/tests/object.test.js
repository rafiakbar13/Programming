"use strict";
describe("Object", () => {
    it("should support object", () => {
        const person = {
            name: "Rafi",
            age: 20,
        };
        console.info(person);
        person.name = "Akbar";
        person.age = 21;
        console.info(person);
    });
});
