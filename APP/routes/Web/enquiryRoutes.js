let express = require("express");
const { enquiryInsert, enquiryList, enquirydelete, enquiryUpdate } = require("../../controllers/Web/UserEnquiryController");
let enquiryRoutes = express.Router();


//Insert data API
enquiryRoutes.post("/enquiry-insert",enquiryInsert)



//Show Data API
enquiryRoutes.get("/enquiry-list",enquiryList );



//Delete Data API
enquiryRoutes.delete("/enquiry-delete/:id",enquirydelete);



//Update Data API
enquiryRoutes.put("/enquiry-update/:id",enquiryUpdate );


module.exports=enquiryRoutes;


