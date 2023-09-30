const express = require('express');

const adminRoutes= require('./Routes/admin')

const shoprouter= require('./Routes/shop')

const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use( '/admin', adminRoutes);
app.use(shoprouter);


app.use((req,res,next)=>{

  res.status(404).send("<h1>Page Not fount</h1>");

});



app.listen(3000);
