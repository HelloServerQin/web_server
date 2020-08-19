// 链接数据
const mysql = require('mysql');
const {sql_conf} = require('../config/sql_config');
// 创建一个链接
const  conn =mysql.createConnection(sql_conf);

// 建立链接
  conn.connect();

  // conn.query
  // 关闭数据库链接
  // conn.end(err=>{
  //   console.log('关闭链接');
  // });

  const exec=sql=>{
    return new Promise((resolve,reject)=>{
      conn.query(sql,(err,result)=>{
           return (err && reject(err))|| resolve(result);
      });
    });
  }

  module.exports={exec};
