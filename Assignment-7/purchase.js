const prompt=require('prompt-sync')()
const fs = require('fs')
function item( id, name, quantity, price){
    this.id=id;
    this.name=name;
    this.quantity=quantity;
    this.price=price;
}

exports.addItem=()=>{
    const no_of_items= prompt(`Enter the no of items you want to buy:-  `)
    let itemArr=[]
    for(let i=0;i<no_of_items;i++){
        const id= prompt(`Enter the item id:- `)
        const name= prompt(`Enter the item name:- `)
        const quantity= prompt(`Enter the item quantity:- `)
        const price= prompt(`Enter the item price:- Rs.`)
        const list= new item(id,name,quantity,price)
        itemArr=[...itemArr,list]
    }
    fs.writeFile("shoppingList.json",JSON.stringify(itemArr),(err)=>{
        if(err){
            console.log("ERROR!!!")
        }
        else{
            console.log('Item(s) listed successfully!!!')
        }
    })
}