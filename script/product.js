function CreateItem(id, name, category, image, description, quantity, price){
    this.id = id
    this.name = name
    this.category = category
    this.image = image
    this.description = description
    this.quantity = quantity
    this.price = price

}

let item1 = new CreateItem(1, 'Black 2 piece gym wear', 'Gym Wear', 'https://github.com/Nikilitha26/hostedImagesEndOfModule/blob/main/Screenshot%202024-06-11%20173050.png?raw=true','The most comfortable and stylish gymwear you can ever find, it is long sleeve with long pants protecting you from transfering the sweat.', 1, 500.00)

let item2 = new CreateItem(2, 'Pink 2 piece skirt gymwear','Gym Wear' ,'https://raw.githubusercontent.com/Nikilitha26/hostedImagesEndOfModule/1cd522b4aa0e28f1e2eb2eaad01fc70d042c25be/Screenshot%202024-06-14%20100259.png', 'The best skirt gymwear, a 2 piece where there are thights in which you can put your phone in.', 1, 450.00)

let item3 = new CreateItem(3, 'Blue Gymwear Jumpsuit', 'Gym Wear', 'https://i.postimg.cc/j28HXdwp/Screenshot-2024-06-05-131305.png', 'The most comfortable gym jumpsuit and supper fashionable since it is in the latest trend list',1, 400.00 )
 
let item4 = new CreateItem(4, 'Blue 4 Piece Gym Wear', 'Gym Wear', 'https://raw.githubusercontent.com/Nikilitha26/hostedImagesEndOfModule/57ef3987bb74394dd4a2d440640c34cb85f7bab1/Screenshot%202024-06-14%20100748.png', 'The best waist trainer fast waist slim.',1,  800.00  )

let item5 = new CreateItem(5, 'Black Gym Jumpsuit', 'Gym Essentials' ,'https://raw.githubusercontent.com/Nikilitha26/hostedImagesEndOfModule/9fad3bca20e8a8414ba5b8aedad822701bead59b/Screenshot%202024-06-11%20172552.png', 'Perfect For Outdoor Activities, Travel, And Fitness. You can keep track of the temperature easily and it a rechargeable bottle, very mordern.', 1, 480.00  )

let item6 = new CreateItem(6, 'Black Gym Jacket', 'Gym Essentials','https://raw.githubusercontent.com/Nikilitha26/hostedImagesEndOfModule/9fad3bca20e8a8414ba5b8aedad822701bead59b/Screenshot%202024-06-11%20172736.png', 'The best carry bag for gym, everything fits', 1, 450.00  )

let item7 = new CreateItem(7, 'Black Intelligent Touch Temperature Display Cup,', 'Gym Essentials','https://github.com/Nikilitha26/hostedImagesEndOfModule/blob/main/Screenshot%202024-06-05%20133250.png?raw=true', 'The best carry bag for gym, everything fits', 1, 300.00  )

let item8 = new CreateItem(8, 'Blue Intelligent Touch Temperature Display Cup', 'Gym Essentials','https://github.com/Nikilitha26/hostedImagesEndOfModule/blob/main/Screenshot%202024-06-05%20132944.png?raw=true', 'The best carry bag for gym, everything fits', 1, 300.00  )

let item9 = new CreateItem(9, 'Pink Intelligent Touch Temperature Display Cup ', 'Gym Essentials','https://github.com/Nikilitha26/hostedImagesEndOfModule/blob/main/Screenshot%202024-06-05%20133153.png?raw=true', 'The best carry bag for gym, everything fits', 1, 300.00  )

let item10 = new CreateItem(10, 'Green Intelligent Touch Temperature Display Cup','Gym Essentials','https://github.com/Nikilitha26/hostedImagesEndOfModule/blob/main/Screenshot%202024-06-05%20133337.png?raw=true', 'The best carry bag for gym, everything fits', 1, 300.00  )

let item11 = new CreateItem(11, 'Black and Pink Waist Trainer ', 'Gym Essentials','https://github.com/Nikilitha26/hostedImagesEndOfModule/blob/main/Screenshot%202024-06-05%20132201.png?raw=true', 'The best carry bag for gym, everything fits', 1, 300.00  )

