const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifytoken");
const cryptojs = require("crypto-js");
const twilio = require("twilio");

// Your Twilio account SID and auth token
const accountSid = "ACba4b713ac18bb26942093f1b5fcb711a";
const authToken = "fabc66248b40e353ce5ed4a5240764b2";
const client = new twilio(accountSid, authToken);
const router = require("express").Router();

//create product
router.post("/",  async (req, res) => {
    const newProduct = new Product(req.body);
    try{
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);

    }
    catch(err){ 
    console.log(err)
    res.status(500).json(err);
    }

})
//update the product
const nodemailer = require("nodemailer");

router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    // Check if the status is set to "completed"
    if (req.body.status === "completed") {
      // Create a transporter for sending emails
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "priyankaar25@gmail.com",
          pass: "xyqj ifjp oqph jemj",
        },
      });
    
      // Define the email options
      const mailOptions = {
        from: "priyankaar25@gmail.com",
        to: "priyankaa.250303@gmail.com",
        subject: `${req.body.taskname} Task Completed Successfully`,
        text: `Your task ${req.body.taskname} dated ${req.body.date} has been completed successfully.`,
      }

      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    }
    // Send a WhatsApp message
      client.messages
        .create({
          body: `Your task ${req.body.taskname} dated ${req.body.date} has been completed successfully.`,
          from: "whatsapp:+14155238886", // Your Twilio number
          to: "whatsapp:+919967331856", // Your phone number
        })
        .then((message) => console.log(message.sid, "message sent"))
        .catch((err) => console.error(err));
    
    

    res.status(200).json(updatedProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete the product
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;

//get the products
router.get("/:id",  async (req, res) => {
  try {
    const product = await Product.find({id:req.params.id});
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all products
router.get("/",  async (req, res) => {

  try {
    let products;
   
        products = await Product.find();
  
 
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});
