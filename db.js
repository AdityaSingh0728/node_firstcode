const express = require('express');
const app = express();
const server = require('./server');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();
const PORT =process.env.PORT || 3000;

const logRequest = (req,res,next)=>{
 console.log(`${new Date().toLocaleString()}`);
 next();
}
app.use(logRequest);
app.get('/',(req,res)=>{
    res.send('WELCOME TO BACKEND');
})
const personRoutes = require('./router/personRoute');

app.use('/person',personRoutes);

app.listen(PORT,()=>{
    console.log("LISTENING ON PORT 3000");
    
});