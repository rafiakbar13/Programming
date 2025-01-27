import { Customer, CustomerType } from "../src/enum";
describe("Enum", () => {
  it("Should support enum", () => {
    const customer: Customer = {
      id: 1,
      name: "Rafi",
      type: CustomerType.PLATINUM,
    };
    console.info(customer);
  });
});
