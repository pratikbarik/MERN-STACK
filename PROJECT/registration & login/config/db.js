const mongoose = require('mongoose');
 
exports.dbConn = async ()=>{
    try{
        const dbURL = "mongodb+srv://pratikbarik:<pratik16181>@cluster0.3gvef.mongodb.net/?retryWrites=true&w=majority"; 
        await mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log('Database Connected');
    }
    catch(err){
        console.log(`Database connection error ${err.message}`);
    } 
}