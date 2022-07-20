const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const {Item} =  require('../item.js'); 
const { uuid }= require('uuidv4');  

router.get('/',(req,res)=>{
    try{
        //console.log(__dirname);
        const files = fs.readdirSync(path.resolve(__dirname, '..'));
        //console.log(files);
        let product= [];
        let message='';
        if(files.includes('product.json'))
            product = JSON.parse(fs.readFileSync('product.json'));
        //console.log(product);
        if(product.length > 0 )
            message = 'Product items fetched successfully';
        else
            message = 'No product item found';
        return res.status(200).json({
            message: message,
            product
        })
    }
    catch(err){
        return res.status(500).json({
            message: 'Something went wrong...',
            error: err.message
        })
    }
})
router.post('/addItem', (req, res)=>{
    try{
        const files = fs.readdirSync(__dirname);
        //console.log(req.body);
        let product= [];
        let message='';
        let error='';
        if(files.includes('product.json'))
            product = JSON.parse(fs.readFileSync('product.json'));
        const {product_name, product_price, product_desc, product_img} = req.body;
        if(product_name=='' && error == ''){
            error= 'No product name found!'
            res.status(400).json({
                message: error
            })
        }
        if(product_price=='' && error == ''){
            error= 'Product price not found!'
            res.status(400).json({
                message: error
            })
        }
        if(product_desc=='' && error == ''){
            error= 'No product description found!'
            res.status(400).json({ 
                message: error
            })
        }
        if(product_img=='' && error == ''){
            error= 'No product image found!'
            res.status(400).json({
                message: error
            })
        }
        const item = new Item(uuid(), product_name, product_price, product_desc, product_img);
        product = [...product, item];
        fs.writeFile('product.json',JSON.stringify(product),(err)=>{
            if(err)
                res.status(500).json({
                    message: 'Something went wrong while writing files',
                    error: err.message
                })
            else
                res.status(200).json({
                    message: 'Item added successfully',
                    product
                })
        })
    }
    catch(err){
        return res.status(500).json({
            message: 'Something went wrong...',
            error: err.message
        })
    }
})
router.delete('/deleteItem/:product_name', (req, res)=>{
    try
    {
        const files = fs.readdirSync(__dirname);
        //console.log(req.body);
        const product_name=req.params.product_name;
        let product= [];
        let message='';
        if(files.includes('product.json'))
            product = JSON.parse(fs.readFileSync('product.json'));
        product=product.filter(item=>item.product_name!=product_name);
        fs.writeFile('product.json',JSON.stringify(product),(err)=>{
            if(err)
                res.status(500).json({
                    message: 'Something went wrong while writing files',
                    error: err.message
                })
            else
                res.status(200).json({
                    message: 'Item deleted successfully',
                    product
                })
        })
    }
    catch{
        return res.status(500).json({
            message: 'Something went wrong...',
            error: err.message
        })
    }
})
router.put('/updateItem/:id',(req, res)=>{
    try{
        const {id}=req.params;
        const { product_name, product_price, product_desc, product_img }=req.body;
        let product= [];
        let message='';
        const files = fs.readdirSync(__dirname);
        if(files.includes('product.json'))
            product = JSON.parse(fs.readFileSync('product.json'));
        product=product.filter(item=>item.id!=id);

        if(product_name=='' && error == ''){
                error= 'No product name found!'
                res.status(400).json({
                    message: error
                })
            }
            if(product_price=='' && error == ''){
                error= 'Product price not found!'
                res.status(400).json({
                    message: error
                })
            }
            if(product_desc=='' && error == ''){
                error= 'No product description found!'
                res.status(400).json({ 
                    message: error
                })
            }
            if(product_img=='' && error == ''){
                error= 'No product image found!'
                res.status(400).json({
                    message: error
                })
            }
            const item = new Item(id, product_name, product_price, product_desc, product_img);
            product = [...product, item];
            fs.writeFile('product.json',JSON.stringify(product),(err)=>{
                if(err)
                    res.status(500).json({
                        message: 'Something went wrong while writing files',
                        error: err.message
                    })
                else
                    res.status(200).json({
                        message: 'Product updated successfully',
                        product
                    })
            })
        }

    catch(err){
        return res.status(500).json({
            message: 'Something went wrong...',
            error: err.message
        })
    }
})
module.exports=router;