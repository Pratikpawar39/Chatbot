const express = require('express');
const dotenv = require('dotenv'); //loads environment variables from a .env file into process.env 
const {chats}  = require('./data');//import dummy data from data.js

const app = express();
dotenv.config(); // Storing configuration in the environment separate from code 


//express Js API 
app.get('/', (req,res) => {
    res.send('Api is runing')
})


//all dummy data show
app.get('/api/chat', (req, res) => {
    //send here Dummy data
    res.send(chats);
})

//select perticular data using "/:id" variable
app.get('/api/chat/:id', (req, res) => {
    //it gives a req object
    // console.log(req);

    //print id now
    // console.log(req.params.id);

    //this fetch singlechat data and match it to "Id" which is access in url "id" variable
    const singleChat = chats.find((c) => { 
        return c._id === req.params.id
    });
    console.log(singleChat);// print single data object 
    res.send(singleChat);
})

const PORT = process.env.PORT || 3000; //process.env now has the keys and values you defined in your .env file.

//listeing
app.listen(PORT, console.log(`Server Started at port ${PORT}`));