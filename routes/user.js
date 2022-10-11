const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();

/* GET http://localhost:3000/users?email=<emailid> */

router.get("/",  async (req, res) => {
    const json = req.query
    const emailId=json.email

    const user = await User.find({email:emailId}).select("-password");

    if(user)
     return res.send(user);
    
    return res.status(404).send([]);
  });


router.post("/", async (req, res) => {
    const { error } = validate(req.body);

    console.log(typeof(req.body));

    // if (error) 
    // return res.status(400).send(error.details[0].message);
  
    // let user = await User.findOne({ email: req.body.email });
    // if (user)
    //  return res.status(400).send("User already registered.");
  
    // user = new User(req.body);

    // const result = await user.save();
    // console.log(result);

    console.log("Hello World");

    console.log(req.body);

    res.send(req.body);
    
  });


  module.exports=router;