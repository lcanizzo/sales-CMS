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
    const condition = `id = ${id}`;
    const values = `name = "${req.body.name}", 
        material = "${req.body.material}",  
        price = ${req.body.price},
        categories_id = ${req.body.categories_id},
        SKU = "${req.body.SKU}",
        weight = ${req.body.weight},        
        cartDesc = "${req.body.cartDesc}",
        longDesc = "${req.body.longDesc}",
        thumb = "${req.body.thumb}",
        stock = ${req.body.stock},
        live = ${req.body.live},
        inStock = ${req.body.inStock},
        lastUpdate = now()
    `;  
    products.update(condition, values, (result)=>{
        console.log(result);
    })
})

router.post('/createProduct', (req,res)=>{
    console.log('product/new route hit');
})

module.exports = router;
