const express=require('express');
const fs=require('fs');
const total=require('./total');
const app=express();
const port=7000;

app.get('/',(req,res)=>{  
   
   
  const contentoffile=JSON.parse(fs.readFileSync("cart.json"));

    res.status(200).json({                                 
        message:"retrived data successfully",
        data:contentoffile,
        total_price:total.total()

    })

 })
 
 app.get('/:id',(req,res)=>{  
        
    id=req.params.id;
    const contentoffile=JSON.parse(fs.readFileSync("cart.json"));
    const matched=contentoffile.filter(item=>item.id==id);

    res.status(200).json({                                   
        message:"retrived data successfully",
        data:matched

    })


 })


app.listen(port,()=>{
console.log(`server started at port  ${port}`);
})