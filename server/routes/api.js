// D E P E N D E N C I E S 
const express = require('express');
const router = express.Router();
const products = require('../../models/products.js');
const admin = require('../../models/admin.js');

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
        image = "${req.body.image}",
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
    console.log('product/new Api route hit');
    const cols = "`name`, `material`, `price`, `categories_id`, `SKU`, `weight`, `cartDesc`, `longDesc`, `thumb`, `image`, `lastUpdate`, `stock`, `live`, `inStock`";
    const vals = [`"${req.body.name}"`, `"${req.body.material}"`, `${req.body.price}`, `${req.body.categories_id}`, `"${req.body.SKU}"`, `${req.body.weight}`, `"${req.body.cartDesc}"`, `"${req.body.longDesc}"`, `"${req.body.thumb}"`, `"${req.body.image}"`, 'now()', `${req.body.stock}`, `${req.body.live}`, `${req.body.inStock}`];

    console.log(`Api values:\n ${vals}`);
    products.create(cols, vals, (result)=>{
        console.log(`Create Product model Result:\n ${result}`);
    })
})

router.post('/admin', (req,res)=>{
    const condition = `email`;
    const value = req.body.email;
    admin.byOne(condition, value, (result)=>{
        res.json(result);
    })
    console.log('admin Api route hit');    
})

router.post('/deleteProduct', (req,res)=>{
    const condition = `id`;
    const value = req.body.id;
    products.deleteAllByOne(condition, value, (result)=>{
        console.log('delete product API route hit');
    })
})

module.exports = router;