const {BlogRequest}  = require('./src/route/blog');
const {UserRequest}  = require('./src/route/user');
const querystring = require('querystring');

// 处理解析用户数据和返回最终数据处理逻辑;
 async function configApp(req,res){
    res.setHeader("Content-type","application/json");
    // let url = req.path;
    // 解析路由地址
    req.reqUrl=req.url.split("?")[0];
    req.reqMethod=req.method;
    // 解析请求数据  get 和 post delete patch put   5种请求只取 get post 
    // get请求数据的添加
    req.method==="GET"&&(req.query=querystring.parse(req.url.split("?")[1]));
     req.method==="POST"&& (req.query=await postDataBank(req));

     // 请求数据;
    let responsData =await( BlogRequest(req,res) ||UserRequest(req,res));
    // 响应回来的都是对象,返回一个json文件格式回去;
    responsData||(res.writeHead(404,{ 'Content-Type': 'text/plain;charset=utf-8' }).write("当前路径未找到!"));
    res.end(JSON.stringify(responsData));
}

// post 请求数据解析 发送数据;
const  postDataBank = (req)=>{
    return new Promise((resolve)=>{
         let postData="";
        req.on('data',(chunk)=>{
            postData+=chunk.toString();
        });
         req.on('end',()=>{
          return  resolve(JSON.parse(postData));
        });
    });
   
}

module.exports= configApp;