import { SheepField, sortSheepFields } from "../src/utils/sortSheepFields";

test("Calculate the sheep in three fields", () => {
  const sheepFields: SheepField[] = [
    { name: "first", quantity: 1 },
    { name: "second", quantity: 2 },
    { name: "third", quantity: 3 },
  ];

  const sortedSheepFields = sortSheepFields(sheepFields);
  expect(sortedSheepFields[0].quantity).toBe(3);
  expect(sortedSheepFields[2].quantity).toBe(1);
});

export {};
