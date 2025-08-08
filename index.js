let express = require("express");
let mongooes = require("mongoose");
let enquirymodel = require("./APP/models/enquiry.model");
const { enquiryInsert, enquiryList, enquirydelete, enquiryUpdate } = require("./APP/controllers/Web/UserEnquiryController");
const enquiryRoutes = require("./APP/routes/Web/enquiryRoutes");
require("dotenv").config();

let app = express();
app.use(express.json());

app.use("/web/api/enquiry",enquiryRoutes)     //http://localhost:8000/web/api/enquiry/enquiry-insert


//Mongooes connection

mongooes.connect(process.env.DBURL).then(() => {
  console.log("Connected to MongoDB");
  app.listen(process.env.PORT, () => {
    console.log("Server is running on port" + process.env.PORT);
  });
});






//practices sheet

// let express = require("express");
// let mongooese = require("mongoose")
// let requirymodel = require("./models/enquiry.model");
// const enquirymodel = require("./models/enquiry.model");
// require("dotenv").config();

// let app = express();

// app.use(express.json())

// app.post("/api-insert",(req,res)=>{                    //Data Insert API
//     let {sName,sEmail,sPhone,sMessage} = req.body;
//     let enquiry = new enquirymodel({
//         name:sName,
//         email:sEmail,
//         phone:sPhone,
//         message:sMessage
//     });
//     enquiry.save().then(()=>{
//         res.send({status:1,msg:"Enquiry saved successfuly"})
//     }).catch((err)=>{
//         res.send({status:0,msg:"Error while saving enquiry",err})
//     })
// });

// app.get("/api-read", async (req,res)=>{                   //Data Show/Read API
//     let enquirydata = await enquirymodel.find()
//     res.send({
//         status:1,
//         msg:"This is enquiry data",
//         data:enquirydata
//     });
// })

// app.delete("/api-delete/:id", async (req,res)=>{                       //Delete API
//     let enquiryid = req.params.id;
//     let deleteresult = await enquirymodel.deleteOne({_id:enquiryid})
//     res.send({
//         status:1,
//         msg:"enquiry item delete",
//         id:enquiryid,
//         data:deleteresult
//     });
// })

// app.put("/api-update/:id", async (req,res)=>{
//     let enquiryid = req.params.id;
//     let {sName,sEmail,sPhone,sMessage} = req.body;
//     let updobj= {
//         name:sName,
//         email:sEmail,
//         phone:sPhone,
//         message:sMessage
//     }
//     let updateresult = await enquirymodel.updateOne({_id:enquiryid},updobj)
//     res.send({
//         status:1,
//         msg:"Data updated successfuly",
//         id:enquiryid,
//         data:updateresult
//     })
// })

// mongooese.connect(process.env.DBURL).then(()=>{
//     console.log("Connect to mongodb")
// })
// app.listen(process.env.PORT,()=>{
//     console.log("server is running this port",+process.env.PORT)
// })
