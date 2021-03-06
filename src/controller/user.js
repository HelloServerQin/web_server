// 调用数据库
const {exec} = require('../db/mysql_');
/**
 * 登录
 * @param {string} username 用户名
 * @param {string} password 密码
 * @returns 返回一个简单的用户数据
 * token:"", // 认证
 * username:"张三", // 用户名
 * password:"123456", // 密码
 * userIcon:'' // 用户头像
 */
const postLogin=async(username="",password="")=>{
  if(!username&&password)return '登录用户名和密码错误';// 如果没有值登录
  let sql =`select username,password,userIcon,token from adminstater where username = '${username}' and password = '${password}' `;
  return await exec(sql);
}

/**
 * 用户注册
 * @param {Object} formData  用户注册数据: username姓名 password密码 age年龄 birthday生日 userIcon头像 address地址 alina 别名 email邮箱 phone: 手机号码;
 * @returns 返回用户注册成功,重定向
 */
const postRegister=(formData=null)=>{
  return formData && '注册成功'
}

module.exports={
  postLogin,
  postRegister
}