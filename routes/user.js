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

    if (error) 
    return res.status(400).send(error.details[0].message);
  
    user = new User(req.body);

    let result = await user.save();
    delete result.password
    res.send(result);
    
  });


  module.exports=router;