const enquirymodel = require("../../models/enquiry.model");

let enquiryInsert =  (req, res) => {                          //Insert Data API
  let { sName, sEmail, sPhone, sMessage } = req.body;
  let enquiry = new enquirymodel({
    name: sName,
    email: sEmail,
    phone: sPhone,
    message: sMessage,
  });
  enquiry
    .save()
    .then(() => {
      res.send({ status: 1, msg: "Enquiry saved successfuly" });
    })
    .catch((err) => {
      res.send({ status: 0, Msg: "Error while saving enquiry", erroe: err });
    });
};


let enquiryList = async (req, res) => {                      //Show/Read Data API 
  let enquirydata = await enquirymodel.find();
  res.send({
    status: 1,
    msg: "Enquiry Data",
    data: enquirydata,
  });
}


let enquirydelete = async (req, res) => {                                       //Delete Data API
  try {
    let enquiryid = req.params.id;
    let deleteResult = await enquirymodel.deleteOne({ _id: enquiryid });
    res.send({
      status: 1,
      msg: "Enquiry Deleted successful",
      id: enquiryid,
      delres: deleteResult,
    });
  } catch (err) {
    res
      .status(500)
      .send({ status: 0, msg: "Error deleting enquiry", error: err });
  }
}


let enquiryUpdate = async (req, res) => {                              //Update Data API
  try {
    let enquiryid = req.params.id;
    let { sName, sEmail, sPhone, sMessage } = req.body;
    let updobj = {
      name: sName,
      email: sEmail,
      phone: sPhone,
      message: sMessage,
    };
    let updres = await enquirymodel.updateOne({ _id: enquiryid }, updobj);
    res.send({
      status: 1,
      msg: "Enquiry Update successful",
      id: enquiryid,
    });
  } catch (err) {
    res.send({
      status: 0,
      msg: "Error deleting query",
      error: err,
    });
  }
}

module.exports={enquiryInsert,enquiryList,enquirydelete,enquiryUpdate}