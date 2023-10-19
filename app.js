const express = require('express');
const path = require('path');
const adminRoutes= require('./Routes/admin')

const shoprouter= require('./Routes/shop')

const bodyParser = require('body-parser');
const menubar = require('./Routes/manu')
const contactus=require('./Routes/contact')



const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,"public")))

app.use( '/admin', adminRoutes);
app.use(shoprouter);
app.use(menubar);
app.use(contactus)


app.use((req,res,next)=>{

  res.status(404).sendFile(path.join(__dirname,"views","404.html"));

});



app.listen(3000);
