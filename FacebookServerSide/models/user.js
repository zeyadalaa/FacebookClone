const mongoose = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName:{
        type: String,
        required :true
    },
    lastName:{
        type: String,
        required :true
    },
    email:{
        type: String,
        required :true
    },
    password:{
        type:String,
        required :true
    },
    dob:{
        type: String,
        required :true
    }

  /*  img:{
        data:Buffer,
        contentType:String
    }
*/
},{timestamps:true});

const User = mongoose.model("Users", userSchema);
module.exports = User;
