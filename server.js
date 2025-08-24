const mongoose = require('mongoose');

// const url = 'mongodb://127.0.0.1:27017/mydata'
// const url = 'mongodb+srv://adityasingh:aditya123@cluster0.rgfetpl.mongodb.net/'
const url = process.env.DB_URL;


mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const server = mongoose.connection;

server.on('connected',()=>{
    console.log("server connected");
    
})
module.exports = server;