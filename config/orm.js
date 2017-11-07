const log = console.log;
// M Y S Q L   C O N N E C T I O N
const connection = require('../config/connection.js');

// V A L U E S   S Y N T A X   H E L P E R
const printQuestionMarks = (length)=>{
    let arr = [];
    for (let i = 0; i< length; i++){
        arr.push("?");
    }
    return arr.toString();
}

// O R M 
const orm = {
    all: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            cb(result);
        });
    },
    allByOne: (table, cond, val, cb)=>{
        let queryString = `SELECT * FROM ${table} WHERE ${cond} = ? ;`;
        log(`ORM searching for ${queryString}\n`);
        connection.query(queryString, val, (err, result)=>{
            log(`ORM allByOne Result:\n 
                ${result}
            `)
            cb(result);
        });
    },
    create: (table, cols, vals, cb)=>{
        let columns = cols.toString();
        let values = printQuestionMarks(vals.length);
        let queryString = `INSERT INTO ${table} (${columns}) VALUES (${values});`;
        log(`ORM create item:\n
            ${queryString}\n
            ORM create values:\n
            ${values}`
        );
        connection.query(queryString, vals, (err, result)=>{
            cb(result);
        });
    },
    update: (table, cond, vals, cb)=>{
        let queryString= `UPDATE ${table} SET name= "Other Thing" WHERE id=2;`;
        // let queryString= `UPDATE ${table} SET ${vals} WHERE ${cond};`
        log(`ORM update item:\n
            ${queryString}
        `);
        connection.query(queryString, vals, (err, result)=>{
            if(err) {
                log(`ORM update Error:\n ${err}`)
            } else {
                log(`ORM update Result: \n
                    ${result}
                `);
                cb(result)
            }
        });
    },
    deleteAllByOne: (table, cond, val, cd)=>{
        let queryString = `DELETE FROM ${table} WHERE ${cond} = ? ;`;
        connection.query(queryString, val, (err, result)=>{
            log(`ORM deleteAllByOne Result:\n 
                ${result}
            `)
            cb(result);
        });
    }
}

module.exports = orm;