import { Category, Product } from "../src/type-alias";

describe("Type Alis", () => {
  it("should support type alias", () => {
    const category: Category = {
      id: "CTGR-001",
      name: "Handphone",
    };
    const product: Product = {
      id: "PRD-001",
      name: "Samsung S20",
      price: 20000000,
      category: category,
    };
    console.info(product);
  });
});
