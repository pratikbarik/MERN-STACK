// 1. create the item list and add the items
// 2. update the item quantity
// 3. remove the item from the list
// 4. the total price of all the items added to shopping cart

const {addItem}= require('./purchase')
const {updateItem}= require('./update')
const {removeItem}=require('./remove')
const {totalPurchase}=require('./totalPrice')

const prompt= require('prompt-sync')()
const operation= prompt(`Enter the option(add or update or remove or totalPrice) to be performed:- `)

switch(operation){
    case 'add':
        addItem()
        break;
    case 'update':
        const updateId= prompt(`Enter the item id to be updated:- `)
        updateItem(updateId)
        break;
    case 'remove':
        const removeId= prompt(`Enter the item id to be removed:- `)
        removeItem(removeId)
        break;
    case 'totalPrice':
        totalPurchase()
        break;
    default:
        console.log(`No operation is going to be performed `)
        break;
}