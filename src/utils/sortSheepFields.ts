export type SheepField = { name: string; quantity: number };

export function sortSheepFields(sheepFields: SheepField[]): SheepField[] {
  return sheepFields.sort((a, b) => b.quantity - a.quantity);
}
