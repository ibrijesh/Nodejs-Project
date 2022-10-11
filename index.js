const express = require("express");
const config = require("config");
const users = require('./routes/user');
const {User} = require('./models/user')
const app = express();

app.use(express.json());


async function registerUser(){

    const user = new User({
        email:'brijeshyadavjthj2@gmail.com',
        name:'Brijesh Yadav',
        mobile:1234567893,
        password:"ronaldo"
    });


    const result = await user.save();
    console.log(result);
}

//registerUser();


app.use('/api/users',users);


const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
 console.log(`Listening on port ${port}...`)
);