"use strict";
describe("Optional Parameter", () => {
    it("should support null and undefined", () => {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info("Hello");
            }
        }
        sayHello("Rafi");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
