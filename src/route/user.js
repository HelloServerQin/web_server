const { postLogin, postRegister}=require('../controller/user');
const {SuccessModel,ErrorModel}=require('../model/resModel');

const UserRequest=function(req,res){

   //用户登录页面
   if(req.reqMethod=="POST"&&req.reqUrl=="/api/user/login"){
     return new SuccessModel(postLogin(req.query.username,req.query.password));
   }
   //用户注册页面
   if(req.reqMethod=="POST"&&req.reqUrl=="/api/user/register"){
     return new SuccessModel(postRegister(req.query));
   }
}

module.exports={
  UserRequest
}