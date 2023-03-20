const express = require ('express');
const path = require('path');
const port =8000;
const app = express();
app.set('veiw engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.get('/',function(req,res){
    console.log(req);
    return res.render('index.ejs');
    
});
app.get('/profile',function(req,res){
    console.log(req);
    res.send('<h1>This is profile dude!</h1>');
})







app.listen(port,function(err){
    if(err){
         console.log('error in running the server.')
         return ;
    }
    console.log("Yup! My server is up and running on port", port);


})