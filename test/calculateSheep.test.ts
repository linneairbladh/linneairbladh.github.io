import { calculateSheep, SheepField } from "../src/utils/calculateSheep";

test("Calculate the sheep in three fields", () => {
  const sheepFields: SheepField[] = [
    { name: "first", quantity: 1 },
    { name: "second", quantity: 2 },
    { name: "third", quantity: 3 },
  ];

  expect(calculateSheep(sheepFields)).toBe(6);
});

export {};
