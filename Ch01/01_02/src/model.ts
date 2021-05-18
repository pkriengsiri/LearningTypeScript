let displayName = "Jess's standing desk";
let inventoryType = "furniture";
let trackingNumber = "FD123455";
let createDate = new Date();
// use the union operator to specify union types (multiple types)
// let originalCost: number | string = 425;
// or create a type
type Cost = number | string;
let originalCost: Cost = 425;

enum InventoryItemType {
    Computer = "computer",
    Furniture = "furniture"
}

interface InventoryItem {
  displayName: string;
  // literal types can be defined to specify the values
  inventoryType: "computer" | "furniture";
  // readonly ensures that this property can't be changed after it's defined
  readonly trackingNumber: string;
  createDate: Date;
  // the question mark specifies that the property (or method) is optional
  originalCost?: number;

  addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem): void {}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);
