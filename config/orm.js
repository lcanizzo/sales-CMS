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
  //All items by table
    all: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            cb(result);
        });
    },
  //All items from given table in model by one condition
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
  //Create item in given table in model
    create: (table, cols, vals, cb)=>{
        console.log(`Values Passed to ORM:\n ${vals}`);
        let queryString = `INSERT INTO ${table} (${cols}) VALUES (${vals});`;
        log(`ORM create item:\n
            ${queryString}\n
            ORM create values:\n
            ${vals}`
        );
        connection.query(queryString, vals, (err, result)=>{
            cb(result);
        });
    },
  //Update item(s) in given tabe in model based on one condition
    update: (table, cond, vals, cb)=>{
        let queryString= `UPDATE ${table} SET ${vals} WHERE ${cond};`
        
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
  //Delete all items from given table in model based on one condition
    deleteAllByOne: (table, cond, val, cb)=>{
        let queryString = `DELETE FROM ${table} WHERE ${cond} = ? ;`;
        connection.query(queryString, val, (err, result)=>{
            log(`ORM deleteAllByOne Query:\n ${queryString}\n`)
            log(`ORM deleteAllByOne Result:\n 
                ${JSON.stringify(result)}
            `)
            if (err) {
                log(`deleteAllByOne ORM Error: \n ${err}`)
            }
            cb(result);
        });
    }
}

module.exports = orm;
