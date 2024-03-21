const express = require('express');
const dotenv = require('dotenv');
const { chats }= require('./data/data');
const connectDB = require('./config/db');
const userRoutes = require('./Routes/userRoutes')
const app = express();
dotenv.config()
connectDB()
app.get('/',(req,res)=>{
    res.send(" Hello!this is mohit mahmud ")
})


app.use('/api/user',userRoutes)


const POST =process.env.POST || 5000;

app.listen(POST, 
    console.log(`server started on Post ${POST}`)
    );