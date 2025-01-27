import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
import { Seller } from "../src/seller";

describe("Interface", () => {
  it("Should support interface", () => {
    const seller: Seller = {
      id: 1,
      name: "Rafi",
      address: "Jl. Raya",
      nib: "1234567890",
      npwp: "0987654321",
    };
    console.info(seller);
  });

  it("should support function interface", () => {
    interface AddFunction {
      (a: number, b: number): number;
    }
    const add: AddFunction = (a: number, b: number): number => a + b;

    expect(add(1, 2)).toBe(3);
  });

  it("should support indexable interface", () => {
    interface StringArray {
      [index: number]: string;
    }
    const names: StringArray = ["Rafi", "Rafli", "Rafael"];
    console.info(names);
  });

  it("should support indexable for non number index", () => {
    interface Dictionary {
      [key: string]: string;
    }
    const dictionary: Dictionary = {
      name: "Rafi",
      address: "Jl. Raya",
    };
    expect(dictionary.name).toBe("Rafi");
    expect(dictionary.address).toBe("Jl. Raya");
    console.info(dictionary);
  });
  it("should support extending interface", () => {
    const employee: Employee = {
      id: "1",
      name: "Rafi",
      division: "IT",
    };
    console.info(employee);

    const manager: Manager = {
      id: "2",
      name: "Akbar",
      division: "IT",
      numberOfEmployees: 10,
    };
    console.info(manager);
  });

  it("should support function in interface", () => {
    const person: Person = {
      name: "Rafi",
      sayHello: (name: string): string => {
        return `Hello ${name}, my names is ${person.name}`;
      },
    };

    console.info(person.sayHello("Akbar"));
  });
  it("should support intersection types", () => {
    interface HasName {
      name: string;
    }
    interface HasID {
      id: string;
    }
    type Domain = HasName & HasID;

    const domain: Domain = {
      id: "1",
      name: "Rafi",
    };
    console.info(domain);
  });
  it("should support type assertion", () => {
    const person: any = {
      name: "Rafi",
      age: 20,
    };
    const person2: Person = person as Person;
    console.info(person2);
  });
});
