const express = require ('express');
const fs = require('fs')
const path = require('path');
const port =8000;
const db = require('./config/mongoose')
const contact = require('./models/contact');
const Contact = require('./models/contact');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static('assets'))
// middleware:1:
// app.use((req,res,next)=>{
//     console.log('middle ware 1 is  called in here')
//     next(); 
// })
// // middleware 2
// app.use((req,res,next)=>{
//     console.log('middleware2 is called.');
//     next();
// })

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


var contactList=[{
        name:'Emergency',
        phone:911
    }

]
app.get('/',function(req,res){
    console.log(req);
    return res.render('index',{
        title:'My Contacts',
        contact_List:contactList
    })
    
});
app.get('/profile',function(req,res){
    console.log(req);
    res.send('<h1>This is profile dude!</h1>');
})
app.get('/playground',function(req,res){
    return res.render('playground',{title:'Playground'});
})
app.post('/create-contact',function(req,res){
//     contactList.push(
//         {
//             name:req.body.name,
//             phone:req.body.phone
            
//         }
//     )

//      return res.redirect('back');

    
     
// })
// database creation of contacts
Contact.create({
    name: req.body.name,
    phone:req.body.phone
}).then((contact)=>{console.log("The contact has been created successfuly",contact)}).catch((err)=>{
    console.log("The contact creation encountered an error"); 
})
});


app.get('/delete-contact/',(req,res)=>{
    console.log(req.query);
    let phone =req.query.phone;
    let contactIndex=contactList.findIndex(contact=>contact.phone==phone); 
    if(contactIndex!=-1){
        contactList.splice(contactIndex,1); 
    }
    return res.redirect('back');

})







app.listen(port,function(err){
    if(err){
         console.log('error in running the server.')
         return ;
    }
    console.log("Yup! My server is up and running on port", port);
    return;

})
