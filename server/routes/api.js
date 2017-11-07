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
    let productId = req.params.id;
    console.log(productId);
    products.allByOne('id', productId, (result)=>{
        res.json(result)
    })
})

router.post('/update/:id', (req,res)=>{
    let id = req.params.id;
    let name = req.body.name;
    console.log(`Update ID: \n ${id}`);  
    let condition = `id = ${id}`;
    let values = `
        name = ${name}
    `;  
    products.update(condition, values, ()=>{
        res.redirect(`/product/${id}`)
    })
})
module.exports = router;
