describe("Array", () => {
  it("should same with javascript", () => {
    const name: string[] = ["Rafi", "Akbar"];
    const age: number[] = [20, 21];
    expect(name).toEqual(["Rafi", "Akbar"]);
    expect(age).toEqual([20, 21]);

    console.info(name, age);
  });
  it("should support readonly array", () => {
    const hobbies: ReadonlyArray<string> = ["Makan", "Tidur"];
    expect(hobbies).toEqual(["Makan", "Tidur"]);
    console.info(hobbies[0]);
  });
  it("should support tuple", () => {
    const person: readonly [string, number] = ["Rafi", 20];
    expect(person).toEqual(["Rafi", 20]);
    console.info(person);
  });
});
