
if (window.jQuery) {
   
} else {
    
    
console.log('Error: jQuery is not loaded');
}

function renderCheckoutTable() {
    const checkoutContainer = document.getElementById('checkout-container');
    let purchasedItems = JSON.parse(localStorage.getItem('purchasedItems')) || [];
    let subtotal = 0; 
    // Initializing subtotal

    if (checkoutContainer && purchasedItems.length > 0) {
        let tableHTML = `
            <table class="table-bordered">
                <tr>
                    <th>Item</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
        `;

        purchasedItems.forEach(item => {
            let itemTotal = item.quantity * item.price;
            subtotal += itemTotal; // Adding to subtotal
            tableHTML += `
                <tr>
                    <td >
                        <img src="${item.image}" " class="checkout-item-image">
                    </td>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                    <td>
                        <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-item-id="${item.id}">
                    </td>
                    <td>R ${item.price.toFixed(2)}</td>
                    <td class="item-total">R ${itemTotal.toFixed(2)}</td>
                    <td>
                        <button class="remove-item-btn" data-item-id="${item.id}">Remove</button>
                    </td>
                </tr>
            `;
        });

        // Adding the subtotal row at the end of the table
        tableHTML += `
            <tr>
                <td colspan="4" class="text-right"><strong>Subtotal:</strong></td>
                <td><strong>R ${subtotal.toFixed(2)}</strong></td>
                </tr>
                `;

        tableHTML += `</table>`;
          // Add a checkout button below the table
          tableHTML += `
          <div class="checkout-button-container">
          <button id="checkout-button1" class="btn5">Proceed to Checkout</button>
          <td colspan="6" class="text-center">
         <button id="continue-shopping" class="btn">Continue Shopping</button>
     </td>
          </div>
      `;

      checkoutContainer.innerHTML = tableHTML;

      // Attaching event listeners to quantity inputs, remove buttons, and checkout button
      attachEventListeners();

      document.getElementById('continue-shopping').addEventListener('click', function() {
        window.location.href = './product.html'; 
    });
    
    // Attaching event listener to the checkout button
    document.getElementById('checkout-button1').addEventListener('click', function() {
        window.location.href = './payments.html'; 
    });
  } else {
      checkoutContainer.innerHTML = 'Your cart is empty.';
  }
}



// Function to attach event listeners to quantity input fields and remove buttons
function attachEventListeners() {
    const quantityInputs = document.querySelectorAll('.quantity-input');
    quantityInputs.forEach(input => {
        input.addEventListener('change', event => {
            updateQuantity(event.target.dataset.itemId, parseInt(event.target.value));
        });
    });

    const removeButtons = document.querySelectorAll('.remove-item-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', event => {
            removeItem(parseInt(event.target.dataset.itemId));
        });
    });
}

// Function to update the quantity of an item in the cart
function updateQuantity(itemId, newQuantity) {
    let purchasedItems = JSON.parse(localStorage.getItem('purchasedItems')) || [];
    const itemIndex = purchasedItems.findIndex(item => item.id === parseInt(itemId));
    
    // Check if the itemIndex is not -1 before proceeding
    if (itemIndex !== -1 && newQuantity >= 1) {
        purchasedItems[itemIndex].quantity = parseInt(newQuantity);
        localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
        renderCheckoutTable(); // Re-render the table to update the totals
    } else {
        console.error('Item with id ' + itemId + ' not found in purchasedItems.');
    }
}

// Function to remove an item from the cart
function removeItem(itemId) {
    let purchasedItems = JSON.parse(localStorage.getItem('purchasedItems')) || [];
    purchasedItems = purchasedItems.filter(item => item.id !== itemId);
    
    localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
    renderCheckoutTable(); // Re-render the table to reflect the removal
}
 

// Call the render function on page load
document.addEventListener('DOMContentLoaded', renderCheckoutTable);










































