const mysql = require('mysql2');
const pool = mysql.createPool({
    connectionLimit:10,
    password:'NarayanajuNi32',
    user:'root',
    database:'productdetails',
    host:'localhost',
    port:'3306'
});

let prodb ={};
prodb.all=()=>{
    return new Promise((resolve,reject)=>{
        pool.query('SELECT * FROM PRODUCTS', (err,result)=>{
            if(err){
                return reject(err);
            }
            return resolve(result);
        })
    });
}
module.exports =prodb;