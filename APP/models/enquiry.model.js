let mongooes = require("mongoose")
let userenquiryschema = mongooes.Schema({ 
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }

});

let enquirymodel =  mongooes.model("enquiry",userenquiryschema)
module.exports=enquirymodel



//practices code

// let mongooese = require("mongoose")              
// let userenquiryschema = mongooese.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     phone:{
//         type:String,
//         required:true
//     },
//     message:{
//         type:String,
//         required:true
//     }
// })

// let enquirymodel = mongooese.model("enquiry",userenquiryschema)
// module.exports=enquirymodel;