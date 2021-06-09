const mongoose = require('mongoose')

dbURI="mongodb+srv://facebook1:facebook1@Cluster0.nepx6.mongodb.net/Facebook?retryWrites=true&w=majority"

const connectDB = () =>{
     mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true})
    .then((results)=>{
        console.log("connected to DB");
        })
        .catch((err)=>{
        console.log(err);
        });
}
module.exports = connectDB;