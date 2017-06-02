var express = require("express");
var app = express();

var port = process.env.PORT;

app.use(express.static('public'));
// app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.set('views','./src/views');
app.set('view engine','ejs');

app.get('/',(req,res)=>{
//   res.send('Hello World'); 
res.render('index',{list:['1st val','2nd val','3rd val'],
    nav:['services','portfolio','about','team','contact']
});
});

app.get('/routing',(req,res)=>{
   res.send('Hello World'); 
});


app.listen(port, ()=>{
    console.log('Express is up and running in port '+port);
});