export type SheepField = { name: string; quantity: number };

export function calculateSheep(sheepFields: SheepField[]): number {
  let sheep = 0;

  for (const sheepField of sheepFields) {
    sheep += sheepField.quantity;
  }

  //   sheepFields
  //     .map((sheepField) => sheepField.name + " " + sheepField.quantity)
  //     .join(",");
  //   sheepFields.sort((a, b) => a.quantity - b.quantity);

  return sheep;
}
