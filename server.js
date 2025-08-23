const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/mydata'

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const server = mongoose.connection;

server.on('connected',()=>{
    console.log("server connected");
    
})

module.exports = server;