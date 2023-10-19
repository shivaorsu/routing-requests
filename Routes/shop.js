const express= require('express');

const path = require('path');

const router= express.Router();
 const pathDir = require('../util/path')

router.get('/', (req, res, next) => {
    res.sendFile(path.join(pathDir,"views","shop.html"));
  });


module.exports= router