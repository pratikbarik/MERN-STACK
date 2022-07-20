const express = require('express');
const productroutes = require('./routes/product');
const app = express();
const port = 8080; 

app.use(express.json());
app.use(productroutes);

app.listen(port, () =>{
    console.log(`server started at port ${port}`);
})