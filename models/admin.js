const orm = require('../config/orm.js');

const admin = {
    byOne: (cond, val, cb)=>{
        orm.allByOne("admin", cond, val, (res)=>{
            cb(res);
        });
    }
};

module.exports= admin;