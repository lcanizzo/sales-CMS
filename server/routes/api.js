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

router.get('/product/:id', (req,res)=>{
    const productId = req.params.id;
    console.log(productId);
    products.allByOne('id', productId, (result)=>{
        res.json(result)
    })
})

router.post('/update/:id', (req,res)=>{
    const id = req.params.id;
    const name = req.body.name;
    const condition = `id = ${id}`;
    const values = `name = "${name}"`;  
    products.update(condition, values, (result)=>{
        console.log(result);
    })
})
module.exports = router;
