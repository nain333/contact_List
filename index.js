const express = require ('express');
const path = require('path');
const port =8000;
const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
var contactList=[{
        name:'Himanshu',
        phone:1111111111,
    },
    {
        name:'Google',
        phone:222222222,
    },
    {
        name:'faceBook',
        phone:3333333333
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
    return res.redirect('/playground');
})







app.listen(port,function(err){
    if(err){
         console.log('error in running the server.')
         return ;
    }
    console.log("Yup! My server is up and running on port", port);


})