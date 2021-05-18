var displayName = "Pete's chair";
var inventoryType = "furniture";
var trackingNumber = "FD123456";
var createDate = new Date();
var originalCost = 425;
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
}
var inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveInventoryItem(inventoryItem);
