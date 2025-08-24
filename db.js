const express = require('express');
const app = express();
const server = require('./server');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();
const PORT =process.env.PORT || 3000;
const person = require('./../models/person')
const logRequest = (req,res,next)=>{
 console.log(`${new Date().toLocaleString()}`);
 next();
}
app.use(logRequest);
app.get('/',(req,res)=>{
    res.send('WELCOME TO BACKEND');
})
// const personRoutes = require('./router/personRoute');
app.get('/person',async (req,res)=>{
   const data = await person.find();
   console.log("data fetched")
   res.json(data);
})
// app.use('/person',personRoutes);

app.listen(PORT,()=>{
    console.log("LISTENING ON PORT 3000");
    
});