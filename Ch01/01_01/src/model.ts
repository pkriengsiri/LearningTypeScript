let displayName: string = "Pete's chair";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123456";
let createDate: Date = new Date();
let originalCost: number = 425;

function getInventoryItem(trackingNumber: string): {
    displayName: string;
    inventoryType: string;
    trackingNumber: string;
    createDate: Date;
    originalCost: number;
} {
    return null;
}

function saveInventoryItem(item) {

}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);