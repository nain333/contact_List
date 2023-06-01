const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contact_list_db');
const db = mongoose.connection;
// eroor
db.on('error', console.error.bind(console,"An error has occured while connecting to the db"));
// on Connection
db.once('open',()=>{
    console.log("Connected Successfully to db");
})