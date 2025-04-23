let inventory = [
    { id: 1, name: "Product A", quantity: 10 },
    { id: 2, name: "Product B", quantity: 15 },
    { id: 3, name: "Product C", quantity: 20 }
];

function displayInventory() {
    const inventorySection = document.getElementById("inventory");
    inventorySection.innerHTML = "";

    inventory.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.innerHTML = <p>${item.name}: ${item.quantity}</p>;
        inventorySection.appendChild(itemElement);
    });
}

function addItem(event) {
    event.preventDefault();

    const itemName = document.getElementById("item-name").value;
    const itemQuantity = parseInt(document.getElementById("item-quantity").value);

    if (itemName && itemQuantity) {
        const newItem = {
            id: inventory.length + 1,
            name: itemName,
            quantity: itemQuantity
        };

        inventory.push(newItem);
        displayInventory();

        document.getElementById("item-name").value = "";
        document.getElementById("item-quantity").value = "";
    } else {
        alert("Please fill out both fields.");
    }
}

const addItemForm = document.getElementById("add-item-form");
addItemForm.addEventListener("submit", addItem);

displayInventory();