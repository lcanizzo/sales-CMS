// D E P E N D E N C I E S 
const express = require('express');
const router = express.Router();
const products = ('../models/products.js');

router.get('/', (req,res)=>{
    res.send('api working');
});

module.exports = router;


// see server/routes/api