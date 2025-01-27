describe("function", () => {
  it("should support function", () => {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }
    expect(sayHello("Rafi")).toBe("Hello Rafi");
    console.info(sayHello("Rafi"));

    function sayHello2(name: string): void {
      console.info(`Hello ${name}`);
    }
    sayHello2("Rafi");
  });
  it("should support rest parameter", () => {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value
      }
      return total;
    }
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });
  // it("should support optional parameter", () => {
  //   function sayHello(firstName: string, lastname?: string): string {
  //     if (lastname) return `Hello ${firstName} ${lastname}`;
  //     return `Hello ${firstName} ${lastname}`;
  //   }
  //   // expect(sayHello("Rafi")).toBe("Hello Rafi");
  //   expect(sayHello("Rafi Akbar")).toBe("Hello Rafi Akbar");
  // });
  it("should support function overloading", () => {
    function square(value: number): number;
    function square(value: string): string;
    function square(value: any): any {
      if (typeof value === "number") return value * value;
      return value;
    }
    expect(square(3)).toBe(9);
    expect(square("3")).toBe("3");
  });
  it("should support  function as paramenet", () => {
    function sayHello(name: string, filter: (name: string) => string) {
      return `Hello ${filter(name)}`;
    }
    function toUpper(name: string) {
      return name.toUpperCase();
    }
    expect(sayHello("Rafi", toUpper)).toBe("Hello RAFI");
    expect(sayHello("Rafi", function (name: string): string {
      return name.toUpperCase();
    })).toBe("Hello RAFI");
    expect(sayHello("Rafi", (name: string): string => name.toUpperCase())).toBe("Hello RAFI");
  });
});
