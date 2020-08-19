/**
 * 登录
 * @param {string} username 用户名
 * @param {string} password 密码
 * @returns 返回一个简单的用户数据
 */
const postLogin=(username="",password="")=>{
  return {
      token:"", // 认证
      username:"张三", // 用户名
      password:"123456", // 密码
      userIcon:'' // 用户头像
  }
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