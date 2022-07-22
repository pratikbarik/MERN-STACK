const express=require('express');
const fs=require('fs');


const {Product}=require('../models/Product');


const router=express.Router()

//LIST
router.get('/product',async (req,res)=>{
    try{
   
    const products=await Product.find();
    return res.status(200).json({
        message:"products retrieved successfully",
        products
    })


    }catch(err){
        return res.status(500).json({
            message:"something went wrong",
            error:err.message

        })
        
    }
}
)
//ADD OR CREATE
router.post("/product",async (req,res)=>{
    try{
        

          
        const { product_name,product_price,product_description,product_image} = req.body
        let error='';
        
        if(product_name=='' && error == ''){
            error = "Missing product Name"
            return res.status(400).json({
                message: error
            })
        }
        if(product_price=='' && error == ''){
            error = "Missing product Price"
           return  res.status(400).json({
                message: error
            })
        }
         const productObj={
            product_name:product_name,
            product_price:product_price,
            product_description:product_description,
            product_image:product_image
         }
        

         const product=new Product(productObj);
        
        await product.save();
        res.status(200).json({
            message:"product saved successfully"
        })
        
    }catch(err){
        res.status(500).json({
            message : "Something went wrong",
            error : err.message
        })
    }
})



//UPDATE 
router.put("/product/:id",async (req,res)=>{
    try{
    const id=req.params.id;
    const { product_name,product_price,product_description,product_image} = req.body


    //update by findByIdAndUpdate
    // await Product.findByIdAndUpdate(id,{ product_name,product_price,product_description,product_image})
    // return res.status(200).json({
    //     message:"product updated successfully"
    // }) 

    //update by findById
    const product= await Product.findById(id);
    product.product_name=product_name;
    product.product_price=product_price;
    product.product_description=product_description;
    product.product_image=product_image;
    await product.save(); 
    return  res.status(200).json({ 
        message:"product updated successfully"
    })


    }catch(err){
        return res.status(500).json({
            message:"something went wrong",
            error:err.message
        }) 
    }
})
//DELETE
router.delete("/product/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        await Product.findByIdAndDelete(id);
        return res.status(200).json({ 
            message:"product deleted successfully"
        })
    }catch(err){
        return res.status(500).json({
            message:"something went wrong",
            error:err.message
        }) 
    }
})
module.exports=router