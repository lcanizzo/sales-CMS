const orm = require('../config/orm.js');

const product = {
    all: (cb)=>{
        orm.all("products", (res)=>{
            cb(res);
        });
    },
    allByOne: (cond, val, cb)=>{
        orm.allByOne("products", cond, val, (res)=>{
            cb(res);
        });
    },
    create: (cols, vals, cb)=>{
        orm.create("products", cols, vals, (res)=>{
            cb(res);
        });
    },
    update: (cond, val, cb)=>{
        orm.update("products", cond, val, (res)=>{
            cb(res);
        });
    },
    deleteAllByOne: (cond, val, cb)=>{
        orm.deleteAllByOne("products", cond, val, (res)=>{
            cb(res);
        });
    }
};

module.exports = product;