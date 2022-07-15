const fs=require('fs');

exports.total=()=>{
    let itemArr=JSON.parse(fs.readFileSync("cart.json")); 
    let total=0;
    
    itemArr.forEach((value)=>
        {
             
             total+=(Number(value.price)*Number(value.quantity));
        }) 
          return total;        //console.log(`Total price ${total}`);      
        

}