let item12 = new CreateItem(12, 'Purple Wrist Watch', 'Gym Essentials','https://github.com/Nikilitha26/hostedImagesEndOfModule/blob/main/Screenshot%202024-06-11%20082123.png?raw=true', 'The best carry bag for gym, everything fits', 1, 60.00  )

let item13 = new CreateItem(13, 'Black Wrist Watch ', 'Gym Essentials','https://github.com/Nikilitha26/hostedImagesEndOfModule/blob/main/Screenshot%202024-06-11%20082323.png?raw=true', 'The best carry bag for gym, everything fits', 1, 600.00  )

let item14= new CreateItem(14, 'Pink waterproof sport bag', 'Gym Bags','https://github.com/Nikilitha26/hostedImagesEndOfModule/blob/main/Screenshot%202024-06-05%20134611.png?raw=true', 'The best carry bag for gym, everything fits', 1, 400.00  )

let item15 = new CreateItem(15, 'Black waterproof sport bag', 'Gym Bags','https://github.com/Nikilitha26/hostedImagesEndOfModule/blob/main/Screenshot%202024-06-05%20135804.png?raw=true', 'The best carry bag for gym, everything fits', 1, 400.00  )

let item16 = new CreateItem(16, 'Blue waterproof sport bag', 'Gym Bags','https://github.com/Nikilitha26/hostedImagesEndOfModule/blob/main/Screenshot%202024-06-05%20135919.png?raw=true', 'The best carry bag for gym, everything fits', 1, 400.00  )

let items = [item1, item2, item3, item4, item5, item6, item7,item8, item9, item10, item11, item12, item13, item14, item15,item16,]

localStorage.setItem('items', JSON.stringify(items));
let purchasedItems = []

function addToCart(id) {
    console.log('Attempting to add item to cart with ID:', id);
    let itemToAdd = items.find(item => item.id === id);
    if (!itemToAdd) {
        console.error('Item not found!');
        return;
    }
    let existingItemIndex = purchasedItems.findIndex(item => item.id === itemToAdd.id);
    if (existingItemIndex !== -1) {
        // Item already in cart, update the quantity
        purchasedItems[existingItemIndex].quantity += 1;
    } else {
        // Item not in cart, add as new item
        purchasedItems.push(itemToAdd);
    }
    localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
    console.log(`Item ${id} added to cart!`);
}
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart-btn')) {
        let itemId = parseInt(event.target.getAttribute('data-item-id'));
        addToCart(itemId);
    }
});

function sortItems(items, criteria) {
    switch (criteria) {
        case 'price-high-to-low':
            return items.slice().sort((a, b) => b.price - a.price);
        case 'price-low-to-high':
            return items.slice().sort((a, b) => a.price - b.price);
        case 'alphabetical':
            return items.slice().sort((a, b) => a.name.localeCompare(b.name));
    
    }
}




items.forEach(item => {
    main.innerHTML += `

        <div id="main-div">
        
        <!-- Button trigger modal -->
        <button type="button" class="btn1" data-bs-toggle="modal" data-bs-target="#modal${item.id}">
            View Details
        </button>
         <button type="button" class="btn2 add-to-cart-btn" data-item-id="${item.id}">
                Add To Cart
            </button>
        <!-- Modal -->
        <div class="modal fade" id="modal${item.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel${item.id}" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel${item.id}">${item.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <img src="${item.image}" alt="${item.name}" class="item-image">
        <p>${item.description}</p>
        
        <p>Price: R ${item.price}</p>
        </div>
        </div>
        </div>
        </div>
        <img src="${item.image}" alt="${item.name}" class="item-image">
        <p>${item.name}</p>
        <p>R ${item.price}</p>
        </div>

     
    `;
});
function renderItems() {
    const itemsList = document.getElementById('items-list');
    itemsList.innerHTML = ''; // Clear existing items

    items.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');

        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.name;
        itemImage.classList.add('item-image');

        const itemDetails = document.createElement('div');
        itemDetails.classList.add('item-details');
        itemDetails.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: R ${item.price}</p>
            <!-- Add other details as needed -->
        `;

        itemContainer.appendChild(itemImage);
        itemContainer.appendChild(itemDetails);
        itemsList.appendChild(itemContainer);
    });
}

// Call the renderItems function to display the items
renderItems();





  




























