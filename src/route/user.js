const { postLogin, postRegister}=require('../controller/user');
const {SuccessModel,ErrorModel}=require('../model/resModel');

const UserRequest=function(req,res){
   //用户登录页面
   if(req.reqMethod==="POST"&&req.reqUrl=="/api/user/login"){
     //用户登录成功需要填写cookie写入当前数据;
     res.setHeader('Set-Cookie',"username=lisi;path=/");
     return postLogin(req.query.username,req.query.password).then(data=>{
        if (data.length) {
          // 服务端口需要写入cookie数据
          // console.log(data[0].token);
          const obj=data[0];
          // // setHeader('Set-Cookie', ['type=ninja', 'language=javascript'])
          // const CookieConfig = [`token=${obj.token}`,
          // `username=${obj.username}`,
          // `path=/`,
          // `httpOnly`,
          // `expires = ${getTimeCookie()}`];
          // res.setHeader('Set-Cookie',CookieConfig);
          return new SuccessModel(obj,'登录成功')
        }
        return new ErrorModel('用户名或密码错误,当前登录失败!');
     }).catch(err=>{
       console.log(err);
     });
   }
   //用户注册页面
   if(req.reqMethod=="POST"&&req.reqUrl=="/api/user/register"){
     return new SuccessModel(postRegister(req.query));
   }
}

const getTimeCookie=()=>{
  const d = new  Date();// 获取当前时间
  d.setTime(d.getTime()+(24*60*60*1000*3)); // 重新设置当前时间
  return d.toGMTString();
}

module.exports={
  UserRequest
}