// update the list
const prompt=require('prompt-sync')()
const fs=require('fs')
function Item( id, name, quantity, price){
    this.id=id;
    this.name=name;
    this.quantity=quantity;
    this.price=price;
}
exports.updateItem=(id)=>{
    let itemArr=JSON.parse(fs.readFileSync("shoppingList.json"))
    console.log(`\nList created:-\n ${JSON.stringify(itemArr)}\n`)
    itemArr=itemArr.filter(item=>item.id!=id)
    console.log(`\nEnter the item id which you want to update ${id}`)
    const name= prompt(`Enter the item name:- `)
    const quantity= prompt(`Enter the item quantity:- `)
    const price= prompt(`Enter the item price:- Rs.`)
    const itemList= new Item(id,name,quantity,price)
    itemArr=[...itemArr,itemList]
    console.log(`\nNew List created:-\n ${JSON.stringify(itemArr)}\n`)
    fs.writeFile("shoppingList.json",JSON.stringify(itemArr),(err)=>{
        if(err){
            console.log("ERROR!!!")
        }
        else{
            console.log(`Item with ${id} listed successfully!!!`)
        }
    })


}