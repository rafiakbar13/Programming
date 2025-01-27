import { CustomerType } from "../src/enum";
describe("Enum", () => {
    it("Should support enum", () => {
        const customer = {
            id: 1,
            name: "Rafi",
            type: CustomerType.PLATINUM,
        };
        console.info(customer);
    });
});
