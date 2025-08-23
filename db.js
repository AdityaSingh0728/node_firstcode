const express = require('express');
const app = express();
const server = require('./server');
const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.get('/', (req,res)=>{
    res.send('WELCOME TO BACKEND');
})
const personRoutes = require('./router/personRoute');

app.use('/person',personRoutes)
app.listen(3000);