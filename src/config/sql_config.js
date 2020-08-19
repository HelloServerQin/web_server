// 根据环境 添加数据配置项
const env = process.env.NODE_ENV;
let sql_conf = null;
// dev 开发环境
if(env==="dev"){
  sql_conf = {
    host:'localhost',
    user:'root',
    password:'root',
    port:'3306',
    database:'test'
  }
}
// production 生产环境
if(env==="production"){
  sql_conf = {
    host:'localhost',
    user:'root',
    password:'root',
    port:'3306',
    database:'test'
  }
}
sql_conf = {
  host:'localhost',
  user:'root',
  password:'root',
  port:'3306',
  database:'test'
}
module.exports={
  sql_conf
}