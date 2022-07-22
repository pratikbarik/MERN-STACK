const mongoose = require('mongoose');
exports.dbConn = ()=>{
    const dbURL = "mongodb+srv://pratikbarik:pratik16181@cluster0.3gvef.mongodb.net/Mern_data?retryWrites=true&w=majority"
mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>{
    console.log(`Database connected`)
 }).catch((err)=>console.log(err));
}