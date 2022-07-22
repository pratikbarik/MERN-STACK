const express=require('express');
const {dbConn}=require('./config/db');
const productroutes=require('./routes/product');
const fs=require('fs');
const {uuid}=require('uuidv4');

const app=express();
 
const port=5000;

app.use(express.json());//middleware
app.use(productroutes);//

dbConn();
app.listen(port,()=>{
    console.log(`server started at port ${port}`);
}
)