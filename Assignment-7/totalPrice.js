const prompt=require('prompt-sync')()
const fs = require('fs');
const { addItem } = require('./purchase');
function item( id, name, quantity, price){
    this.id=id;
    this.name=name;
    this.quantity=quantity;
    this.price=price;
}

exports.totalPurchase=()=>{
    let itemArr=JSON.parse(fs.readFileSync("shoppingList.json"))
    console.log(`\nList created:-\n ${JSON.stringify(itemArr)}\n`)
    let totalPrice=0;
    for(let j=0;j<itemArr.length;j++){
        totalPrice+= parseFloat(itemArr[j].price)
    }
    console.log(`Total amount of purchase:- ${totalPrice}`)
}