
let blah = localStorage.getItem('items')
let purchasedItems = JSON.parse(localStorage.getItem('items')) || [];


function displayItems() {
    const table = document.querySelector("table tbody");
    if (!table) {
        console.error("Table element not found. Check your HTML structure.");
        return;
    }

    table.innerHTML = ""; // Clear previous content

    allItems.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${item.image}" class="checkout-item-image"></td>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>R ${item.price.toFixed(2)}</td>
            <td>
                <button class="edit-item-btn" data-item-index="${index}">Edit</button>
                <button class="remove-item-btn" data-item-index="${index}">Remove</button>
            </td>
        `;
        table.appendChild(row);
    });
}

function addProduct() {
    // Get input values from the modal
    const image = document.getElementById("image").value;
    const name = document.getElementById("username").value;
    const description = document.getElementById("description").value;
    const price = parseFloat(document.getElementById("price").value);

    // Create a new item and add it to the array
    const newItem = new CreateItem(allItems.length + 1, name, "Gym Essentials", image, description, 1, price);
    allItems.push(newItem);

    // Close the add modal
    closeAddModal();

    // Update the table display
    displayItems();
}

// Function to clear input fields in the add modal
function clearInputs() {
    document.getElementById("image").value = "";
    document.getElementById("username").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
}

// Event listener for "Add item" button clicks
document.getElementById("addProductButton").addEventListener("click", function () {
    addProduct();
});

// Event listener for "Clear Inputs" button clicks
document.getElementById("clearInputsButton").addEventListener("click", function () {
    clearInputs();
});





// Call the function to display items (you can trigger this based on your application logic)
displayItems();


