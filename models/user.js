const config = require("config");
// const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/Project')  
   .then(()=>console.log('Connected to MongoDB'))
   .catch(err=>console.log('Could not connect to MongoDB..',err));

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  mobile: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  }
});

// userSchema.methods.generateAuthToken = function() {
//   const token = jwt.sign(
//     {
//       _id: this._id,
//       name: this.name,
//       email: this.email,
//       isAdmin: this.isAdmin
//     },
//     config.get("jwtPrivateKey")
//   );
//   return token;
// };

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = {
    email: Joi.string()
    .min(5)
    .max(255)
    .required()
    .email(),
    name: Joi.string()
      .min(2)
      .max(50)
      .required(),
    mobile: Joi.number()
    .min(10)
    .max(10),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };

  return Joi.validate(user, schema);
}



exports.User = User;
exports.validate = validateUser;
