function CreateItem(id, name, category, image, description, quantity, price){
    this.id = id
    this.name = name
    this.category = category
    this.image = image
    this.description = description
    this.quantity = quantity
    this.price = price
}

let item1 = new CreateItem(1, 'Black 2 piece gym wear', 'Gym clothing', 'https://github.com/Nikilitha26/hostedImagesEndOfModule/blob/main/1992af59880909f03062f9559596628f.jpg?raw=true','The most comfortable and stylish gymwear you can ever find, it is long sleeve with long pants protecting you from transfering the sweat.', 1, 500.00)

let item2 = new CreateItem(2, 'Pink 2 piece skirt gymwear','Gym clothing' ,'https://i.postimg.cc/wxDp3R8y/Screenshot-2024-06-05-123151.png', 'The best skirt gymwear, a 2 piece where you can put your phone in.', 1, 450.00)

let item3 = new CreateItem(3, 'Blue Gymwear Jumpsuit', 'Gym clothing', 'https://i.postimg.cc/j28HXdwp/Screenshot-2024-06-05-131305.png', 'The most comfortable gym jumpsuit and supper fashionable since it is in the latest trend list',1, 400.00 )
 
let item4 = new CreateItem(4, 'Pink and Black waist trainer', 'Gym Essentals', 'https://github.com/Nikilitha26/hostedImagesEndOfModule/blob/main/Screenshot_2024-06-11_081509-removebg-preview.png?raw=true', 'The best waist trainer fast waist slim.',1,  200.00  )

let item5 = new CreateItem(5, 'Intelligent Touch Temperature Display Cup,', 'Gym Essentials' ,'https://raw.githubusercontent.com/Nikilitha26/hostedImagesEndOfModule/9fad3bca20e8a8414ba5b8aedad822701bead59b/Screenshot%202024-06-11%20172552.png', 'Perfect For Outdoor Activities, Travel, And Fitness. You can keep track of the temperature easily and it a rechargeable bottle, very mordern.', 1, 480.00  )

let item6 = new CreateItem(6, 'Black waterproof sport bag', 'Gym Essentials','https://raw.githubusercontent.com/Nikilitha26/hostedImagesEndOfModule/9fad3bca20e8a8414ba5b8aedad822701bead59b/Screenshot%202024-06-11%20172736.png', 'The best carry bag for gym, everything fits', 1, 500.00  )

let items = [item1, item2, item3, item4, item5, item6]

localStorage.setItem('items', JSON.stringify(items))
let purchasedItems = []



let main = document.querySelector('main')
items.forEach(item =>{
    main.innerHTML +=   `
                        <div id="main-div">
                        <img src="${item.image}">
                        
                        <p>R ${item.price}</p>
                        </div>
                        `;
});