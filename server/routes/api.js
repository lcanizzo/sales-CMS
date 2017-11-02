// D E P E N D E N C I E S 
const express = require('express');
const router = express.Router();
const products = require('../../models/products.js');

router.get('/', (req,res)=>{
    res.send('api working');
});

router.get('/products', (req,res)=>{
    products.all((data)=>{
        res.json(data);
    })
});

module.exports = router;